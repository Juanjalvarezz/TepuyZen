import React from "react";
import { NavLink } from 'react-router-dom';

import hab1 from "../assets/img/hab1.png"
import hab2 from "../assets/img/hab2.png"
import hab3 from "../assets/img/hab3.png"
import hab4 from "../assets/img/hab4.png"
import hab5 from "../assets/img/hab5.png"
import hab6 from "../assets/img/hab6.png"


const Habitaciones = () => {
    return (
        <section className="w-4/5 mx-auto mt-5 mb-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">

          <div className="w-full h-60 sm:h-60 relative overflow-hidden rounded-xl">
            <img src={hab1} alt="Cuarto Simple" className="absolute inset-0 object-cover w-full h-full" />
            <div className="absolute amatic-sc-regular text-2xl inset-x-0 bottom-0 text-center text-white bg-green-700 bg-opacity-50 py-1">Cuarto Simple</div>
            <NavLink to='/cuartosimple' className="navbar-brand">
            <button className="absolute top-0 right-0 m-2 p-1 px-2 bg-green-500 text-white rounded-full "><i class="fa-solid fa-circle-info"></i></button>
            </NavLink>
          </div>

          <div className="w-full h-60 sm:h-60 relative overflow-hidden rounded-xl">
            <img src={hab2} alt="Cuarto Simple Deluxe" className="absolute inset-0 object-cover w-full h-full" />
            <div className="absolute amatic-sc-regular text-2xl inset-x-0 bottom-0 text-center text-white bg-green-700 bg-opacity-50 py-1">Cuarto Simple Deluxe</div>
            <NavLink to='/cuartosimpledlx' className="navbar-brand">
            <button className="absolute top-0 right-0 m-2 p-1 px-2 bg-green-500 text-white rounded-full "><i class="fa-solid fa-circle-info"></i></button>
            </NavLink>
          </div>

          <div className="w-full h-60 sm:h-60 relative overflow-hidden rounded-xl">
            <img src={hab3} alt="Cuarto Doble" className="absolute inset-0 object-cover w-full h-full" />
            <div className="absolute amatic-sc-regular text-2xl inset-x-0 bottom-0 text-center text-white bg-green-700 bg-opacity-50 py-1">Cuarto Doble</div>
            <NavLink to='/cuartodoble' className="navbar-brand">
            <button className="absolute top-0 right-0 m-2 p-1 px-2 bg-green-500 text-white rounded-full "><i class="fa-solid fa-circle-info"></i></button>
            </NavLink>
          </div>

          <div className="w-full h-60 sm:h-60 relative overflow-hidden rounded-xl">
            <img src={hab4} alt="Cuarto Doble Deluxe" className="absolute inset-0 object-cover w-full h-full" />
            <div className="absolute amatic-sc-regular text-2xl inset-x-0 bottom-0 text-center text-white bg-green-700 bg-opacity-50 py-1">Cuarto Doble Deluxe</div>
            <NavLink to='/cuartodobledlx' className="navbar-brand">
            <button className="absolute top-0 right-0 m-2 p-1 px-2 bg-green-500 text-white rounded-full "><i class="fa-solid fa-circle-info"></i></button>
            </NavLink>
          </div>

          <div className="w-full h-60 sm:h-60 relative overflow-hidden rounded-xl">
            <img src={hab5} alt="Habitación doble" className="absolute inset-0 object-cover w-full h-full" />
            <div className="absolute amatic-sc-regular text-2xl inset-x-0 bottom-0 text-center text-white bg-green-700 bg-opacity-50 py-1">Habitación doble</div>
            <NavLink to='/habitaciondoble' className="navbar-brand">
            <button className="absolute top-0 right-0 m-2 p-1 px-2 bg-green-500 text-white rounded-full "><i class="fa-solid fa-circle-info"></i></button>
            </NavLink>
          </div>

          <div className="w-full h-60 sm:h-60 relative overflow-hidden rounded-xl">
            <img src={hab6} alt="Habitación doble Deluxe" className="absolute inset-0 object-cover w-full h-full" />
            <div className="absolute amatic-sc-regular text-2xl inset-x-0 bottom-0 text-center text-white bg-green-700 bg-opacity-50 py-1">Habitación doble Deluxe</div>
            <NavLink to='/habitaciondobledlx' className="navbar-brand">
            <button className="absolute top-0 right-0 m-2 p-1 px-2 bg-green-500 text-white rounded-full "><i class="fa-solid fa-circle-info"></i></button>
            </NavLink>
          </div>

        </div>
      </section>
    
    );
};

export default Habitaciones;
