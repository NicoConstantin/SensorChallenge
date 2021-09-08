import Card from "../Card/Card.jsx";


export default function Cards ({arrayData}) {

    

    return (
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-10 items-center">
            {arrayData?.map(card=>{
                return (
                    <Card
                    name={card.name}
                    nSerial={card._id}
                    state={card.active}
                    minval={card.minval}
                    maxval={card.maxval}
                    ubication={card.location.coordinates}
                    />
                )
            })}
        </div>
    )
}