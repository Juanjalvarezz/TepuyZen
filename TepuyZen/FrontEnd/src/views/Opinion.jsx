import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from 'framer-motion'
import Opiniones from "../components/Opiniones";

// Opinion
export default function Opinion() {
    return (
      <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
        
      <Header/>
      <Opiniones/>
      <Footer/>

      </motion.div>
    )
  }