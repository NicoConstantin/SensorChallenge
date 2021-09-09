import axios from "axios"
import Swal from "sweetalert2"
import { EVENTS } from "../constants"


export default async function actionsUponEvent ( eventId, minval, maxval, id ) {

    const inputOptions = new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            'delete': 'Delete measure',
            'update': 'Update measure',
          })
        }, 1000)
      })
      
      const { value: action } = await Swal.fire({
        title: 'What action you want to do?',
        input: 'radio',
        inputOptions: inputOptions,
        inputValidator: (value) => {
          if (!value) {
            return 'You need to choose something!'
          }
        }
      })
      
      if (action === "delete") {
        const { value: accept } = await Swal.fire({
            title: 'Delete event',
            input: 'checkbox',
            inputValue: 1,
            inputPlaceholder:`I agree to delete the event`,
            confirmButtonText:
              'Continue <i class="fa fa-arrow-right"></i>',
            inputValidator: (result) => {
              return !result && 'You need to agree the action'
            }
          })
          
          if (accept) {
            axios.delete(EVENTS,{ data:{ eventId: eventId} })
            .then(()=>{
                Swal.fire(`Event deleted`)
            })
            .catch(e=>console.log(e))
          }
        
      }
      if (action === "update") {
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
            axios.put(EVENTS,{
                eventId: eventId,
                newValue: newValue,
                sensorId: id
            })
            .then(()=>{
                Swal.fire(`Event updated`)
            })
            .catch(e=>console.log(e))
        }
      }
      
}