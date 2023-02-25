import React from "react";

const Cards = ({state,market,commodity}) =>{
    
    return (
       
         <div className="card-body">
            <ul>
                <li>State :- {state}</li>
                <li>Market :- {market}</li>
                <li>commodity :- {commodity}</li>
            </ul>
        </div>
    );
}
export default Cards;