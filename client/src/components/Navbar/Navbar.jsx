import { useState } from "react";
import logo from "../../assets/images/E-Sensor-lightblue.png"
import { Link } from "react-router-dom";


export default function Navbar({classContainer}) {

    const [scrolled,setScrolled] = useState(false)

    let classBasics = "fixed | z-10 | h-20 w-full | flex justify-between items-center | transition-all duration-200 | pr-12 font-orbitron "
    let classNormal = `${classBasics} bg-transparent text-white`;
    let classScrolled = `${classBasics} bg-white text-black`;

    const changeBackground = ()=> {
        if(window.scrollY >= 150){
            setScrolled(true)
        } else {
            setScrolled(false)
        }
    }

    window.addEventListener('scroll',changeBackground)

    return (
        <div className={scrolled? classScrolled : classNormal}>
            <Link to="/">
            <img src={logo} alt="logo e-sensor" className="h-20" />
            </Link>
            <ul className="flex justify-between align-center w-6/12 font-medium">
                <li>About us</li>
                <Link to="/create">
                    <li>Create Sensor</li>
                </Link>
            </ul>
        </div>
    )
  }