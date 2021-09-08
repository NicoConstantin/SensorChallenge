import Card from "../Card/Card.jsx";

export default function Cards ({arrayData}) {
    return (
        <div className="flex justify-around gap-x-10 items-center">
            {arrayData?.map(card=>{
                return (
                    <Card
                    name={card.name}
                    nSerial={card._id}
                    state={card.active}
                    minval={card.minval}
                    maxval={card.maxval}
                    />
                )
            })}
        </div>
    )
}