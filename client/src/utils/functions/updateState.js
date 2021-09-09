import axios from "axios"
import Swal from "sweetalert2"
import { GET_ALL_SENSORS } from "../constants"

export default async function updateState (state,id) {
    const { value: accept } = await Swal.fire({
        title: 'Update Status',
        input: 'checkbox',
        inputValue: 1,
        inputPlaceholder:`I agree to ${state?"disable":"reactivate"} the sensor`,
        confirmButtonText:
          'Continue <i class="fa fa-arrow-right"></i>',
        inputValidator: (result) => {
          return !result && 'You need to agree the update'
        }
      })
      
      if (accept) {
        axios.put(GET_ALL_SENSORS,{
            id: id,
            statussend:"status",
            status : !state
        })
        .then(()=>{
          Swal.fire(`Sensor ${state?"Disabled":"Reactivated"}`)
        })
        .catch(e=>console.log(e))
      }
}