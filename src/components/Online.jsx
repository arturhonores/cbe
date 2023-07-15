import mockup from "../assets/images/mockup-cbe.svg"
import Btn from "./Btn"

const Online = () => {
    return (
        <section className="section">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center">
                <div>
                    <h6 className="uppercase text-slate-500 font-medium">sesión en línea</h6>
                    <h3 className="text-4xl font-medium text-slate-600 py-3">Reserva <span className="font-bold">Hoy Mismo</span></h3>
                    <div className="py-5 space-y-4">
                        <p className="text-slate-600 leading-relaxed">Es el uso de tecnologías de información y telecomunicaciones electrónicas para brindar atención cuando usted y el profesional de la salud no se encuentran en el mismo lugar al mismo tiempo.</p>
                        <p className="text-slate-600 leading-relaxed">*Algunas de nuestras terapias se pueden ofrecer en forma virtual mediante el uso de tecnología que protegen la confidencialidad.</p>
                    </div>
                    <Btn />
                </div>
                <div className="w-full">
                    <img src={mockup} alt="imagen sobre nosotros" className="mx-auto w-11/12" />
                </div>
            </div>
        </section>
    )
}
export default Online