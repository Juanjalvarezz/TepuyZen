import Perfil from "../assets/img/profile.png"
import Perfil2 from "../assets/img/profile2.png"

const Opiniones = () => {
 return (
    <section alt="Opiniones de usuarios" className="w-4/5 mx-auto mt-5">

        <div className="bg-transparent backdrop-blur-md p-5 border-transparent border-2 rounded-lg mb-4">
            <h1 className="title text-3xl font-bold mb-2 text-slate-200 tracking-wider" style={{ color: '#DDE7C7' }}>Opiniones y Reseñas</h1>
            <p className="amatic-sc-bold text-3xl mb-4">Descubre lo que otros viajeros opinan sobre su experiencia en Tepuy Zen. Lee sus comentarios y valoraciones sobre las habitaciones, el servicio, las instalaciones, la ubicación y mucho más.</p>
        </div>

        <div className="shadow-md rounded-lg p-6 mb-3 transform transition hover:scale-110 duration-300" style={{ background: '#BFD8BD' }}>
            <div className="flex flex-row items-center bg-#BFD8BD p-4 rounded-lg">
        <div className="flex-1">
          <div className="flex">
          <div className="w-20 h-20 mr-6">
                    <img src={Perfil2} alt="User Profile" className="w-full h-full rounded-full object-cover" />   
          </div>
          <h2 alt="Nombre" className="title text-2xl font-medium mt-5" style={{ color: '#77BFA3' }}>Jane Smith</h2>
          </div>
          
          <p alt="Opinion" className="amatic-sc-bold text-gray-600 text-2xl">Este hotel es una joya escondida en el corazón del Parque Nacional Canaima. Las habitaciones son limpias, cómodas y tienen vistas impresionantes de la selva circundante. El personal es amable y servicial, y la comida es deliciosa. Recomendaría encarecidamente este hotel a cualquiera que busque una experiencia única e inolvidable en Venezuela.</p>
          <div className="flex flex-row items-center mt-2">
            <div className="text-yellow-400 mr-2">
            <i class="fa-solid fa-star"></i>
            </div>
            <div alt="Valoracion" className="text-gray-700">
              <span className="font-semibold">5</span>
              <span className="ml-1">/ 5</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="shadow-md rounded-lg p-6 mb-3 transform transition hover:scale-110 duration-300" style={{ background: '#98C9A3' }}>
            <div className="flex flex-row items-center  p-4 rounded-lg">
        <div className="flex-1">
          <div className="flex">
          <div className="w-20 h-20 mr-6">
                <img src={Perfil} alt="User Profile" className="w-full h-full rounded-full object-cover" />
          </div>
          <h2 alt="Nombre" className="title text-2xl font-medium mt-5" style={{ color: '#EDEEC9' }}>Mike Johnson</h2>
          </div>

          <p alt="Opinion" className="amatic-sc-bold text-gray-600 text-2xl">El hotel Tepuy Zen es un gran lugar para alojarse si desea escapar de la agitada vida de la ciudad. El hotel está rodeado de selva exuberante y está cerca de muchos senderos de senderismo y cascadas. Las habitaciones son básicas pero limpias y cómodas, y el personal es amable y servicial. ¡Definitivamente me quedaría aquí de nuevo!</p>
          <div className="flex flex-row items-center mt-2">
            <div className="text-yellow-400 mr-2">
            <i class="fa-solid fa-star"></i>
            </div>
            <div alt="Valoracion" className="text-gray-700">
              <span className="font-semibold">4.5</span>
              <span className="ml-1">/ 5</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="shadow-md rounded-lg p-6 mb-3 transform transition hover:scale-110 duration-300" style={{ background: '#BFD8BD' }}>
            <div className="flex flex-row items-center bg-#BFD8BD p-4 rounded-lg">
        <div className="flex-1">
          <div className="flex">
          <div className="w-20 h-20 mr-6">
                    <img src={Perfil2} alt="User Profile" className="w-full h-full rounded-full object-cover" />
            </div>
            <h2 alt="Nombre" className="title text-2xl font-medium mt-5" style={{ color: '#77BFA3' }}>Sarah Lee</h2>
          </div>

         
          <p alt="Opinion" className="amatic-sc-bold text-gray-600 text-2xl">El Tepuy Zen es un hotel encantador en el corazón del Parque Nacional Canaima. La atención al detalle es evidente en todo el hotel, desde la hermosa arquitectura hasta las cómodas habitaciones y la deliciosa comida. El personal es amable y servicial, y siempre está dispuesto a ayudar con cualquier cosa que necesites. ¡Definitivamente volveré!</p>
          <div className="flex flex-row items-center mt-2">
            <div className="text-yellow-400 mr-2">
            <i class="fa-solid fa-star"></i>
            </div>
            <div alt="Valoracion" className="text-gray-700">
              <span className="font-semibold">4.8</span>
              <span className="ml-1">/ 5</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="shadow-md rounded-lg p-6 mb-3 transform transition hover:scale-110 duration-300" style={{ background: '#98C9A3' }}>
            <div className="flex flex-row items-center bg-#BFD8BD p-4 rounded-lg">
        <div className="flex-1">
          <div className="flex">
          <div className="w-20 h-20 mr-6">
                  <img src={Perfil} alt="User Profile" className="w-full h-full rounded-full object-cover" />
          </div>
          <h2 alt="Nombre" className="title text-2xl font-medium mt-5" style={{ color: '#EDEEC9' }}>David Kim</h2>
          </div>
        
          <p alt="Opinion" className="amatic-sc-bold text-gray-600 text-2xl">El Tepuy Zen es un hotel único en su tipo en el Parque Nacional Canaima. La ubicación es impresionante, con vistas a las montañas y la selva. Las habitaciones son cómodas y limpias, y el personal es amable y servicial. Recomiendo encarecidamente hacer una excursión a las cataratas de Salto Ángel, es una experiencia increíble. ¡Definitivamente volveré!</p>
          <div className="flex flex-row items-center mt-2">
            <div className="text-yellow-400 mr-2">
            <i class="fa-solid fa-star"></i>
            </div>
            <div alt="Valoracion" className="text-gray-700">
              <span className="font-semibold">4.6</span>
              <span className="ml-1">/ 5</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="shadow-md rounded-lg p-6 mb-3 transform transition hover:scale-110 duration-300" style={{ background: '#BFD8BD' }}>
            <div className="flex flex-row items-center bg-#BFD8BD p-4 rounded-lg">
        <div className="flex-1">
          <div className="flex">
          <div className="w-20 h-20 mr-6">
                <img src={Perfil2} alt="User Profile" className="w-full h-full rounded-full object-cover" />
          </div>
          <h2 alt="Nombre" className="title text-2xl font-medium mt-5" style={{ color: '#77BFA3' }}>Jessica Brown</h2>
          </div>
          
          <p alt="Opinion" className="amatic-sc-bold text-gray-600 text-2xl">Mi estadía en el Tepuy Zen no fue del todo agradable. Aunque la ubicación es hermosa, la habitación que me asignaron era pequeña y un poco incómoda. Además, el servicio de limpieza no fue el mejor. Sin embargo, el personal fue amable y servicial durante mi estadía. Si bien no recomendaría este hotel, entiendo que la experiencia puede variar.</p>
          <div className="flex flex-row items-center mt-2">
            <div className="text-yellow-400 mr-2">
            <i class="fa-solid fa-star"></i>
            </div>
            <div alt="Valoracion" className="text-gray-700">
              <span className="font-semibold">2.5</span>
              <span className="ml-1">/ 5</span>
            </div>
          </div>
        </div>
      </div>
    </div>



    </section>
 );
}

export default Opiniones;