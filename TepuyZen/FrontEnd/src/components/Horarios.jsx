import lun from "../assets/img/lun.png"
import sab from "../assets/img/sab.png"

const Horarios = () => {
    return (
        <section>
            
            <div className="bg-transparent backdrop-blur-md p-5 border-transparent border-2 rounded-lg mb-4 text-center mt-2 w-fit mx-auto">
                <h1 className="title text-3xl font-bold mb-2 text-slate-200 tracking-wider" style={{ color: '#DDE7C7' }}>Horarios</h1>
            </div>

            <div className="flex w-4/5 mx-auto mt-5 justify-center">
                <div className="p-5 mr-5 rounded-xl mb-3 w-full text-center max-w-xs flex flex-col items-center transform transition hover:scale-110 duration-300" style={{ background: '#EDEEC9' }}>
                <img src={lun} alt="Imagen" className="w-40 h-auto object-cover mb-3" />
                    <h1 className="title tracking-wider text-xl font-bold" style={{ color: '#77BFA3' }}>LUN - VIE</h1>
                    <p className=" amatic-sc-regular text-3xl text-gray-700">Horario:</p>
                    <p className="amatic-sc-regular text-3xl text-gray-700">6:00am - 10:00pm</p>
            </div>

            <div className="p-5 rounded-xl mb-3 w-full max-w-xs text-center flex flex-col items-center transform transition hover:scale-110 duration-300" style={{ background: '#EDEEC9' }}>
                <img src={sab} alt="Imagen" className="w-40 h-auto object-cover mb-3" />
                    <h1 className="title tracking-wider text-xl font-bold" style={{ color: '#77BFA3' }}>SAB - DOM</h1>
                    <p className="amatic-sc-regular text-3xl text-gray-700">Horario:</p>
                    <p className="amatic-sc-regular text-3xl text-gray-700">5:00am - 02:00am</p>
                </div>
            </div>

        </section>
    );
};

export default Horarios;