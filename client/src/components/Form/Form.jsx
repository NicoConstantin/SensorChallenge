import { useForm } from "react-hook-form";
import axios from "axios";
import { GET_ALL_SENSORS } from "../../utils/constants";
import Swal from 'sweetalert2';

export default function Form () {
    
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    let classInput="border-gray-300 border rounded border-solid outline-none | p-2 | text-gray-900  | w-full placeholder-primary";
    let classError="text-purple-300 self-start"
    let classSubmitButton= " py-3 px-8 | font-bold | tracking-wider | rounded | mt-6 |transition-colors  duration-300 mb-16 " + (Object.values(errors).length === 0 ? "bg-darkviolet | text-lightblue | cursor-pointer | hover:bg-violet ":"bg-darkblue bg-opacity-20 | text-gray-400 ")

    const onSubmit = data => {
        axios.post(GET_ALL_SENSORS,{
            name: data.name,
            active: data.state,
            coordinates: [data.latitude,data.longitude],
            minval: data.minval,
            maxval: data.maxval
        })
        .then((res)=>{
            reset()
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
        <div className="pt-20 sm:pt-36 2xl:pt-44 flex flex-col justify-center items-center ">
            <h1 className=" text-violet text-2xl 2xl:text-3xl font-bold mt-8">Set Device Data</h1>
            <form onSubmit={handleSubmit(onSubmit)} className=" w-10/12 sm:w-8/12 md:w-7/12 lg:w-6/12 xl:w-5/12 2xl:w-4/12 h-2/6 | flex flex-col items-center justify-center | gap-y-3 mx-auto mt-8">
                
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

                <input className={classSubmitButton} type="submit" value="Create Sensor" />

            </form>
        </div>
    )
}