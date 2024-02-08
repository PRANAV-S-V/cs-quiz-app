import { wait } from "@testing-library/user-event/dist/utils";
import React from "react";

function Heading(props){
    return (
        <h1 className="heading">
        {props.content}</h1>  
    )
}

export default Heading;