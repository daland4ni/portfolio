import { HashRouter, Route, Routes } from "react-router-dom";
import Landing from './landing';
import Navbar from './components/Navbar';
import Um from './maintenance';

const Router = () => {
    return (
        <HashRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="*" element={<Um />} />
            </Routes>
        </HashRouter>
    )
}

export default Router;