import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home.tsx"
import Tarifs from "./pages/Tarifs.tsx";
import Contact from "./pages/Contact.tsx";
const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <div>404</div>,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: "/Tarifs",
                element: <Tarifs />
            },
            {
                path: "/Contact",
                element: <Contact />
            }

        ],
    },
]);
export default routes;