import { services } from "./Data"

const Services = () => {
    return (
        <section className="bg-zinc-100">
            <div className="section">
                <h3 className="text-slate-600 text-center text-4xl font-medium">Servicios Psicológicos</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-7 gap-y-20 py-8">
                    {
                        services.map(service => (
                            <div key={service.id}>
                                <div className="h-full overflow-hidden group my-4 shadow-2xl">
                                    <img src={service.imageSrc} alt="" className="object-cover h-full transition-all duration-500 group-hover:scale-110 group-hover:transition-all group-hover:duration-500" />
                                </div>
                                <h4 className="text-center text-slate-600 text-2xl">{service.title}</h4>
                            </div>
                        ))

                    }
                </div>
            </div>
        </section >
    )
}
export default Services