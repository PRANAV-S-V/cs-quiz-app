import React, {useState} from "react";
import Image from 'react-bootstrap/Image';


function FluidImage(props) {
    const [isHovered, setIsHovered] = useState(false);

    function handleMouseEnter(){
        setIsHovered(true);
    }

    function handleMouseLeave(){
        setIsHovered(false);
    }

  return <Image  
  className={`fluid-image ${isHovered ? 'image-animation' : ''}`} 
  src={props.url}
  onMouseEnter={handleMouseEnter}
  onMouseLeave={handleMouseLeave}
   fluid />;
}

export default FluidImage;