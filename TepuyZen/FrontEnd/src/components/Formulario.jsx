import React, { useState } from 'react';
import axios from 'axios';

const Formulario = ({titulo, enviado, setEnviado }) => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [fechaEntrada, setFechaEntrada] = useState('');
  const [fechaSalida, setFechaSalida] = useState('');
  const [correo, setCorreo] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { nombre, apellido, fechaEntrada, fechaSalida, correo, titulo };
    try {
      const response = await axios.post('http://localhost:3000/api/reservas', data);
      if (response.status === 201) {
        console.log('Reserva creada');
        setEnviado(true);
        // Reiniciar los estados de los campos del formulario
        setNombre('');
        setApellido('');
        setFechaEntrada('');
        setFechaSalida('');
        setCorreo('');
      } else {
        console.error('Error al crear la reserva');
      }
    } catch (error) {
      console.error('Error al crear la reserva', error);
    }

    try {
      const response = await fetch('http://localhost:3000/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        console.log('Email enviado');
        setEnviado(true);
        // Reiniciar los estados de los campos del formulario
        setNombre('');
        setApellido('');
        setFechaEntrada('');
        setFechaSalida('');
        setCorreo('');
      } else {
        console.error('Error al enviar el email');
      }
    } catch (error) {
      console.error('Error al enviar el email', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="mb-2">
        <input
          type="text"
          id="nombre"
          htmlFor="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Nombre"
          required
        />
      </div>
      <div className="mb-2">
        <input
          type="text"
          id="apellido"
          htmlFor="apellido"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
          className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Apellido"
          required
        />
      </div>
      <div className="mb-2">
        <label htmlFor="fechaEntrada" className="block text-sm font-medium text-gray-700">
          Fecha de Entrada
        </label>
        <input
          type="date"
          id="fechaEntrada"
          value={fechaEntrada}
          onChange={(e) => setFechaEntrada(e.target.value)}
          className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Fecha de Entrada"
          required
        />
      </div>
      <div className="mb-2">
        <label htmlFor="fechaSalida" className="block text-sm font-medium text-gray-700">
          Fecha de Salida
        </label>
        <input
          type="date"
          id="fechaSalida"
          value={fechaSalida}
          onChange={(e) => setFechaSalida(e.target.value)}
          className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Fecha de Salida"
          required
        />
      </div>
      <div className="mb-2">
        <input
          type="email"
          id="correo"
          htmlFor="correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Correo Electrónico"
          required
        />
      </div>
      <div className="mb-4">
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-indigo-200"
        >
          Enviar
        </button>
      </div>
      {enviado && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Reserva creada!</strong>
          <span className="block sm:inline"> Tu reserva ha sido creada correctamente.</span>
        </div>
      )}
    </form>
  );
};

export default Formulario;
