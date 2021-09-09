import sensorPlaceholder from "../../assets/images/sensor-image-placeholder.png";
import deleteSensor from "../../utils/functions/deleteSensor";
import { BsTrash, BsPencil } from "react-icons/bs";
import actionsUponSensor from "../../utils/functions/actionsUponSensor";
import Map from "../Map/Map";
import updateLocation from "../../utils/functions/updateLocation";
import { credentials } from "../../utils/credentials";

export default function  CardDetail ({sensor}) {

    return(
        <div className="relative  w-10/12 mx-auto lg:w-11/12">

            <div className="rounded-t-md bg-violet w-full  h-16 flex items-center justify-between px-6 shadow-detail-header">
                <h2 className="font-semibold text-lg">SERIAL {sensor?._id}</h2>
                <BsTrash onClick={()=>deleteSensor(sensor._id)} className="text-2xl cursor-pointer"/>
            </div>

            <div className="relative flex flex-col lg:flex-row lg:items-center items-center sm:items-start w-full py-4 px-6 bg-white shadow-around rounded-md rounded-t-none">

                <img src={sensorPlaceholder} alt="sensor-placeholder" className="w-52 sm:self-center"/>

                <div className=" relative flex flex-col font-titillium relative mb-4 gap-y-2.5 w-full lg:w-4/12 ">


                    <div className="flex justify-between lg:justify-start items-center">
                        <div className="flex items-center">
                            <span className={`w-3 h-3 rounded-full ${sensor?.active?"bg-green-neon shadow-neon-green":"bg-red-neon shadow-neon-red"}`}></span>
                            <span className="ml-2.5">{sensor?.active?"Active":"Inactive"}</span>
                        </div>
                        <BsPencil onClick={()=>actionsUponSensor(sensor._id, sensor.active)}
                        className="cursor-pointer text-black text-lg hover:text-darkviolet | transition-colors duration-100 lg:ml-40"
                        />
                    </div>

                    <h2>SENSOR: {sensor?.name?.toUpperCase()}</h2>

                    <p>MNVR: {sensor?.minval} <span className="text-sm">(Minimum value readeable)</span></p>
                    <p>MXVR: {sensor?.maxval} <span className="text-sm">(Maximum value readeable)</span></p>

                </div>

                <div className="relative w-full h-44 md:h-60 lg:h-80 2xl:h-96 lg:w-1/2">
                    <BsPencil className="absolute z-20 right-0 top-0 text-xl cursor-pointer" onClick={()=>updateLocation(sensor?._id)}/>
                    <Map
                    lat= {sensor?.location?.coordinates[0]}
                    long= {sensor?.location?.coordinates[1]}
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.API_KEY_MAPS}`}
                    containerElement = {<div className="h-full w-full z-0 border-purple-400 border rounded-sm"></div>}
                    mapElement = {<div className="h-full"></div>}
                    loadingElement = {<p>Cargando...</p>}
                    />
                </div>

            </div>
        </div>
    )
}