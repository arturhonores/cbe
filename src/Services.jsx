import { services } from "./Data"

const Services = () => {
    return (
        <section className="bg-zinc-100">
            <div className="max-w-6xl py-16 mx-auto px-5">
                <h3 className="text-slate-600 text-center text-4xl font-medium">Servicios Psicológicos</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-7 py-8">
                    {
                        services.map(service => (
                            <div key={service.id}>
                                <div className="h-full overflow-hidden group my-4">
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