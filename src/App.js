import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./componentes/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AboutPages from "./pages/About";
import RegistroFormulario from"./pages/RegistroFormulario";
import Wizard from "./componentes/Wizard";
import Categories from "./pages/Categories";
import Project from "./pages/Project";
import Chatbot from "./componentes/Chatbot";
import Informe from "./pages/Informe";

function App() {
  const [documents, setDocuments] = useState([]);

  const formData = {
    location: "Ubicación Ejemplo",
    floors: 2,
    installationDate: "2024-06-13",
    lanCode: "LAN123",
    cameraCount: 5,
    cameraCode: "CAM456",
    plannedActivities: "instalación, configuración y prueba"
  };

  const handleAddDocument = (report) => {
    setDocuments([...documents, report]);
  };

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<AboutPages />} />
          <Route path="/project" element={<Project documents={documents} />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/registro" element={<RegistroFormulario />} />
          <Route path="/informe" element={<Informe/>} />
          <Route path="/chatbot" element={<Chatbot formData={formData} onAddDocument={handleAddDocument} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
