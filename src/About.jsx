import aboutUs from "./assets/images/about-us.jpg"

const About = () => {
    return (
        <section className="section">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div>
                    <img src={aboutUs} alt="imagen sobre nosotros" />
                </div>
                <div>
                    <h3 className="text-4xl font-medium text-slate-600 text-center">Somos tu mejor Apoyo</h3>
                    <p>Somos un equipo de profesionales de la salud mental enfocados en la prevención y el bienestar holístico. Trabajamos los trastornos psicológicos mediante terapias basadas en la evidencia. Promovemos la prevención de condiciones físicas y emocionales mediante terapias alternativas desde la perspectiva holística que contempla las emociones y los trastornos a partir de la unión de el cuerpo, la mente y el espíritu.</p>
                    <button>Nosotros</button>
                </div>
            </div>
        </section>
    )
}
export default About