import { useRoutes } from "react-router-dom";
import { App } from "./App";
import {
    About,
    Contact,
    Events,
    Home,
    Products,
    Whoops404,
} from "./components/Pages/pages";

export const AppRoutes = () => {
    const element = useRoutes([
        {
            path: "/",
            element: <App />,
            children: [
                { path: "home", element: <Home /> },
                { path: "about", element: <About /> },
                { path: "events", element: <Events /> },
                { path: "products", element: <Products /> },
                { path: "contact", element: <Contact /> },
                { path: "*", element: <Whoops404 /> },
            ],
        },
    ]);
    return element;
};
