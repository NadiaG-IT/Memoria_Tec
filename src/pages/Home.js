// Home.js
import React from "react";
import './Home.css'; // Importa el archivo de estilos CSS para Home

const Home = () => {
  return (
    <div className="home-container">
      {/* Columna izquierda: Imagen principal */}
      <div className="image-container">
        {/* Ruta relativa a la imagen */}
        <img src="/images/Redesyl.jpg" alt="Imagen Principal" />
      </div>

      {/* Columna derecha: Información de la aplicación */}
      <div className="app-info">
        <h1>Descubre el poder transformador de la inteligencia artificial</h1>
        <div className="info-text">
          <p>Con esta aplicación, podrás acceder de manera rápida y eficiente a información relevante 
          sobre tus informes, realizar solicitudes de memorias, consultar tus proyectos, registrar tus cambios
          y acceder a recursos de capacitación profesional.</p>
        </div>
        {/* Puedes agregar cualquier otra información relacionada con la aplicación aquí */}
        <button className="download-button">Ver más</button>
      </div>
    </div>
  );
};

export default Home;
