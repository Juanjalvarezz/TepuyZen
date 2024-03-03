import React, { useState } from 'react';
import Back from '../components/Back';
import Footer from "../components/Footer";
import Formulario from '../components/Formulario';

const CuartoDobleDlx = () => {
  const [enviado, setEnviado] = useState(false);

  const TipoHabitacion = ("Cuarto Doble Deluxe")

  //Cuarto Doble Deluxe
  return (
    <section>
      <Back />

      <div className="flex w-3/5 mx-auto mt-5 justify-center">
      <div className='grid grid-cols-1 sm:grid-cols-3 items-center justify-center gap-3'>
          <img src={'https://i.ibb.co/rbMNvy0/fbf3e531-c5fb-48e6-a7ba-4046eba425ce.jpg'} alt="Imagen" className="w-80 h-auto object-cover mb-3" />
          <img src={'https://i.ibb.co/G72jZ5m/0a49c38e-6536-4b4d-bfaa-24e09c86d107.jpg'} alt="Imagen" className="w-80 h-auto object-cover mb-3" />
          <img src={'https://i.ibb.co/rcBd3qR/51cf3def-8eb9-4702-932e-9d29ccb5f1fe.jpg'} alt="Imagen" className="w-80 h-auto object-cover mb-3" />
      </div>
      </div>

      <div className="bg-transparent backdrop-blur-md p-5 border-transparent border-2 rounded-lg mb-4 mt-2 w-full mx-auto">
        <div className='grid grid-cols-1 md:grid-cols-2 text-center items-center justify-center gap-3'>

          <div className="p-5 rounded-xl mb-3 w-full flex flex-col items-center " style={{ background: '#DDE7C7' }}>
            <div className="text-center">
              <h1 className="title tracking-wider text-2xl font-bold mb-2">Cuarto Doble Deluxe</h1>
              <ul className='px-8 amatic-sc-bold text-2xl flex flex-col items-start  list-disc'>
                <li className='mb-2'>Número de huespedes: 2 - 3</li>
                <li className='mb-2'>Tamaño de la habitación: 40m²</li>
                <li className='mb-2'>Tamaño de cama: Individual y Matrimonial</li>
                <li className='mb-2'>Baño privado: 2</li>
                <li className='mb-2 text-start'>La habitación doble está reservada para de 2 a 3 huéspedes. Hay un dormitorio con 1 cama matrimonial, 1 individual y 2 baños privados. Todo lo que necesitan preparado para ustedes: sábanas y mantas, toallas, jabón y champú, secador de pelo. En la habitación hay aire acondicionado, WiFi, balcon y sala de estar.</li>
              </ul>
            </div>
          </div>

          <div className="p-5 rounded-xl mb-3 w-full items-center " style={{ background: '#DDE7C7' }}>
            <div className="text-center">
              <Formulario titulo={TipoHabitacion} enviado={enviado} setEnviado={setEnviado} />
            </div>
          </div>

        </div>
      </div>

      <div className="bg-transparent backdrop-blur-md p-5 border-transparent border-2 rounded-lg mb-4 mt-2 w-4/5 mx-auto">
        <div className='grid grid-cols-1 md:grid-cols-2 text-center items-center justify-center gap-3'>

          <div className="p-5 rounded-xl mb-3 w-full flex flex-col items-center " style={{ background: '#98C9A3' }}>
            <div className="text-center">
              <h1 className="title text-2xl tracking-wider mb-2" style={{ color: '#EDEEC9' }}>Servicios Incluidos</h1>
              <ul class="amatic-sc-bold text-2xl flex flex-col items-center sm:flex-row sm:flex-wrap">
                <li className='mb-2 w-1/2 sm:w-1/4'><i class="fa-solid fa-wifi"></i> Wifi</li>
                <li className='mb-2 w-1/2 sm:w-1/4'><i class="fa-solid fa-wind"></i> Aire Acondicionado</li>
                <li className='mb-2 w-1/2 sm:w-1/4'><i class="fa-solid fa-utensils"></i> Buffet</li>
                <li className='mb-2 w-1/2 sm:w-1/4'><i class="fa-solid fa-dumbbell"></i> Gimnasio</li>
                <li className='mb-2 w-1/2 sm:w-1/4'><i class="fa-solid fa-van-shuttle"></i> Transporte</li>
                <li className='mb-2 w-1/2 sm:w-1/4'><i class="fa-solid fa-dog"></i> Mascotas</li>
                <li className='mb-2 w-1/2 sm:w-1/4'><i class="fa-solid fa-martini-glass"></i> Mini Bar</li>
                <li className='mb-2 w-1/2 sm:w-1/4'><i class="fa-solid fa-bell-concierge"></i> Servicio a la habitacion</li>
            </ul>
            </div>
          </div>

          <div className="p-5 rounded-xl mb-3 w-full flex flex-col items-center " style={{ background: '#98C9A3' }}>
            <div className="text-center">
              <h1 className="title text-2xl tracking-w-2" style={{ color: '#EDEEC9' }}>Servicios <span className="text-red-500">NO</span> Incluidos</h1>
              <ul className='amatic-sc-bold text-2xl flex flex-row items-center text-gray-800'>
                <li className='mb-2 w-1/2 sm:w-2/4'><i class="fa-solid fa-smoking"></i> Fumar</li>
                <li className='mb-2 w-1/2 sm:w-2/4'><i class="fa-solid fa-baby"></i> Bebes</li>
              </ul>
            </div>

            <div>
            <h1 className="title text-2xl tracking-w-2" style={{ color: '#EDEEC9' }}>Precios</h1>

                <div className='grid grid-cols-1 sm:grid-cols-2 items-center justify-center gap-8'>
                  <div className='text-center'>
                  <h1 className="amatic-sc-bold text-3xl font-bold mb-2">Weekday</h1>
                  <h1 className="amatic-sc-bold text-3xl font-bold mb-2">120$ / Noche</h1>
                  </div>

                  <div className='text-center'>
                  <h1 className="amatic-sc-bold text-3xl font-bold mb-2">Week-End</h1>
                  <h1 className="amatic-sc-bold text-3xl font-bold mb-2">135$ / Noche</h1>
                </div>
            </div>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </section>
  );
};

export default CuartoDobleDlx;
