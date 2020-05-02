// Write your Character component here
import React, {useState, useEffect} from "react";
import axios from "axios";

import CharacterCard from "./CharacterCard";
export default function Character(){
    const[chars, setChars] = useState([]);
  useEffect(()=>{
    axios.get("https://swapi.py4e.com/api/people/")
    .then(response=>{
       console.log(response.data)
       setChars(response.data.results);
    })
    .catch(err => {
        console.log(err);
    });
  }, [])
   
    return (<div>
        {
            chars.map(char=>{
                return(
                    <CharacterCard 
                         Name={char.name}
                         Height={char.height}
                         Mass={char.mass}
                         Haircolor={char.hair_color}
                         Skincolor={char.skin_color}
                         Eyecolor={char.eye_color}
                         Gender={char.gender}
                    />
                )
            })
        }
</div>)
}