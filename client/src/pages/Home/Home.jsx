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
        <div className="bg-gradient-to-b from-black via-gray-800 to-gray-600 w-screen h-screen">
            <div className="bg-circuit bg-contain bg-no-repeat bg-fixed h-72">
                <Navbar classContainer="fixed bg-transparent backdrop-blur-lg z-10 h-20 flex justify-between items-center"/>

            </div>
            <Cards arrayData={data}/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At doloremque sunt reprehenderit aperiam consequuntur esse, voluptatibus impedit reiciendis excepturi culpa nam quisquam optio obcaecati iure accusamus officia mollitia autem earum.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At doloremque sunt reprehenderit aperiam consequuntur esse, voluptatibus impedit reiciendis excepturi culpa nam quisquam optio obcaecati iure accusamus officia mollitia autem earum.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At doloremque sunt reprehenderit aperiam consequuntur esse, voluptatibus impedit reiciendis excepturi culpa nam quisquam optio obcaecati iure accusamus officia mollitia autem earum.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At doloremque sunt reprehenderit aperiam consequuntur esse, voluptatibus impedit reiciendis excepturi culpa nam quisquam optio obcaecati iure accusamus officia mollitia autem earum.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At doloremque sunt reprehenderit aperiam consequuntur esse, voluptatibus impedit reiciendis excepturi culpa nam quisquam optio obcaecati iure accusamus officia mollitia autem earum.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At doloremque sunt reprehenderit aperiam consequuntur esse, voluptatibus impedit reiciendis excepturi culpa nam quisquam optio obcaecati iure accusamus officia mollitia autem earum.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At doloremque sunt reprehenderit aperiam consequuntur esse, voluptatibus impedit reiciendis excepturi culpa nam quisquam optio obcaecati iure accusamus officia mollitia autem earum.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At doloremque sunt reprehenderit aperiam consequuntur esse, voluptatibus impedit reiciendis excepturi culpa nam quisquam optio obcaecati iure accusamus officia mollitia autem earum.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At doloremque sunt reprehenderit aperiam consequuntur esse, voluptatibus impedit reiciendis excepturi culpa nam quisquam optio obcaecati iure accusamus officia mollitia autem earum.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At doloremque sunt reprehenderit aperiam consequuntur esse, voluptatibus impedit reiciendis excepturi culpa nam quisquam optio obcaecati iure accusamus officia mollitia autem earum.</p>

        </div>
    )
  }