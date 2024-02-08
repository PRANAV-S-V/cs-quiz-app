import React from "react"
import Heading from "./main_items/Heading"
import LightButton from "./main_items/Button";
import FluidImage from "./main_items/FluidImage";

function App(){
    return (
        <div className="main-page">
            <FluidImage url={"https://iimtu.edu.in/blog/wp-content/uploads/2023/11/CSE-aa.jpg"} />
            <Heading content={"Welcome to the CS Quiz"}/>
            <LightButton text="Get Started"/>
        </div>
    )
}

export default App;
