import Clima from "../components/Clima";
import Footer from "../components/Footer";
import Habitaciones from "../components/Habitaciones";
import Header from "../components/Header";
import Slider from "../components/Slider";
import { motion } from 'framer-motion'

//Home
export default function App() {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>

    <Header/>
    <Slider/>
    
    <Clima/>
    <Habitaciones/>

    <Footer/>
    </motion.div>
  )
}