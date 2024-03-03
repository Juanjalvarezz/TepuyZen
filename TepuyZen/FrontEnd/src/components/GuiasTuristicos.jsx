import guia1 from "../assets/img/guia1.png"
import guia2 from "../assets/img/guia2.png"
import guia3 from "../assets/img/guia3.png"
import guia4 from "../assets/img/guia4.png"

const GuiasTuristicos = () => {
    return (
        <section alt="Guias Turisticos" className="w-4/5 mx-auto mt-5">
            
            <div className="bg-transparent backdrop-blur-md p-5 border-transparent border-2 rounded-lg mb-4">
                <h1 className="title text-3xl font-bold mb-2 text-slate-200 tracking-wider" style={{ color: '#DDE7C7' }}>Guías Turisticos</h1>
                <p className="amatic-sc-bold text-3xl mb-4">Ven y conoce toda la magia que hay detras de este maravilloso lugar con nuestros guias turisticos certificados. Déjate envolver por la energía mística de los tepuyes, la majestuosidad de las lagunas y la fuerza de los saltos de agua mientras disfrutas de una experiencia de relajación y renovación inigualable.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 items-center justify-center gap-3">

            <div className="p-5 rounded-xl mb-3 w-full flex flex-col items-center transform transition hover:scale-110 duration-300" style={{ background: '#77BFA3' }}>
                            <img src={guia1} alt="Imagen" className="w-60 h-60 object-cover -mt-12" />
                        <div className="text-center -mt-12">
                            <h2 alt="Nombre" className="title text-2xl font-medium tracking-wider" style={{ color: '#EDEEC9' }}>Ana López</h2>
                        <div className="amatic-sc-bold text-2xl font-bold mb-2">
                            <p alt="Edad">Edad: 28</p>
                            <p alt="Años de experiencia" >Años de experiencia: 5</p>
                            <p alt="Idiomas">Idiomas: Español, Inglés y Francés</p>
                            <p>⭐⭐⭐⭐</p>
                        </div>
                    </div>
                </div>

                <div className="p-5 rounded-xl mb-3 w-full flex flex-col items-center transform transition hover:scale-110 duration-300" style={{ background: '#98C9A3' }}>
                            <img src={guia2} alt="Imagen" className="w-60 h-60 object-cover -mt-12" />
                        <div className="text-center -mt-12">
                            <h2 alt="Nombre" className="title text-2xl font-medium tracking-wider" style={{ color: '#EDEEC9' }}>Pedro Pérez</h2>
                        <div className="amatic-sc-bold text-2xl font-bold mb-2">
                            <p alt="Edad">Edad: 42</p>
                            <p alt="Años de experiencia" >Años de experiencia: 15</p>
                            <p alt="Idiomas">Idiomas: Español, Inglés y Aleman</p>
                            <p>⭐⭐⭐⭐⭐</p>
                        </div>
                    </div>
                </div>

                <div className="p-5 rounded-xl mb-3 w-full flex flex-col items-center transform transition hover:scale-110 duration-300" style={{ background: '#98C9A3' }}>
                            <img src={guia3} alt="Imagen" className="w-60 h-60 object-cover -mt-12" />
                        <div className="text-center -mt-12">
                            <h2 alt="Nombre" className="title text-2xl font-medium tracking-wider" style={{ color: '#EDEEC9' }}>Jose González</h2>
                        <div className="amatic-sc-bold text-2xl font-bold mb-2">
                            <p alt="Edad">Edad: 28</p>
                            <p alt="Años de experiencia" >Años de experiencia: 3</p>
                            <p alt="Idiomas">Idiomas: Español e Ingles</p>
                            <p>⭐⭐⭐</p>
                        </div>
                    </div>
                </div>

                <div className="p-5 rounded-xl mb-3 w-full flex flex-col items-center transform transition hover:scale-110 duration-300" style={{ background: '#77BFA3' }}>
                            <img src={guia4} alt="Imagen" className="w-60 h-60 object-cover -mt-12" />
                        <div className="text-center -mt-12">
                            <h2 alt="Nombre" className="title text-2xl font-medium tracking-wider" style={{ color: '#EDEEC9' }}>Juan García</h2>
                        <div className="amatic-sc-bold text-2xl font-bold mb-2">
                            <p alt="Edad">Edad: 50</p>
                            <p alt="Años de experiencia" >Años de experiencia: 20</p>
                            <p alt="Idiomas">Idiomas: Español, Inglés e Italiano</p>
                            <p>⭐⭐⭐⭐⭐</p>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    );
};

export default GuiasTuristicos