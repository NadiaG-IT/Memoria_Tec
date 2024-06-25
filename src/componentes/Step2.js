import React from "react";

const Step2 = ({ data, setData }) => {
  const handleInputChange = (e) => {
    setData({ ...data,  recipient: e.target.value });
    console.log("Datos actualizados en Step2:", { ...data, recipient: e.target.value });

  };

  return (
    <div>
      <h2>¿Compañía a la que se le realizó la instalación ?</h2>
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          className="form-control"
          placeholder="Ingrese el nombre de la compañía"
          value={data.recipient || ""}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default Step2;
