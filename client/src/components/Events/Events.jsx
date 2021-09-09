import actionsUponEvent from "../../utils/functions/actionsUponEvent"
import createEvent from "../../utils/functions/createEvent"

export default function Events ({id,maxval,minval,events}) {

    return (
        <div>
            <div>
                <div className="flex ">
                    <h2>Latest Events</h2>
                    <button onClick={()=>createEvent( id, minval, maxval )}>CREATE</button>
                </div>
                <div>
                    {events?.map(e=>{
                        return (
                            <table>

                                <tr>
                                    <th>Datected on</th>
                                    <th>Last update</th>
                                    <th>Measure</th>
                                    <th>Actions</th>
                                </tr>

                                <tr>
                                    <td>{e.createdAt.slice(0,10).split("-").reverse().join("-")} {e.createdAt.slice(11,19)}</td>
                                    <td>{e.updatedAt.slice(0,10).split("-").reverse().join("-")} {e.updatedAt.slice(11,19)}</td>
                                    <td>{e.value}</td>
                                    <td><button onClick={()=>actionsUponEvent(e._id, minval, maxval)}>btn</button></td>
                                </tr>

                            </table>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}