import sensorPlaceholder from "../../assets/images/sensor-image-placeholder.png";
import { Link } from "react-router-dom";

export default function  Card ({ name, nSerial, state}) {


    return(
        <div className={`bg-white bg-opacity-70 shadow-around rounded-md | w-72 h-80 | py-4 px-6`}>
            <Link to={`/detail/${nSerial}`} className="flex flex-col justify-between items-center font-titillium font-semibold text-center">

                <img src={sensorPlaceholder} alt="sensor-placeholder" className="w-48"/>

                <h2 className="text-xl tracking-wider">SENSOR: {name.toUpperCase()}</h2>

                <div className="flex items-center mt-2" >
                    <span className={`w-3 h-3 rounded-full ${state?"bg-green-neon shadow-neon-green":"bg-red-neon shadow-neon-red"}`}></span>
                    <span className="ml-2.5 text-lg tracking-wide">{state?"Active":"Inactive"}</span>
                </div>

            </Link>
            
        </div>
    )
}