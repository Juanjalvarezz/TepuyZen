import Header from "../components/Header";
import Footer from "../components/Footer";
import Articulos from "../components/Articulos"
import Tips from "../components/Tips";
import { motion } from 'framer-motion'

//Blog
export default function Blog() {
    return (
      <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <Header/>
      <Articulos/>
      <Tips/>
      <Footer/>
      </motion.div>
    )
  }