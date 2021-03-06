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
            setData(res.data)})
        .catch(e=>console.log(e))
    },[])

    return (
        <div className="w-full h-full">
            <div className="bg-circuit bg-contain bg-no-repeat bg-fixed h-72 lg:h-80 xl:h-96 sm:bg-cover ">
                <Navbar />
            </div>

            <div className="py-12 w-10/12 mx-auto">
                <Cards arrayData={data}/>
            </div>
        </div>
    )
  }