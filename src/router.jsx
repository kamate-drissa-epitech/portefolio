
import {Home} from "./pages/Home/Home.jsx";
import {createBrowserRouter} from "react-router-dom";
import {Layout} from "./components/Layout/Layout.jsx";
import {Projects} from "./pages/Projects/Projects.jsx";
import {Blog} from "./pages/Blog/Blog.jsx";
import {About} from "./pages/About/About.jsx";

  const router = createBrowserRouter([
    {
        path : '/',
        element : <Layout />,
        children : [
            {
                path  : '/',
                element  : <Home />
            },
            {
                path  : '/about',
                element  : <About />
            },
            {
                path  : '/projects',
                element  : <Projects />
            },
            {
                path  : '/blog',
                element  : <Blog />
            },

        ]

    }
])

export default router


// export const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <Home />
//     },
// ])