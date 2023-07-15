import { services } from "../Data"

const Services = () => {
    return (
        <section className="bg-zinc-100">
            <div className="section">
                <h3 className="text-slate-600 text-center text-4xl font-medium">Servicios Psicológicos</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-20 py-8">
                    {
                        services.map(service => (
                            <div key={service.id} className="">
                                <div className="">
                                    <div className="overflow-hidden group shadow-2xl">
                                        <img src={service.imageSrc} alt="" className="aspect-square object-cover transition-all duration-500 group-hover:scale-110 group-hover:transition-all group-hover:duration-500" />
                                    </div>
                                    <h4 className="pt-8 text-center text-slate-600 text-2xl">{service.title}</h4>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section >
    )
}
export default Services