import axios from "axios"
import Swal from "sweetalert2";
import { EVENTS } from "../constants"


export default async function createEvent ( id, minval, maxval ) {
    let regexNumberic = /^-?[0-9]\d*(\.\d+)?$/;
    const { value: newValue } = await Swal.fire({
        title: 'Enter new measure',
        input: 'text',
        inputLabel: 'Your measure',
        showCancelButton: true,
        inputValidator: (value) => {
          if (!regexNumberic.test(value)) {
            return 'Only numeric characters'
          }
          if (!(value <= maxval && value >= minval)){
            return 'The measurement must be within the range allowed by the device'
          }
        }
      })
      
      if (newValue) {
        axios.post(EVENTS,{
            sensorId: id,
            value: newValue
        })
        .then(()=>{
            Swal.fire(`Event added`)
        })
        .catch(e=>console.log(e))
      }
    
}