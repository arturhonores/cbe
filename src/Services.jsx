import individualTherapy from "./assets/images/therapy-individual.jpg"
import coupleTherapy from "./assets/images/couple-therapy.jpg"
import familyTherapy from "./assets/images/familiar-therapy.jpg"

const Services = () => {
    return (
        <section className="bg-zinc-100">
            <div className="max-w-6xl py-16 mx-auto">
                <h3 className="text-slate-600 text-center">Servicios Psicológicos</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 ">
                    <div>
                        <div>
                            <img src={individualTherapy} alt="" />
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src={coupleTherapy} alt="" />
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src={familyTherapy} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Services