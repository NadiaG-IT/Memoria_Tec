import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Chatbot from "./Chatbot";
import "./Wizard.css";

const Wizard = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    step1Data: {
      loveLetter: false,
      farewellLetter: false,
      dismissalLetter: false
    },
    step2Data: "",
    step3Data: "",
    step4Data: "",
    step5Data: ""
  });

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const handlePrev = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleFinish = async () => {
    try {
      setCurrentStep(6); // Avanza al Chatbot al finalizar
    } catch (error) {
      console.error("Error al obtener respuesta del chatbot:", error);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1 data={formData} setData={setFormData} />;
      case 2:
        return <Step2 data={formData} setData={setFormData} />;
      case 3:
        return <Step3 data={formData} setData={setFormData} />;
      case 4:
        return <Step4 data={formData} setData={setFormData} />;
      case 5:
        return <Step5 data={formData} setData={setFormData} />;
      case 6:
        return <Chatbot formData={formData} />;
      default:
        return null;
    }
  };

  return (
    <div className="wizard-container">
      {renderStep()}

      {currentStep > 1 && currentStep < 6 && (
        <button className="prev-btn" onClick={handlePrev}>
          Anterior
        </button>
      )}

      {currentStep < 5 && (
        <button className="next-btn" onClick={handleNext}>
          Siguiente
        </button>
      )}

      {currentStep === 5 && (
        <button className="finish-btn" onClick={handleFinish}>
          Finalizar
        </button>
      )}
    </div>
  );
};

export default Wizard;
