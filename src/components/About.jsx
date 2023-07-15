import Btn from "./Btn"
import aboutUs from "../assets/images/about-us.jpg"

const About = () => {
    return (
        <section className="section">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center">
                <div>
                    <img src={aboutUs} alt="imagen sobre nosotros" className="mx-auto w-11/12" />
                </div>
                <div>
                    <h6 className="uppercase text-slate-500 font-medium">¿Quiénes Somos? </h6>
                    <h3 className="text-4xl font-medium text-slate-600 py-3">Somos tu <span className="font-bold">Mejor Apoyo</span></h3>
                    <p className="text-slate-600 leading-relaxed py-5">Somos un equipo de profesionales de la salud mental enfocados en la prevención y el bienestar holístico. Trabajamos los trastornos psicológicos mediante terapias basadas en la evidencia. Promovemos la prevención de condiciones físicas y emocionales mediante terapias alternativas desde la perspectiva holística que contempla las emociones y los trastornos a partir de la unión de el cuerpo, la mente y el espíritu.</p>
                    <Btn />
                </div>
            </div>
        </section>
    )
}
export default About