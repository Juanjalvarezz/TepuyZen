import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter} from 'react-router-dom';
import './index.css'
import AnimatedRoutes from './components/AnimatedRoutes';

//Rutas que se renderizan en el componente AnimatedRoutes donde estan las transiciones
function Main() {
  return (
    <div>
        <AnimatedRoutes/>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </React.StrictMode>,
);