import { useEffect } from "react";
import { useState } from "react";
import Card from "../../Card/Card";

const Cards = ({handleSelect}) => {
    const [cards,setCards]=useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setCards(data))
    },[])
    return (
        <div className="w-2/3 md:w-3/4 lg:w-3/4 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10">
            {
                cards.map(card=><Card 
                    key={card.id}
                     card={card}
                     handleSelect={handleSelect}
                     ></Card>)
            }
            
        </div>
    );
};

export default Cards;