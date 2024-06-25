import React, { useState } from "react";
import "./project.css";

const Project = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const opciones = [
    { nombre: "Archivo", icono: "fas fa-archive" },
    { nombre: "Documento", icono: "fas fa-file-alt" },
    { nombre: "Carta", icono: "fas fa-envelope" },
    { nombre: "Informe", icono: "fas fa-chart-line" },
    { nombre: "Borrador", icono: "fas fa-pencil-alt" }
  ];

  const trabajos = {
    Archivo: [
      { nombre: "Archivo 1", descripcion: "Descripción del Archivo 1" },
      { nombre: "Archivo 2", descripcion: "Descripción del Archivo 2" },
    ],
    Documento: [
      { nombre: "Documento 1", descripcion: "Descripción del Documento 1" },
      { nombre: "Documento 2", descripcion: "Descripción del Documento 2" },
    ],
    Carta: [
      { nombre: "Carta 1", descripcion: "Descripción de la Carta 1" },
      { nombre: "Carta 2", descripcion: "Descripción de la Carta 2" },
    ],
    Informe: [
      { nombre: "Informe 1", descripcion: "Descripción del Informe 1" },
      { nombre: "Informe 2", descripcion: "Descripción del Informe 2" },
    ],
    Borrador: [
      { nombre: "Borrador 1", descripcion: "Descripción del Borrador 1" },
      { nombre: "Borrador 2", descripcion: "Descripción del Borrador 2" },
    ]
  };

  const filteredTrabajos = selectedOption
    ? trabajos[selectedOption].filter(trabajo =>
        trabajo.nombre.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  const renderContent = () => {
    if (!selectedOption) {
      return <div className="example-content">Seleccione una opción del menú</div>;
    }

    return (
      <div className="example-content">
        <h2>{selectedOption}</h2>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Buscar..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="folder-container">
          {filteredTrabajos.map((trabajo, index) => (
            <div key={index} className="folder">
              <div className="folder-icon"><i className={opciones.find(opcion => opcion.nombre === selectedOption).icono}></i></div>
              <div className="folder-details">
                <h3>{trabajo.nombre}</h3>
                <p>{trabajo.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="project-container">
      <div className="horizontal-menu">
        <h2>Menú</h2>
        <ul>
          {opciones.map((opcion, index) => (
            <li key={index} className={selectedOption === opcion.nombre ? 'active' : ''} onClick={() => setSelectedOption(opcion.nombre)}>
              <i className={opcion.icono}></i>
              <span>{opcion.nombre}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="content">
        {renderContent()}
      </div>
    </div>
  );
};

export default Project;
