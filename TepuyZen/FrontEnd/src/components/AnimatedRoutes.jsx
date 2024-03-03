import { Route, Routes, useLocation } from 'react-router-dom';
import {AnimatePresence} from 'framer-motion'
import React from "react";
import App from '../views/App'
import Blog from '../views/Blog'
import Guias from '../views/Guias'
import Info from '../views/Info'
import Opinion from '../views/Opinion'
import CuartoSimple from '../views/CuartoSimple'
import CuartoSimpleDlx from '../views/CuartoSimpleDlx';
import CuartoDoble from '../views/CuartoDoble';
import CuartoDobleDlx from '../views/CuartoDobleDlx';
import HabitacionDoble from '../views/HabitacionDoble';
import HabitacionDobleDlx from '../views/HabitacionDobleDlx';

function AnimatedRoutes () {
    const location = useLocation();
    return (
        <AnimatePresence>
    <Routes location={location} key={location.pathname}>
        <Route path="/" element={<App />} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/guias" element={<Guias/>} />
        <Route path="/info" element={<Info/>} />
        <Route path="/opinion" element={<Opinion/>} />
        <Route path="/cuartosimple" element={<CuartoSimple/>} />
        <Route path="/cuartosimpledlx" element={<CuartoSimpleDlx/>} />
        <Route path="/cuartodoble" element={<CuartoDoble/>} />
        <Route path="/cuartodobledlx" element={<CuartoDobleDlx/>} />
        <Route path="/habitaciondoble" element={<HabitacionDoble/>} />
        <Route path="/habitaciondobledlx" element={<HabitacionDobleDlx/>} />
      </Routes>
      </AnimatePresence>
    )
}

export default AnimatedRoutes;