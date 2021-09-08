import logo from "../../assets/images/E-Sensor-lightblue.png"


export default function Navbar({classContainer}) {

    return (
        <div className={classContainer}>
            <img src={logo} alt="logo e-sensor" className="h-20" />
            <ul className="flex justify-between align-center w-5/12 text-white font-medium">
                <li>About us</li>
                <li>Create Sensor</li>
            </ul>
        </div>
    )
  }