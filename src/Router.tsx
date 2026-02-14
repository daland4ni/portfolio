import { HashRouter, Route, Routes } from "react-router-dom";
import Landing from './landing';
import Navbar from './components/Navbar';
import Um from './maintenance';
import Footer from './components/Footer';
import ScrollToTop from "./components/ScrollToTop";

const Router = () => {
    return (
        <HashRouter>
            <ScrollToTop />
            <Navbar />
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="*" element={<Um />} />
            </Routes>
            <Footer />
        </HashRouter>
    )
}

export default Router;