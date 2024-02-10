import React from "react";
import Heading from "./main_items/Heading"
import LightButton from "./main_items/Button";
import FluidImage from "./main_items/FluidImage";

function App(){
    
    return (
        <div className="main-page">
            <div className="main-image">
            <FluidImage url={"https://cdn.pixabay.com/photo/2018/12/10/02/14/manhattan-3866140_1280.jpg"} />
            </div>
            <div className="main-components">
            <Heading content={"Welcome to the CS Quiz"}/>
            <a href="/cs"><LightButton text="Get Started"/></a>
            </div>
        </div>
    )
}

export default App;
