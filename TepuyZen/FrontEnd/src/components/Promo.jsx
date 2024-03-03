import full from "../assets/img/full.png"
import mid from "../assets/img/mid.png"
import end from "../assets/img/end.png"

const Promos = () => {
    return (
        <section>

            <div className="bg-transparent backdrop-blur-md p-5 border-transparent border-2 rounded-lg mb-4 text-center mt-2 w-fit mx-auto">
                <h1 className="title text-3xl font-bold mb-2 text-slate-200 tracking-wider" style={{ color: '#DDE7C7' }}>Promos</h1>
            </div>

            <div className="flex w-4/5 mx-auto mt-5 justify-center">
                
            <div className="grid grid-cols-1 sm:grid-cols-3 items-center justify-center gap-3">
      <div className="p-5 pl-12 pr-12 rounded-xl mb-3 w-full flex flex-col items-center transform transition hover:scale-110 duration-300" style={{ background: '#BFD8BD' }}>
        <img src={full} alt="Imagen" className="w-40 h-auto object-cover mb-3" />
        <div className="text-center">
          <h1 className="amatic-sc-bold text-3xl font-bold mb-2">Full-Week</h1>
          <p className="amatic-sc-regular text-3xl text-gray-700">Precio: $950</p>
            <p className="amatic-sc-regular text-3xl text-gray-700">Duración: 7 días</p>
            <p className="amatic-sc-regular text-3xl text-gray-700">2 Personas</p>
        </div>
      </div>

      <div className="p-5 rounded-xl mb-3 w-full flex flex-col items-center transform transition hover:scale-110 duration-300" style={{ background: '#BFD8BD' }}>
        <img src={mid} alt="Imagen" className="w-40 h-auto object-cover mb-3" />
        <div className="text-center">
          <h1 className="amatic-sc-bold text-3xl font-bold mb-2">Mid-Week</h1>
          <p className="amatic-sc-regular text-3xl text-gray-700">Precio: $850</p>
            <p className="amatic-sc-regular text-3xl text-gray-700">Duración: 4 días</p>
            <p className="amatic-sc-regular text-3xl text-gray-700">3 Personas</p>
        </div>
      </div>

      <div className="p-5 rounded-xl mb-3 w-full flex flex-col items-center transform transition hover:scale-110 duration-300" style={{ background: '#BFD8BD' }}>
        <img src={end} alt="Imagen" className="w-40 h-auto object-cover mb-3" />
        <div className="text-center">
          <h1 className="amatic-sc-bold text-3xl font-bold mb-2">Week-End</h1>
          <p className="amatic-sc-regular text-3xl text-gray-700">Precio: $550</p>
            <p className="amatic-sc-regular text-3xl text-gray-700">Duración: 2 días</p>
            <p className="amatic-sc-regular text-3xl text-gray-700">2 Personas</p>
        </div>
      </div>
          </div>
          </div>


        </section>
    );
};

export default Promos;