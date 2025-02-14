import { Link, useLocation } from "react-router-dom";

export const Home = () => {
    return (
        <div>
            <h1>[Company Website]</h1>
            <nav>
                <Link to="about">About</Link>
                <Link to="events">Events</Link>
                <Link to="products">Products</Link>
                <Link to="contact">Contact Us</Link>
            </nav>
        </div>
    );
};

export const About = () => {
    return (
        <div>
            <h1>[About]</h1>
        </div>
    );
};

export const Events = () => {
    return (
        <div>
            <h1>[Events]</h1>
        </div>
    );
};

export const Products = () => {
    return (
        <div>
            <h1>[Products]</h1>
        </div>
    );
};

export const Contact = () => {
    return (
        <div>
            <h1>[Contact]</h1>
        </div>
    );
};

export const Whoops404 = () => {
    let location = useLocation();
    console.log('location :>> ', location);
    return (
        <>
            <h1>Resource not found at {location.pathname}</h1>
        </>
    );
}