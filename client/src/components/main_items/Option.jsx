import React, { useState } from "react"

function Option(props){

    var [changeColor, callChange] = useState(false);

    function optionEntered(){
        callChange(true);
    }

    function optionLeaved(){
        callChange(false);
    }

    return (
        <p onMouseEnter={optionEntered} 
            onMouseLeave={optionLeaved}
            className={`option-style ${changeColor ? 'add-option-anime' : ''}`}>{props.option}</p>
    )
}

export default Option;