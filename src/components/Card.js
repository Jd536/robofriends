import React from "react";

let Card = ({id, name, username, email})=>{
    return (
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src={`https://robohash.org/${name}?200x2001`} alt="a robot"/>
            <div>
                <h2>{name} </h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;