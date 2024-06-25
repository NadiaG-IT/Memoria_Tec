// Ejemplo de Step1
import React from "react";

const Step1 = ({ data, setData }) => {
  const handleOptionChange = (e) => {
    const { name, checked } = e.target;
    setData({
      ...data,
      step1Data: {
        ...data.step1Data,
        [name]: checked
      }
    });
  };

  return (
    <div>
      <h2>¿Qué tipo de informe quieres redactar?</h2>
      <div className="radio-container">
        <input
          type="checkbox"
          id="option1"
          name="loveLetter"
          checked={data.step1Data.loveLetter || false}
          onChange={handleOptionChange}
          className="radio-input"
        />
        <label htmlFor="option1" className="radio-label">Informe Técnico</label>
      </div>
      <div className="radio-container">
        <input
          type="checkbox"
          id="option2"
          name="farewellLetter"
          checked={data.step1Data.farewellLetter || false}
          onChange={handleOptionChange}
          className="radio-input"
        />
        <label htmlFor="option2" className="radio-label">Informe Práctico</label>
      </div>
      <div className="radio-container">
        <input
          type="checkbox"
          id="option3"
          name="dismissalLetter"
          checked={data.step1Data.dismissalLetter || false}
          onChange={handleOptionChange}
          className="radio-input"
        />
        <label htmlFor="option3" className="radio-label">Informe Simple</label>
      </div>
    </div>
  );
};

export default Step1;
