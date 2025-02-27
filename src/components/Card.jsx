import React from "react";
import './Card.css';

const Card = (props) => {

    const handleCardClick = () =>{
        window.open(props.link,"_blank");
    };



    return(
    <div className = "card" onClick = {handleCardClick}>
        <img src={props.image} alt="no Image" />
        <h1>{props.title}</h1>
    </div>
    )
}



export default Card;