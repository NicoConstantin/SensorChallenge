import axios from "axios"
import Swal from "sweetalert2"
import { GET_ALL_SENSORS } from "../constants"

export default async function updateLocation (id) {
    let regexNumberic = /^-?[0-9]\d*(\.\d+)?$/;
    const { value: formValues } = await Swal.fire({
        title: 'Update Location',
        html:
          '<label for="latitude"> Latitude </label>'+
          '<input id="latitude" class="swal2-input">'+
          '<label for="longitude"> Longitude </label>'+
          '<input id="longitude" class="swal2-input">',
          
        focusConfirm: false,
        preConfirm: () => {
            let lat = document.getElementById('latitude').value
            let long = document.getElementById('longitude').value
            if (!regexNumberic.test(lat) || !regexNumberic.test(long)){
                Swal.showValidationMessage(`Must be numbers`)
            }
          return [lat,long]
        },
      })
      
      if (formValues) {
        axios.put(GET_ALL_SENSORS,{
            id: id,
            coordinates: formValues
        })
        .then(()=>{
            Swal.fire(`Location updated`)
        })
        .catch(e=>console.log(e))
      }
}