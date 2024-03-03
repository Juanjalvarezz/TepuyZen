import Header from "../components/Header";
import Footer from "../components/Footer";
import GuiasTuristicos from "../components/GuiasTuristicos"
import { motion } from 'framer-motion'

//Guias
export default function Guias() {
    return (
      <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
        
      <Header/>
      <GuiasTuristicos />
      <Footer/>

      </motion.div>
    )
  }