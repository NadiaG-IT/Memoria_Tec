import React, { useState } from 'react';
import { MDBInput } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import { auth } from '../Firebase'; // Importa 'auth' desde Firebase
import { signInWithEmailAndPassword } from 'firebase/auth'; // Importa 'signInWithEmailAndPassword' directamente desde Firebase Authentication

import './Login.css'; 

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); // Estado para almacenar el mensaje de error

  const iniciarSesion = async () => {
    try {
      setError(null); // Restablece el estado de error antes de intentar iniciar sesión
      await signInWithEmailAndPassword(auth, email, password); // Utiliza signInWithEmailAndPassword de 'auth'
      navigate('/home'); // Redirige al usuario a la página de inicio
    } catch (error) {
      console.error(error.message);
      setError(error.message); // Almacena el mensaje de error en el estado
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="formulario-container">
          <form>
            <div className="imagen-container">
              <img src="/images/logo.png" alt="Imagen de ejemplo" />
            </div>
            <MDBInput 
              wrapperClass='mb-4' 
              id='email' 
              type='email' 
              size="lg" 
              placeholder="Enter your email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
            <MDBInput 
              wrapperClass='mb-4' 
              id='password' 
              type='password' 
              size="lg" 
              placeholder="Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </form>
        </div>

        {error && <div className="error-message">{error}</div>} {/* Muestra el mensaje de error si existe */}
        
        <button type="button" className="boton-registro" onClick={iniciarSesion}>Iniciar sesión</button>
        <p className="text-center text-muted mb-4">¿No tienes una cuenta? <a className="registro-link" href="/registro">Regístrate aquí</a>.</p>
        <div className="text-center">
        
        </div>
      </div>
    </div>
  );
}

export default Login;
