import actionsUponEvent from "../../utils/functions/actionsUponEvent"
import createEvent from "../../utils/functions/createEvent"
import { CgArrowsExchangeAlt } from "react-icons/cg";
import { BsPlusSquare } from "react-icons/bs";
import "./EventsTable.scss"

export default function Events ({id,maxval,minval,events}) {

    return (
        <div className="w-10/12 py-4 font-titillium flex flex-col sm:items-center "> 
            <div className="flex items-center ">
                <h2 className="text-lightblue text-xl font-bold">Latest Events</h2>
                <BsPlusSquare onClick={()=>createEvent( id, minval, maxval )} className="text-violet rounded-sm text-lg cursor-pointer ml-4"/>
            </div>
            <div className="overflow-hidden w-full flex flex-col items-start sm:items-center">
                <table className="content-table-event sm:shadow-detail-header">
                    <tr className="column-names ">
                        <th>Datected on</th>
                        <th>Last update</th>
                        <th>Measure</th>
                        <th className="w-2"></th>
                    </tr>
                    {events?.map(e=>{
                        return (
                            <tr className= "event-rows">
                                <td>{e.createdAt.slice(0,10).split("-").reverse().join("-")} {e.createdAt.slice(11,19)}</td>
                                <td>{e.updatedAt.slice(0,10).split("-").reverse().join("-")} {e.updatedAt.slice(11,19)}</td>
                                <td>{e.value}</td>
                                <td className="w-2"><CgArrowsExchangeAlt className="text-xl cursor-pointer"onClick={()=>actionsUponEvent(e._id, minval, maxval, id)}/></td>
                            </tr>
                        )
                    })}
                </table>
            </div>
        </div>
    )
}