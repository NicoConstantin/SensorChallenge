import Card from "../Card/Card.jsx";


export default function Cards ({arrayData}) {

    

    return (
        <div className="flex flex-wrap items-center gap-10 items-center justify-center">
            {arrayData?.map(card=>{
                return (
                    <Card
                    name={card.name}
                    nSerial={card._id}
                    state={card.active}
                    />
                )
            })}
        </div>
    )
}