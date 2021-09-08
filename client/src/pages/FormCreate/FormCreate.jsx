import Navbar from "../../components/Navbar/Navbar";
import { useForm } from "react-hook-form";
import axios from "axios";
import { GET_ALL_SENSORS } from "../../utils/constants";
import Swal from 'sweetalert2';

export default function FormCreate () {

    let classInput="border-gray-300 border rounded border-solid outline-none | p-2 | text-darkblue  | w-full | focus:border-green-800";
    let classError="text-white self-start"
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        axios.post(GET_ALL_SENSORS,{
            name: data.name,
            active: data.state,
            coordinates: [data.latitude,data.longitude],
            minval: data.minval,
            maxval: data.maxval
        })
        .then((res)=>{
            const Toast = Swal.mixin({
                toast: true,
                position: 'bottom-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })
              
              Toast.fire({
                icon: 'success',
                title: 'Sensor added correctly'
              })
        })
        .catch((e)=>{
            console.log(e)
        })
    };

    return(
        <div className="bg-gradient-to-b from-black via-gray-800 to-gray-600 w-full h-full">
            <Navbar />
            <div className="h-full w-full flex justify-center">
                <form onSubmit={handleSubmit(onSubmit)} className="pt-48 w-10/12 h-3/4 flex flex-col items-center justify-around">
                    
                    <input
                    name="name"
                    {...register("name",{
                        required:{
                            value:true,
                            message:"You must add a sensor name"
                          },
                          pattern: {
                            value: /^[a-zA-Z0-9]*$/ ,
                            message: "Name can only containt alphabetic characters"
                            }
                    })}
                    type="text"
                    placeholder="Sensor Name..."
                    className={classInput}/>
                    <span className={classError}>
                        {errors.name &&  errors.name.message}
                    </span>

                    <div className="flex flex-col gap-y-3 w-full">

                        <input
                        type="text"
                        name="latitude"
                        {...register("latitude",{
                            required:{
                                value:true,
                                message:"You must add a latitude parameter"
                              },
                              pattern: {
                                value: /^-?[0-9]\d*(\.\d+)?$/ ,
                                message: "Latitude must be a number"
                                }
                        })}
                        placeholder="Latitude..."
                        className={classInput}/>
                        <span className={classError}>
                            {errors.latitude &&  errors.latitude.message}
                        </span>

                        <input
                        type="text"
                        name="longitude"
                        {...register("longitude",{
                            required:{
                                value:true,
                                message:"You must add a longitude parameter"
                              },
                              pattern: {
                                value: /^-?[0-9]\d*(\.\d+)?$/ ,
                                message: "Longitude must be a number"
                                }
                        })}
                        placeholder="Longitude..."
                        className={classInput}/>
                        <span className={classError}>
                            {errors.longitude &&  errors.longitude.message}
                        </span>

                    </div>

                    <select
                    className={classInput}
                    name="state"
                    {...register("state", {
                        required:{
                            value:true,
                            message:"You must select the device state"
                        } 
                    })}
                    >
                        <option disabled hidden selected value="">Select sensor state</option>
                        <option value={true}>Active</option>
                        <option value={false}>Inactive</option>
                    </select>
                    <span className={classError}>
                        {errors.state &&  errors.state.message}
                    </span>
                    
                    <input
                    type="text"
                    name="maxval"
                    {...register("maxval",{
                        required:{
                            value:true,
                            message:"You must add a maximum parameter that sensor can read"
                            },
                            pattern: {
                            value: /^-?[0-9]\d*(\.\d+)?$/ ,
                            message: "This value must be a number"
                            }
                    })}
                    placeholder="Max..."
                    className={classInput}/>
                    <span className={classError}>
                        {errors.maxval &&  errors.maxval.message}
                    </span>

                    <input
                    type="text"
                    name="minval"
                    {...register("minval",{
                        required:{
                            value:true,
                            message:"You must add a minimum parameter that sensor can read"
                            },
                            pattern: {
                            value: /^-?[0-9]\d*(\.\d+)?$/ ,
                            message: "This value must be a number"
                            }
                    })}
                    placeholder="Min..."
                    className={classInput}/>
                    <span className={classError}>
                        {errors.minval &&  errors.minval.message}
                    </span>

                    <input type="submit"/>

                </form>
            </div>
        </div>
    )
}