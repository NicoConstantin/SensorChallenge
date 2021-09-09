import axios from "axios"
import Swal from "sweetalert2"
import { GET_ALL_SENSORS } from "../constants"

export default async function updateSensor (object) {

    let regexAlphanumeric = /^[a-zA-Z0-9]*$/;
    let regexNumberic = /^-?[0-9]\d*(\.\d+)?$/;
    let flag = false;

    const { value: newValue } = await Swal.fire({
    title: `Enter the new ${object.parameterText}`,
    input: 'text',
    inputLabel: `Your new ${object.parameterText}`,
    showCancelButton: true,

    inputValidator: (value) => {
        switch(object.parameterType){
            case "text":{
                flag = !regexAlphanumeric.test(value)
                break;
            }
            case "number":{
                flag = !regexNumberic.test(value)
                break;
            }
            default:{
                flag = value
            }
        }
        return flag?"Invalid characters":null
    }
    })

    if (newValue) {
        axios.put(GET_ALL_SENSORS,{
            id: object.id,
            [object.parameter]: newValue
        })
        .then(()=>{
            Swal.fire(`The new sensor ${object.parameterText} is ${newValue}`)
        })
        .catch(e=>console.log(e))
        
    }
}
