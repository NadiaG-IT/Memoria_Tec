import React from "react";

const Step4 = ({ data, setData }) => {
  const handleMessageChange = (e) => {
    setData({ ...data, customMessage: e.target.value });
    console.log("Datos actualizados en Step4:", { ...data, customMessage: e.target.value });
  };

  return (
    <div>
      <h2>¿Qué instalaciones se realizaron?</h2>
      <input
        type="text"
        placeholder="Ingresa tu mensaje aquí"
        value={data.customMessage || ""}
        onChange={handleMessageChange}
      />
    </div>
  );
};

export default Step4;
