import React, { useState } from 'react';
import { Navigate } from 'react-router-dom'; // Importa Navigate en lugar de Redirect
import './RegistroFormulario.css';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'; // Importa getAuth y createUserWithEmailAndPassword de la biblioteca de Firebase




function RegistroFormulario() {
  const [registroExitoso, setRegistroExitoso] = useState(false); // Estado para el mensaje de registro exitoso
  const [error, setError] = useState(null); // Estado para el mensaje de error

  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [email, setEmail] = useState('');

  const manejarCambioUsuario = (event) => {
    setUsuario(event.target.value);
  };

  const manejarCambioContrasena = (event) => {
    setContrasena(event.target.value);
  };

  const manejarCambioEmail = (event) => {
    setEmail(event.target.value);
  };

  const registrarUsuario = async (event) => {
    event.preventDefault();
    try {
      // Utiliza Firebase para registrar al usuario
      const auth = getAuth(); // Obtiene el objeto auth de Firebase
      await createUserWithEmailAndPassword(auth, email, contrasena); // Registra al usuario con email y contraseña
      // Si el registro es exitoso, establece el estado correspondiente
      setRegistroExitoso(true);
    } catch (error) {
      // Si el registro falla, establece el estado de error
      setError(error.message);
    }
  };

  return (
    <div className="registro-container">
      <div className="registro-card">
        <h2>Registrarse</h2>
        {error && <div className="error-message">{error}</div>}
        {registroExitoso && (
          <div className="mensaje-exitoso">
            ¡Registro exitoso! Serás redirigido a la página de inicio de sesión.
          </div>
        )}
        <form onSubmit={registrarUsuario}>
          {/* Campos de formulario */}
          <div className={!registroExitoso ? 'visible' : 'oculto'}>
            <div className="campo">
              <label htmlFor="email">Correo:</label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={manejarCambioEmail}
                placeholder="Ingresa tu correo"
                required
              />
            </div>
            <div className="campo">
              <label htmlFor="usuario">Usuario:</label>
              <input
                type="text"
                id="usuario"
                value={usuario}
                onChange={manejarCambioUsuario}
                placeholder="Ingresa tu usuario"
                required
              />
            </div>
            <div className="campo">
              <label htmlFor="contrasena">Contraseña:</label>
              <input
                type="password"
                id="contrasena"
                value={contrasena}
                onChange={manejarCambioContrasena}
                placeholder="Ingresa tu contraseña"
                required
              />
            </div>
            <button type="submit" className="boton-registro">Registrarse</button>
          </div>
        </form>
        {registroExitoso && <Navigate to="/login" />} {/* Redirige al usuario si el registro fue exitoso */}
      </div>
    </div>
  );
}

export default RegistroFormulario;
