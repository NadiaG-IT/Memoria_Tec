import React from "react";

const Step6 = ({ data, setData }) => {
  const handleInputChange = (e) => {
    setData({ ...data, sharedActivities: e.target.value });
    console.log("Datos actualizados en Step6:", { ...data, sharedActivities: e.target.value });

  };

  return (
    <div className="step-container">
      <h2>¿Hay pasatiempos, actividades o lugares que compartan y que puedan mencionarse en la carta?</h2>
      <input
        type="text"
        placeholder="Escribe aquí tu respuesta"
        value={data.sharedActivities || ""}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Step6;
