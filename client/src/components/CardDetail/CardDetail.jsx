import sensorPlaceholder from "../../assets/images/sensor-image-placeholder.png"
import deleteSensor from "../../utils/functions/deleteSensor"
import updateSensor from "../../utils/functions/updateSensor"
import updateState from "../../utils/functions/updateState"

export default function  CardDetail ({sensor}) {

    return(
        <div className="w-full">
            <div>
                <button onClick={()=>deleteSensor(sensor._id)}>Tachito de basura</button>
                <img src={sensorPlaceholder} alt="sensor-placeholder" className="h-2/6 self-center"/>
                <div className="flex flex-col">
                        <h2
                        onClick={()=>updateSensor({ parameter:"name", parameterText:"Name", parameterType:"text", value:sensor.name, id:sensor?._id })}
                        className="cursor-pointer"
                        >
                            Name: {sensor?.name}
                        </h2>
                        <div className="flex items-center cursor-pointer" onClick={()=>updateState(sensor?.active, sensor?._id)}>
                            <span className={`w-2.5 h-2.5 rounded-full ${sensor?.active?"bg-green-600":"bg-red-600"}`}></span>
                            <span className="ml-2.5">{sensor?.active?"Active":"Inactive"}</span>
                        </div>

                    <h4>Serial: {sensor?._id}</h4>

                    <ul className="">
                        <li
                        onClick={()=>updateSensor({ parameter: "minval", parameterText:"MNVR", parameterType:"number", value:sensor?.minval, id:sensor?._id })}
                        className="cursor-pointer"
                        >
                            MNVR: {sensor?.minval} (Minimum value readeable)
                        </li>
                        <li
                        onClick={()=>updateSensor({ parameter: "maxval", parameterText:"MXVR", parameterType:"number", value:sensor?.maxval, id:sensor?._id })}
                        className="cursor-pointer"
                        >
                            MXVR: {sensor?.maxval} (Maximum value readeable)
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}