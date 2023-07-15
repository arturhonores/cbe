import { useEffect, useState } from "react"
import logo from "../assets/images/logo-CBE.svg"
import { NavLink } from "react-router-dom"

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)

    const updateScrollStatus = () => {
        const hasScrolledPast78px = window.scrollY > 78
        setIsScrolled(hasScrolledPast78px)
    }

    useEffect(() => {
        window.addEventListener("scroll", updateScrollStatus)
        return () => {
            window.removeEventListener("scroll", updateScrollStatus)
        }
    }, [])

    //NavLink configuration
    const activeLink = "text-cyan-500"


    return (
        <header className="bg-white fixed inset-x-0 top-0 z-50 py-1">
            <nav className="max-w-7xl mx-auto flex justify-between items-center px-7">
                <div className="flex items-center">
                    <img
                        src={logo}
                        alt=""
                        className={`${isScrolled ? "w-11" : "w-[70px]"
                            } transition-all duration-300`}
                    />
                    <div className="font-pangolin uppercase text-sm md:text-base">
                        <p className="tracking-tight">clinica de</p>
                        <p className="-my-1 tracking-tight">bienestar emocional</p>{" "}
                    </div>
                </div>
                <ul className="hidden md:flex gap-x-6">
                    <li className="uppercase">
                        <NavLink
                            to="/"
                            className={({ isActive }) => (isActive ? activeLink : "")}
                        >
                            Inicio
                        </NavLink>
                    </li>
                    <li className="uppercase">
                        <NavLink>Nosotros</NavLink>
                    </li>
                    <li className="uppercase">
                        <NavLink>Servicios</NavLink>
                    </li>
                    <li className="uppercase">
                        <NavLink>Equipo</NavLink>
                    </li>
                    <li className="uppercase">
                        <NavLink to="/contacto" className={({ isActive }) => (isActive ? activeLink : "")}>Contacto</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
export default Navbar