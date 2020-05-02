import React from "react";
import {Div, P, H2} from "./styled.js";
const CharacterCard = props=>{
    return(<div>
       <H2>{props.Name}</H2>
        <Div>
        
        <P>Height: {props.Height}</P>
        <P>Mass: {props.Mass}</P>
        <P>Hair color: {props.Haircolor}</P>
        <P>Skin color: {props.Skincolor}</P>
        <P>Eye color: {props.Eyecolor}</P>
        <P>Gender: {props.Gender}</P>
     </Div>
     </div>
    );
};
export default CharacterCard;