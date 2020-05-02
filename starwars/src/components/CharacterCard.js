import React from "react";

const CharacterCard = props=>{
    return(
        <div>
        <h2>Name: {props.Name}</h2>
        <p>Height: {props.Height}</p>
        <p>Mass: {props.Mass}</p>
        <p>Hair color: {props.Haircolor}</p>
        <p>Skin color: {props.Skincolor}</p>
        <p>Eye color: {props.Eyecolor}</p>
        <p>Gender: {props.Gender}</p>
     </div>
    );
};
export default CharacterCard;