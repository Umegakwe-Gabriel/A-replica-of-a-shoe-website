import {createBrowserRouter} from "react-router-dom";
import Layout from "../components/Block/Layout";
// import Header from "../components/Block/Header";

export const mainRoute = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                // index: true,
                // element: <Header/>
            }
        ]
    }
])