import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import CardDetail from "../../components/CardDetail/CardDetail";
import { EVENTS, GET_ALL_SENSORS } from "../../utils/constants";
import Navbar from "../../components/Navbar/Navbar";
import Events from "../../components/Events/Events";

export default function Detail () {
    const { id } = useParams();
    const [sensor,setSensor] = useState({})
    const [events,setEvents] = useState([])

    useEffect(()=>{
        let sensorInfo = axios.get(`${GET_ALL_SENSORS}?id=${id}`)
        let eventsInfo = axios.get(`${EVENTS}?id=${id}`)
        Promise.all([sensorInfo,eventsInfo])
        .then(res=>{
            setSensor(res[0].data)
            setEvents(res[1].data)
        })
        .catch(e=>console.log(e))
    },[id])

    return (
        <div className="bg-gradient-to-b from-black via-gray-800 to-gray-600 w-full flex flex-col items-center gap-y-8">
            <Navbar/>

            <div className={`mt-32 w-full`}>
                <CardDetail sensor={sensor}/>
            </div>

            <Events id={id} events={events} maxval={sensor?.maxval} minval={sensor?.minval}/>

        </div>
    )
}