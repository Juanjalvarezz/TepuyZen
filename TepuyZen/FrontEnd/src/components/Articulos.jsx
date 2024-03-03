import repelente from "../assets/img/repelente.jpg"
import protector from "../assets/img/protector.jpg"
import sombrero from "../assets/img/sombrero.jpeg"
import ropa from "../assets/img/ropa.webp"

const Articulos = () => {
  return (
<div>
 <section alt="Articulos de viaje" className="w-4/5 mx-auto mt-5">

    <div className="bg-transparent backdrop-blur-md p-5 border-transparent border-2 rounded-lg mb-4">
    <h1 className="title text-3xl font-bold mb-2 text-slate-200 tracking-wider" style={{ color: '#DDE7C7' }}>Articulos de viaje</h1>
      <p className="amatic-sc-bold text-3xl mb-4">Embárcate en un viaje de descubrimiento con nuestros artículos de viajes cuidadosamente seleccionados. Toma estos articulos como inspiración para ayudarte a planificar tu aventura. </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-4 items-center justify-center gap-3">
      <div className="p-5 rounded-xl mb-3 w-full flex flex-col items-center transform transition hover:scale-110 duration-300" style={{ background: '#BFD8BD' }}>
        <img src={repelente} alt="Imagen" className="w-40 h-auto object-cover mb-3" />
        <div className="text-center">
          <h1 className="amatic-sc-bold text-3xl font-bold mb-2">Repelente de insectos</h1>
          <h3 className="text-xl mb-1">Precio: 10$</h3>
          <h3 className="text-xl mb-1">Importancia: 9/10</h3>
        </div>
      </div>

      <div className="p-5 rounded-xl mb-3 w-full flex flex-col items-center transform transition hover:scale-110 duration-300" style={{ background: '#BFD8BD' }}>
        <img src={protector} alt="Imagen" className="w-40 h-auto object-cover mb-3" />
        <div className="text-center">
          <h1 className="amatic-sc-bold text-3xl font-bold mb-2">Protector solar</h1>
          <h3 className="text-xl mb-1">Precio: 15$</h3>
          <h3 className="text-xl mb-1">Importancia: 8/10</h3>
        </div>
      </div>

      <div className="p-5 rounded-xl mb-3 w-full flex flex-col items-center transform transition hover:scale-110 duration-300" style={{ background: '#BFD8BD' }}>
        <img src={sombrero} alt="Imagen" className="w-40 h-auto object-cover mb-3" />
        <div className="text-center">
          <h1 className="amatic-sc-bold text-3xl font-bold mb-2">Gorra o sombrero</h1>
          <h3 className="text-xl mb-1">Precio: 20$</h3>
          <h3 className="text-xl mb-1">Importancia: 6/10</h3>
        </div>
      </div>

      <div className="p-5 rounded-xl mb-3 w-full flex flex-col items-center transform transition hover:scale-110 duration-300" style={{ background: '#BFD8BD' }}>
        <img src={ropa} alt="Imagen" className="w-40 h-auto object-cover mb-3" />
        <div className="text-center">
          <h1 className="amatic-sc-bold text-3xl font-bold mb-2">Ropa adecuada</h1>
          <h3 className="text-xl mb-1">Precio: 50$</h3>
          <h3 className="text-xl mb-1">Importancia: 9/10</h3>
        </div>
      </div>
    </div>

 </section>

</div>
);
}

export default Articulos;