
import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage"
import ContactPage from "../pages/ContactPage"
const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} ></Route>
            <Route path="/contacto" element={<ContactPage />}></Route>
        </Routes>
    )
}
export default AppRoutes