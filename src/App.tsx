import React from "react";
import styled from "styled-components"
import { mainRoute } from "./Router/mainRoute";
import {RouterProvider} from "react-router-dom"

const App = () =>{
    return(
        <div>
          <RouterProvider router= {mainRoute}/>
        </div>
    )
}

export default App;
