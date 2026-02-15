import { HashRouter, Route, Routes } from "react-router-dom";
import Landing from './landing';
import Navbar from './components/Navbar';
import Um from './maintenance';
import Footer from './components/Footer';
import ScrollToTop from "./components/ScrollToTop";
import AboutMe from './about-me';
import Projects from './projects';

const Router = () => {
    return (
        <HashRouter>
            <ScrollToTop />
            <Navbar />
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path='/about' element={<AboutMe />} />
                <Route path='/projects' element={<Projects />} />
                <Route path="*" element={<Um />} />
            </Routes>
            <Footer />
        </HashRouter>
    )
}

export default Router;