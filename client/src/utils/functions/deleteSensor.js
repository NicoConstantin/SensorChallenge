import axios from "axios"
import Swal from "sweetalert2"
import { EVENTS, GET_ALL_SENSORS } from "../constants"

export default async function deleteSensor (id) {
    const { value: accept } = await Swal.fire({
        title: 'Delete sensor',
        input: 'checkbox',
        inputValue: 1,
        inputPlaceholder:`I agree to delete the sensor`,
        confirmButtonText:
          'Continue <i class="fa fa-arrow-right"></i>',
        inputValidator: (result) => {
          return !result && 'You need to agree the action'
        }
      })
      
      if (accept) {
        let eventsDeleted = axios.delete(EVENTS,{ data:{ sensorId: id } })
        let sensorDeleted = axios.delete(GET_ALL_SENSORS,{ data:{ id: id }})
        Promise.all([eventsDeleted,sensorDeleted])
        .then(res=>{
            Swal.fire(`Sensor deleted`)
        })
        .catch(e=>console.log(e))
      }
}