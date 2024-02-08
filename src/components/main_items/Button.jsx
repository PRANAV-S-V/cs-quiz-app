import Button from 'react-bootstrap/Button';
import React, {useState} from "react";

function LightButton(props) {

    const[isClicked, setClick] = useState(false);

    function buttonClicked(){
        setClick(true);
        setTimeout(() => {
            // After 3 seconds, update the message
            setClick(false);
          }, 111); 
    }
    
  return (
    <>
      <Button  className={`main-button ${isClicked ? 'button-clicked': ''}`}
        onClick={buttonClicked}
         variant="outline-light">{props.text}</Button>{' '}
    </>
  );
}

export default LightButton;