import {Layout} from "./components/Layout/Layout.jsx";
import "./styles/variables.css"
import "./App.css"

import {RouterProvider} from "react-router-dom";
import router from "./router.jsx";




function  App() {
    return <RouterProvider router={router} />

}


export  default  App