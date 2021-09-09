import sensorPlaceholder from "../../assets/images/sensor-image-placeholder.png";
import { Link } from "react-router-dom";

export default function  Card ({ name, nSerial, state}) {


    return(
        <div className={`bg-white bg-opacity-50 shadow-around rounded-md | text-black | w-80 h-80 | py-4 px-6 | flex flex-col justify-between items-center | ${state?null:"filter grayscale-md"}`}>
            <Link to={`/${nSerial}`}>
                <img src={sensorPlaceholder} alt="sensor-placeholder" className="h-5/6 self-center"/>
                <div className="flex justify-around items-center w-10/12">
                    <h2 className="">Sensor: {name}</h2>
                    <div className="flex items-center " >
                        <span className={`w-2.5 h-2.5 rounded-full ${state?"bg-green-600":"bg-red-600"}`}></span>
                        <span className="ml-2.5">{state?"Active":"Inactive"}</span>
                    </div>
                </div>
            </Link>
            
        </div>
    )
}