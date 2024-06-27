import React, { useState, useEffect, useRef, useCallback } from 'react';
import { addResponseMessage } from 'react-chat-widget';
import toast, { Toaster } from 'react-hot-toast';
import 'react-chat-widget/lib/styles.css';
import './Chatbot.css';
import jsPDF from 'jspdf';
import logoImg from '../USM.png'; // Importar la imagen

const Chatbot = ({ formData }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const chatContainerRef = useRef(null);

  const generatePrompt = useCallback((formData) => {
    let prompt = "Genera un informe de instalación en español basado en los siguientes datos:\n";
    if (formData.recipient) {
      prompt += `Cliente: ${formData.recipient}\n`;
    }
    if (formData.fecha) {
      prompt += `Fecha: ${formData.fecha}\n`;
    }
    if (formData.customMessage) {
      prompt += `Mensaje: ${formData.customMessage}\n`;
    }
    if (formData.sharedActivities) {
      prompt += `Actividades compartidas: ${formData.sharedActivities}\n`;
    }
    return prompt;
  }, []);

  const generateInstallationReport = useCallback((formData) => {
    let report = `Informe de Instalación:\n\n`;

    if (formData.recipient) {
      report += `Cliente: ${formData.recipient}\n`;
    }
    if (formData.fecha) {
      report += `Fecha: ${formData.fecha}\n\n`;
    }
    if (formData.customMessage) {
      report += `Mensaje: ${formData.customMessage}\n\n`;
    }
    if (formData.sharedActivities) {
      report += `Actividades compartidas:\n${formData.sharedActivities}\n\n`;
    }

    report += `Gracias por elegirnos para las necesidades de su establecimiento.\n\n`;
    report += `Atentamente,\nUSM NETWORKS`;

    return report;
  }, []);

  const sendFormDataToServer = useCallback(async (formData) => {
    try {
      const response = await fetch('https://api.openai.com/v1/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': '',
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo-instruct',
          prompt: generatePrompt(formData),
          max_tokens: 300,
          temperature: 0.7,
          n: 1,
        }),
      });
      const data = await response.json();
      console.log(data); // Verifica la estructura de la respuesta en la consola
      if (data && data.choices && data.choices.length > 0) {
        const generatedText = data.choices[0].text.trim();

        // Generar e agregar el informe de instalación
        const installationReport = generateInstallationReport(formData);
        
        // Combinar el texto generado por OpenAI y el informe de instalación
        const combinedReport = `${generatedText}\n\n${installationReport}`;
        
        // Agregar el informe combinado a los mensajes
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: combinedReport, isSentByUser: false, timestamp: new Date() }
        ]);

      } else {
        console.error('Respuesta del chatbot no válida:', data);
        addResponseMessage('Lo siento, la respuesta del chatbot no es válida.');
      }
    } catch (error) {
      console.error('Error al obtener respuesta del chatbot:', error);
      addResponseMessage('Lo siento, hubo un error al procesar tu solicitud.');
    }
  }, [generatePrompt, generateInstallationReport]);

  useEffect(() => {
    addResponseMessage("¡Hola! ¿En qué puedo ayudarte?");
  }, []);

  useEffect(() => {
    if (formData) {
      sendFormDataToServer(formData);
    }
  }, [formData, sendFormDataToServer]);

  const handleInputChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: newMessage, isSentByUser: true, timestamp: new Date() }
      ]);
      setNewMessage('');
    }
  };

  const handleSaveAsPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(12);
    
    // Agregar el logo al PDF
    doc.addImage(logoImg, 'PNG', 10, 10, 40, 40); // Ajusta las coordenadas y dimensiones según sea necesario

    // Agregar el título
    doc.text('Informe:', 10, 60);

    // Agregar las conversaciones
    let yPosition = 70;
    messages.forEach((message, index) => {
      const timestamp = message.timestamp ? message.timestamp.toLocaleString() : 'No timestamp';
      const formattedMessage = `${timestamp} - ${message.isSentByUser ? 'User: ' : 'Bot: '}${message.text}`;
      const textLines = doc.splitTextToSize(`${index + 1}. ${formattedMessage}`, 180);
      doc.text(textLines, 10, yPosition);
      yPosition += textLines.length * 10; // Ajustar el espaciado basado en el número de líneas
    });

    doc.save('chatbot-informe.pdf');
    console.log('Conversación guardada como PDF');

    // Mostrar notificación
    toast.success('Informe enviado y guardado correctamente', {
      position: "top-right",
      duration: 5000,
    });
  };

  return (
    <div className="chatbot-container" ref={chatContainerRef}>
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.isSentByUser ? 'user-message' : 'bot-message'}`}>
            <span className="message-text">{message.text}</span>
            <span className="message-timestamp">{message.timestamp ? message.timestamp.toLocaleString() : 'No timestamp'}</span>
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input type="text" value={newMessage} onChange={handleInputChange} />
        <button onClick={handleSaveAsPDF}>Guardar</button>
      </div>
      <Toaster />
    </div>
  );
};

export default Chatbot;
