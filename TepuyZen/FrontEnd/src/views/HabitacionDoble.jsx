import React, { useState } from 'react';
import Back from '../components/Back';
import Footer from "../components/Footer";
import Formulario from '../components/Formulario';

const HabitacionDoble = () => {
  const [enviado, setEnviado] = useState(false);

  const TipoHabitacion = ("Habitacion Doble")

  //Habitacion Doble
  return (
    <section>
      <Back />

      
      <div className="flex w-3/5 mx-auto mt-5 justify-center">
      <div className='grid grid-cols-1 sm:grid-cols-3 items-center justify-center gap-3'>
          <img src={'https://i.ibb.co/JjgvkmD/3b141bf5-6007-4416-b710-aee7b9d8fd93.jpg'} alt="Imagen" className="w-80 h-auto object-cover mb-3" />
          <img src={'https://i.ibb.co/SNGX1np/b8a6bfdf-75f4-4072-90b4-57e1668442cd.jpg'} alt="Imagen" className="w-80 h-auto object-cover mb-3" />
          <img src={'https://i.ibb.co/X7j13L4/0d85f648-2afb-467d-822b-beec8827e91b.jpg'} alt="Imagen" className="w-80 h-auto object-cover mb-3" />
      </div>
      </div>


      <div className="bg-transparent backdrop-blur-md p-5 border-transparent border-2 rounded-lg mb-4 mt-2 w-full mx-auto">
        <div className='grid grid-cols-1 md:grid-cols-2 text-center items-center justify-center gap-3'>

          <div className="p-5 rounded-xl mb-3 w-full flex flex-col items-center " style={{ background: '#DDE7C7' }}>
            <div className="text-center">
              <h1 className="title tracking-wider text-2xl font-bold mb-2">Habitacion Doble</h1>
              <ul className='px-8 amatic-sc-bold text-2xl flex flex-col items-start  list-disc'>
                <li className='mb-2'>Número de huespedes: 2 - 4</li>
                <li className='mb-2'>Tamaño de la habitación: 40m²</li>
                <li className='mb-2'>Tamaño de cama: Matrimoniales</li>
                <li className='mb-2'>Baño privado: 2</li>
                <li className='mb-2 text-start'>La habitación doble está reservada para de 2 - 4 huéspedes. Hay un dormitorio con 2 camas Matrimoniales, y 2 baño privado. Todo lo que necesitan preparado para ustedes: sábanas y mantas, toallas, jabón y champú, secador de pelo. En la habitación hay aire acondicionado y por supuesto WiFi.</li>
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
              <ul class="amatic-sc-bold text-2xl flex flex-col items-center text-start sm:flex-row sm:flex-wrap">
                <li className='mb-2 w-1/2 '><i class="fa-solid fa-wifi"></i> Wifi</li>
                <li className='mb-2 w-1/2 '><i class="fa-solid fa-wind"></i> Aire Acondicionado</li>
                <li className='mb-2 w-1/2 '><i class="fa-solid fa-utensils"></i> Buffet</li>
                <li className='mb-2 w-1/2 '><i class="fa-solid fa-dumbbell"></i> Gimnasio</li>
                <li className='mb-2 w-1/2 '><i class="fa-solid fa-van-shuttle"></i> Transporte</li>
                <li className='mb-2 w-1/2'><i class="fa-solid fa-baby"></i> Bebes</li>
            </ul>
            </div>
          </div>

          <div className="p-5 rounded-xl mb-3 w-full flex flex-col items-center " style={{ background: '#98C9A3' }}>
            <div className="text-center">
              <h1 className="title text-2xl tracking-w-2" style={{ color: '#EDEEC9' }}>Servicios <span className="text-red-500">NO</span> Incluidos</h1>
              <ul className='amatic-sc-bold text-2xl flex flex-col text-start items-start sm:flex-row sm:flex-wrap text-gray-800'>
                <li className='mb-2 w-1/2 sm:w-1/4'><i class="fa-solid fa-dog"></i> Mascotas</li>
                <li className='mb-2 w-1/2 sm:w-1/4'><i class="fa-solid fa-smoking"></i> Fumar</li>
                <li className='mb-2 w-1/2 sm:w-1/4'><i class="fa-solid fa-martini-glass"></i> Mini Bar</li>
                <li className='mb-2 w-1/2 sm:w-1/4'><i class="fa-solid fa-bell-concierge"></i> Servicio a la habitacion</li>
              </ul>
            </div>

            <div>
            <h1 className="title text-2xl tracking-w-2" style={{ color: '#EDEEC9' }}>Precios</h1>

                <div className='grid grid-cols-1 sm:grid-cols-2 items-center justify-center gap-8'>
                  <div className='text-center'>
                  <h1 className="amatic-sc-bold text-3xl font-bold mb-2">Weekday</h1>
                  <h1 className="amatic-sc-bold text-3xl font-bold mb-2">110$ / Noche</h1>
                  </div>

                  <div className='text-center'>
                  <h1 className="amatic-sc-bold text-3xl font-bold mb-2">Week-End</h1>
                  <h1 className="amatic-sc-bold text-3xl font-bold mb-2">115$ / Noche</h1>
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

export default HabitacionDoble;
