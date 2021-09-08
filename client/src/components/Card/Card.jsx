
export default function Card ({ name, nSerial, maxval, minval, ubication, state}) {

    return(
        <div className="bg-white text-black">
            <h2>Name: {name}</h2>

            <div>
                <h4>Serial: {nSerial}</h4>
                <span className={`w-2 h-2 rounded-full ${state?"bg-green-600":"bg-red-600"}`}></span>
            </div>

            <ul>
                <li>MNVR:{minval} (minimum value readeable)</li>
                <li>MXVR: {maxval} (maximum value readeable)</li>
            </ul>
            
        </div>
    )
}