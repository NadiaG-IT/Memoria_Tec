import React from "react";

const Step3 = ({ data, setData }) => {
  const handleDateChange = (e) => {
    const { value } = e.target;
    setData({ ...data, fecha: value });
  };

  return (
    <div className="step-container">
      <h2>Selecciona una fecha:</h2>
      <input
        type="date"
        value={data.fecha || ""}
        onChange={handleDateChange}
      />
    </div>
  );
};

export default Step3;
