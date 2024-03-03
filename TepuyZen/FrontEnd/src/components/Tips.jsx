import maleta from "../assets/img/maleta.jpg"
import cultura from "../assets/img/cultura.jpg"
import documento from "../assets/img/documento.webp"
import selva from "../assets/img/selva.jpg"

const Tips = () => {
  return (
<div>
 <section alt="Articulos de viaje" className="w-4/5 mx-auto mt-5">

    <div className="bg-transparent backdrop-blur-md p-5 border-transparent border-2 rounded-lg mb-4">
    <h1 className="title text-3xl font-bold mb-2 text-slate-200 tracking-wider" style={{ color: '#DDE7C7' }}>Tips para tu viaje</h1>
      <p className="amatic-sc-bold text-3xl mb-4">Viajar es una de las experiencias más enriquecedoras que podemos tener en la vida. Nos permite conocer nuevas culturas, personas y lugares, y nos ayuda a crecer como individuos. Por eso, en este artículo, te daremos algunos tips y consejos para que tu próximo viaje sea una experiencia inolvidable. </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-4 items-center justify-center gap-3">
      <div className="p-5 rounded-xl mb-3 w-full flex flex-col items-center transform transition hover:scale-110 duration-300" style={{ background: '#98C9A3' }}>
        <img src={maleta} alt="Imagen" className="w-40 h-auto object-cover mb-3" />
        <div className="text-center">
          <h1 className="amatic-sc-bold text-3xl font-bold mb-2">Investiga antes de ir</h1>
          <h3 className="text-xl mb-1">Asegúrate de investigar sobre el destino, incluyendo la cultura del lugar, el clima, la moneda y los lugares de interés.</h3>
        </div>
      </div>

      <div className="p-5 rounded-xl mb-3 w-full flex flex-col items-center transform transition hover:scale-110 duration-300" style={{ background: '#98C9A3' }}>
        <img src={cultura} alt="Imagen" className="w-40 h-auto object-cover mb-3" />
        <div className="text-center">
          <h1 className="amatic-sc-bold text-3xl font-bold mb-2">Mantén una actitud abierta y respetuosa</h1>
          <h3 className="text-xl mb-1">Respeta las costumbres de los locales y sé amable con los demás intengrantes del grupo.</h3>
        </div>
      </div>

      <div className="p-5 rounded-xl mb-3 w-full flex flex-col items-center transform transition hover:scale-110 duration-300" style={{ background: '#98C9A3' }}>
        <img src={documento} alt="Imagen" className="w-40 h-auto object-cover mb-3" />
        <div className="text-center">
          <h1 className="amatic-sc-bold text-3xl font-bold mb-2">Mantén tus documentos importantes seguros</h1>
          <h3 className="text-xl mb-1">Guarda tus documentos importantes en un lugar seguro y lleva copias de ellos contigo.</h3>
        </div>
      </div>

      <div className="p-5 rounded-xl mb-3 w-full flex flex-col items-center transform transition hover:scale-110 duration-300" style={{ background: '#98C9A3' }}>
        <img src={selva} alt="Imagen" className="w-40 h-auto object-cover mb-3" />
        <div className="text-center">
          <h1 className="amatic-sc-bold text-3xl font-bold mb-2">Disfruta del momento</h1>
          <h3 className="text-xl mb-1">No te preocupes demasiado por planificar cada detalle y simplemente disfruta del momento y de la experiencia de viajar.</h3>
        </div>
      </div>
    </div>

 </section>

</div>
);
}

export default Tips;