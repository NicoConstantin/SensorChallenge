import sensorPlaceholder from "../../assets/images/sensor-image-placeholder.png"
import Map from "../Map/Map"
import {credentials} from "../../utils/credentials"

export default function Card ({ name, nSerial, maxval, minval, ubication, state}) {


    return(
        <div className={`bg-white bg-opacity-50 shadow-around rounded-md | text-black | w-80 h-cardcontainer | py-4 px-6 | flex flex-col justify-between items-center | ${state?null:"filter grayscale-md"}`}>

            <img src={sensorPlaceholder} alt="sensor-placeholder" className="h-2/6 self-center"/>
            <div className="flex flex-col">
                <div className="flex justify-start items-center">
                    <h2>Name: {name}</h2>
                    <div className="flex items-center ">
                        <span className={`w-2.5 h-2.5 rounded-full ml-3 ${state?"bg-green-600":"bg-red-600"}`}></span>
                        <span className="ml-2.5">{state?"Active":"Inactive"}</span>
                    </div>
                </div>

                <h4>Serial: {nSerial}</h4>

                <ul className="">
                    <li>MNVR: {minval} (Minimum value readeable)</li>
                    <li>MXVR: {maxval} (Maximum value readeable)</li>
                </ul>
            </div>

            <Map
            lat= {ubication[0]}
            long= {ubication[1]}
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.API_KEY_MAPS}`}
            containerElement = {<div className="h-44 w-10/12"></div>}
            mapElement = {<div className="h-full"></div>}
            loadingElement = {<p>Cargando...</p>}
            />
            
        </div>
    )
}