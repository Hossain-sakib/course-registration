import PropTypes from 'prop-types';
import { useEffect } from "react";
import { useState } from "react";
import Card from "../../Card/Card";

const Cards = ({ handleSelect }) => {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])
    return (
        <div className="w-1/2 md:w-2/3 lg:w-3/4 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10">
            {
                cards.map(card => <Card
                    key={card.id}
                    card={card}
                    handleSelect={handleSelect}
                ></Card>)
            }

        </div>
    );
};
Cards.propTypes = {
    handleSelect: PropTypes.func.isRequired
}

export default Cards;