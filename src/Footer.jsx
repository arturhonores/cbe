import logo from "./assets/images/logo-CBE.svg"
import { motion } from "framer-motion"
import { socialIcons } from "./Data";

const Footer = () => {
    return (
        <section className="bg-zinc-100">
            <div className="section">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="flex justify-center lg:justify-start md:items-start">
                        <img src={logo} alt="" className="w-32" />
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="flex flex-col items-center md:items-start gap-4">
                            <h5 className="font-bold">Services</h5>
                            <a
                                href="#"
                                className="text-sm hover:underline hover:underline-offset-2"
                            >
                                Web Design
                            </a>
                            <a
                                href="#"
                                className="text-sm hover:underline hover:underline-offset-2"
                            >
                                Web Development
                            </a>
                            <a
                                href="#"
                                className="text-sm hover:underline hover:underline-offset-2"
                            >
                                Science
                            </a>
                            <a
                                href="#"
                                className="text-sm hover:underline hover:underline-offset-2"
                            >
                                Digital Marketing
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="flex flex-col items-center md:items-start gap-4">
                            <h5 className="font-bold">Legal</h5>
                            <a
                                href="#"
                                className="text-sm hover:underline hover:underline-offset-2"
                            >
                                Política de Cookies
                            </a>
                            <a
                                href="#"
                                className="text-sm hover:underline hover:underline-offset-2"
                            >
                                Política de Privacidad
                            </a>
                            <a
                                href="#"
                                className="text-sm hover:underline hover:underline-offset-2"
                            >
                                Términos y Condiciones
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col items-center lg:items-end">
                        <div className="flex flex-col items-center md:items-start">
                            <h5 className="font-bold">Síguenos</h5>
                            <div className="flex gap-4 mt-4">
                                {
                                    socialIcons.map((icon, id) => (
                                        <motion.a key={id} whileHover={{ translateY: -3, color: "rgb(6,182,212)" }}
                                            whileTap={{ scale: 1.1 }}
                                            href={icon.href}
                                            className="text-xl">
                                            {icon.nameICon}
                                        </motion.a>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
export default Footer