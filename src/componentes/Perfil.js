import React from 'react';

const Perfil = () => {
  return (
    <div>
      <h2>Perfil de Usuario</h2>
      <div>
        <img src="imagen-de-perfil.jpg" alt="Imagen de perfil" />
        <h3>Nombre de Usuario</h3>
        <p>Correo electrónico: ejemplo@correo.com</p>
        {/* Aquí puedes incluir más información personal del usuario */}
        <button>Editar Perfil</button>
      </div>
    </div>
  );
}

export default Perfil;
