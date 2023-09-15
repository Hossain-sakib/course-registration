const Card = ({ card, handleSelect }) => {
    const { title, image, description, price, credit_hour } = card;
    return (
        <div className="bg-white rounded-2xl shadow-xl px-4 py-4 space-y-4">
            <div>
                <img className="w-full" src={image} alt="" />
            </div>
            <div className="items-center text-left space-y-4">
                <h2 className="text-xl font-medium">{title}</h2>
                <p className="text-sm text-slate-500 font-light ">{description}</p>
            </div>
            <div className="flex justify-between lg:gap-4">
                <div className="flex flex-1 items-center lg:gap-2">
                    <img src="https://i.ibb.co/crS5nby/dollar-sign-1.png" alt="" />
                    <p className="text-xs text-slate-500 font-light ">Price: {price}</p>
                </div>
                <div className="flex flex-1 items-center lg:gap-2">
                    <img src="https://i.ibb.co/PcsTD1f/Frame.png" alt="" />
                    <p className="text-xs text-slate-500 font-light ">Credit: {credit_hour}hr</p>
                </div>
            </div>
            <div className="flex justify-center bg-blue-500 rounded-lg">
                <button onClick={() => handleSelect(card,price,credit_hour)} className="text-lg font-bold text-white py-3 px-32">Select</button>
            </div>
        </div>
    );
};

export default Card;