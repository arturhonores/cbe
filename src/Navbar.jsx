const Navbar = () => {
    return (
        <header className="bg-white h-14">
            <nav className="max-w-7xl mx-auto flex justify-between bg-yellow-50 px-7">
                <a href="http://">LOGO</a>
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