import sensorPlaceholder from "../../assets/images/sensor-image-placeholder.png"
import Map from "../Map/Map"
import {credentials} from "../../utils/credentials"
import updateSensor from "../../utils/functions/updateSensor"
import updateLocation from "../../utils/functions/updateLocation"
import { BsPencil } from "react-icons/bs";
import updateState from "../../utils/functions/updateState"

export default function  Card ({ name, nSerial, maxval, minval, ubication, state}) {


    return(
        <div className={`bg-white bg-opacity-50 shadow-around rounded-md | text-black | w-80 h-cardcontainer | py-4 px-6 | flex flex-col justify-between items-center | ${state?null:"filter grayscale-md"}`}>

            <img src={sensorPlaceholder} alt="sensor-placeholder" className="h-2/6 self-center"/>
            <div className="flex flex-col">
                    <h2
                    onClick={()=>updateSensor({ parameter:"name", parameterText:"Name", parameterType:"text", value:name, id:nSerial })}
                    className="cursor-pointer"
                    >
                        Name: {name}
                    </h2>
                    <div className="flex items-center cursor-pointer" onClick={()=>updateState(state, nSerial)}>
                        <span className={`w-2.5 h-2.5 rounded-full ${state?"bg-green-600":"bg-red-600"}`}></span>
                        <span className="ml-2.5">{state?"Active":"Inactive"}</span>
                    </div>

                <h4>Serial: {nSerial}</h4>

                <ul className="">
                    <li
                    onClick={()=>updateSensor({ parameter: "minval", parameterText:"MNVR", parameterType:"number", value:minval, id:nSerial })}
                    className="cursor-pointer"
                    >
                        MNVR: {minval} (Minimum value readeable)
                    </li>
                    <li
                    onClick={()=>updateSensor({ parameter: "maxval", parameterText:"MXVR", parameterType:"number", value:maxval, id:nSerial })}
                    className="cursor-pointer"
                    >
                        MXVR: {maxval} (Maximum value readeable)
                    </li>
                </ul>
            </div>

            <div className="relative w-full h-44 ">
                <BsPencil className="absolute z-20 right-0 top-0" onClick={()=>updateLocation(nSerial)}/>
                <Map
                lat= {ubication[0]}
                long= {ubication[1]}
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.API_KEY_MAPS}`}
                containerElement = {<div className="h-44 w-full z-0"></div>}
                mapElement = {<div className="h-full"></div>}
                loadingElement = {<p>Cargando...</p>}
                />
            </div>
            
        </div>
    )
}