import Navbar from "../../components/Navbar/Navbar";
import Cards from "../../components/Cards/Cards";
import { useEffect, useState } from "react";
import axios from "axios";
import { GET_ALL_SENSORS } from "../../utils/constants";


export default function Home() {

    const [data,setData] = useState([])

    useEffect(()=>{
        axios.get(GET_ALL_SENSORS)
        .then(res=> {
            console.log(res.data)
            setData(res.data)})
        .catch(e=>console.log(e))
    },[])

    return (
        <div className="bg-gradient-to-b from-black via-gray-800 to-gray-600 w-full h-full">
            <div className="bg-circuit bg-contain bg-no-repeat bg-fixed h-72">
                <Navbar />

            </div>

            <div className="py-12 px-8">
                <Cards arrayData={data}/>
            </div>

        </div>
    )
  }