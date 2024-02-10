import React from "react";

function Score(props){
    return(
        <h3 id="score-board" >Score: {props.value}</h3>
    );
}

export default Score;