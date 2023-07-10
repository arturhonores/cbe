import Map from "./Map"
import { BiMap, BiTime } from "react-icons/bi"
import { FiMail } from "react-icons/fi"
import { BsTelephone } from "react-icons/bs"

const Contact = () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2">
            <div className="bg-cyan-500 p-14 text-white flex flex-col items-center justify-center">
                <div>
                    <h6 className="uppercase font-medium">Visítanos</h6>
                    <h3 className="text-4xl py-3 font-bold">Contacto</h3>
                    <div className="py-5 space-y-4">
                        <p className="flex items-center lg:text-lg gap-x-1"><BiMap></BiMap>Calle Santa Balbina 5, 3B. Madrid 28023</p>
                        <p className="flex items-center lg:text-lg gap-x-1"><FiMail></FiMail>hola@bienestaremocional.com</p>
                        <p className="flex items-center lg:text-lg gap-x-1"><BiTime></BiTime>LUN - VIE / 9:00 am - 6:00 pm </p>
                        <p className="flex items-center lg:text-lg gap-x-1"><BsTelephone></BsTelephone>+01 5400589</p>
                    </div>
                </div>
            </div>
            <div className="w-full h-[80vh]">
                <Map></Map>
            </div>

        </section>
    )
}
export default Contact