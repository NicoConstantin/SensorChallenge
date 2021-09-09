import Swal from "sweetalert2"
import updateSensor from "./updateSensor"
import updateState from "./updateState"


export default async function actionsUponSensor ( idSensor, state ) {

    const inputOptions = new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            'name': 'Name',
            'status': 'Status',
            'minval': 'MNVR',
            'maxval': 'MXVR'
          })
        }, 1000)
      })
      
      const { value: action } = await Swal.fire({
        title: 'What parameter you want to change?',
        input: 'radio',
        inputOptions: inputOptions,
        inputValidator: (value) => {
          if (!value) {
            return 'You need to choose one option!'
          }
        }
      })
      
      switch(action){
          case 'name':
            updateSensor({ parameter:"name", parameterText:"Name", parameterType:"text", id:idSensor })
            break;
          
          case 'minval':
            updateSensor({ parameter: "minval", parameterText:"MNVR", parameterType:"number",  id:idSensor })
            break;
          
          case 'maxval':
            updateSensor({ parameter: "maxval", parameterText:"MXVR", parameterType:"number",  id:idSensor })
            break;
          
          case 'status':
            updateState(state,idSensor)
            break;
            
          default:
      }
}