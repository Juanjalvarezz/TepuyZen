import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from 'framer-motion'
import Servicios from "../components/Servicios";
import Horarios from "../components/Horarios";
import Promos from "../components/Promo";
import Slider2 from "../components/Slider2"

//Info
export default function Info() {
    return (
      <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>

      <Header/>
      <Slider2/>
      <Servicios/>
      <Horarios/>
      <Promos/>
      <Footer/>

      </motion.div>
    )
  }