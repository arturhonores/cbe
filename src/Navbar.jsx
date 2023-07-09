import logo from "./assets/images/logo-CBE.svg"

const Navbar = () => {
    return (
        <header className="bg-white">
            <nav className="max-w-7xl mx-auto flex justify-between items-center px-7">
                <div className="flex items-center">
                    <img src={logo} alt="" width="80px" />
                    <div className="font-pangolin uppercase text-sm md:text-lg"><p className="tracking-tight">clinica de</p><p className="-my-1 tracking-tight">bienestar emocional</p> </div>
                </div>
                <ul className="hidden md:flex gap-x-6">
                    <li>Inicio</li>
                    <li>Nosotros</li>
                    <li>Servicios</li>
                    <li>Equipo</li>
                    <li>Contacto</li>
                </ul>
            </nav>
        </header>
    )
}
export default Navbar