import { useState } from "react";

// eslint-disable-next-line react/prop-types
function Player({name,symbol}) {
    const [isEditing,setIsEditing] =useState(false)
    const [pname,setPName]= useState(name)
    const handleEditing= ()=>{
        setIsEditing((wasEditing)=>!wasEditing)
        
    }

    const handleChange=(e) =>{
        setPName(e.target.value);
    }
  return (
    <li>
      <span className="player">
        {
            isEditing? <input type="text" value={pname} onChange={handleChange}/>:
            <span className="player-name">{pname}</span>
        }
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditing}>
       {isEditing ? "Save":"Edit"} 
      </button>
    </li>
  );
}

export default Player;
  