import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import CardDetail from "../../components/CardDetail/CardDetail";
import Map from "../../components/Map/Map";
import { EVENTS, GET_ALL_SENSORS } from "../../utils/constants";
import { BsPencil } from "react-icons/bs";
import updateLocation from "../../utils/functions/updateLocation";
import {credentials} from "../../utils/credentials";
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
    },[])

    return (
        <div className="bg-gradient-to-b from-black via-gray-800 to-gray-600 w-full flex flex-col items-center">
            <Navbar/>

            <div className={`flex flex-col justify-around items-center mt-32 bg-white bg-opacity-50 shadow-around rounded-md | text-black | w-10/12 | py-4 px-6 | ${(sensor?.active)?null:"filter grayscale-md"}`}>
                <CardDetail sensor={sensor}/>
                <div className="relative w-full h-44 ">
                    <BsPencil className="absolute z-20 right-0 top-0" onClick={()=>updateLocation(sensor?._id)}/>
                    <Map
                    lat= {sensor?.location?.coordinates[0]}
                    long= {sensor?.location?.coordinates[1]}
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.API_KEY_MAPS}`}
                    containerElement = {<div className="h-full w-full z-0"></div>}
                    mapElement = {<div className="h-full"></div>}
                    loadingElement = {<p>Cargando...</p>}
                    />
                </div>
            </div>

            <Events id={id} events={events} maxval={sensor?.maxval} minval={sensor?.minval}/>

        </div>
    )
}