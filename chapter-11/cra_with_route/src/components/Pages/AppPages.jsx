import { Routes, Route } from "react-router-dom";
import {
    About,
    Contact,
    Events,
    Home,
    Products,
    Whoops404,
} from "./components/Pages/pages";

export const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Whoops404 />} />
        </Routes>
    );
};
