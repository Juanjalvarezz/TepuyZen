import gym from "../assets/img/gym.jpg"
import buffet from "../assets/img/buffet.jpg"
import transporte from "../assets/img/transporte.webp"
import wifi from "../assets/img/wifi.jpg"

const Servicios = () => {
    return (
        <section>

        <div className="bg-transparent backdrop-blur-md p-5 border-transparent border-2 rounded-lg mb-4 text-center mt-2 w-fit mx-auto">
            <h1 className="title text-3xl font-bold mb-2 text-slate-200 tracking-wider" style={{ color: '#DDE7C7' }}>Servicios</h1>
        </div>

        <div alt="Servicios" className="w-4/5 mx-auto mt-5">

    <div className="grid grid-cols-1 sm:grid-cols-4 items-center justify-center gap-3">
      <div className="p-5 rounded-xl mb-3 w-full flex flex-col items-center transform transition hover:scale-110 duration-300" style={{ background: '#BFD8BD' }}>
        <img src={gym} alt="Imagen" className="w-40 h-auto object-cover mb-3" />
        <div className="text-center">
          <h1 className="amatic-sc-bold text-3xl font-bold mb-2">Gimnasio</h1>
          <p className="text-gray-700">Mantente activo en nuestro gimnasio equipado con las últimas máquinas y pesas libres. Ofrecemos clases de fitness diarias impartidas por instructores certificados.</p>
        </div>
      </div>

      <div className="p-5 rounded-xl mb-3 w-full flex flex-col items-center transform transition hover:scale-110 duration-300" style={{ background: '#BFD8BD' }}>
        <img src={buffet} alt="Imagen" className="w-40 h-auto object-cover mb-3" />
        <div className="text-center">
          <h1 className="amatic-sc-bold text-3xl font-bold mb-2">Buffet</h1>
          <p className="text-gray-700">Disfruta de una variedad de opciones de comida en nuestro buffet. Ofrecemos una selección fresca y deliciosa de platos calientes y fríos, así como postres y bebidas.</p>
        </div>
      </div>

      <div className="p-5 rounded-xl mb-3 w-full flex flex-col items-center transform transition hover:scale-110 duration-300" style={{ background: '#BFD8BD' }}>
        <img src={transporte} alt="Imagen" className="w-40 h-auto object-cover mb-3" />
        <div className="text-center">
          <h1 className="amatic-sc-bold text-3xl font-bold mb-2">Transporte</h1>
          <p className="text-gray-700">Nuestro servicio de transporte confiable te llevará a donde necesites ir. Ofrecemos traslados al aeropuerto, excursiones turísticas y servicios de alquiler de autos.</p>
        </div>
      </div>

      <div className="p-5 rounded-xl mb-3 w-full flex flex-col items-center transform transition hover:scale-110 duration-300" style={{ background: '#BFD8BD' }}>
        <img src={wifi} alt="Imagen" className="w-40 h-auto object-cover mb-3" />
        <div className="text-center">
          <h1 className="amatic-sc-bold text-3xl font-bold mb-2">Internet</h1>
          <p className="text-gray-700">Mantente conectado con nuestro servicio de internet de alta velocidad. Te Ofrecemos un Wi-Fi gratuito en todas las áreas públicas, en nuestras habitaciones y en las cercanias del hotel.</p>
        </div>
      </div>
    </div>

 </div>

        </section>
    );
};

export default Servicios;