import Footer from "../../components/Footer/Footer";
import Form from "../../components/Form/Form";
import Navbar from "../../components/Navbar/Navbar";


export default function FormCreate () {

    return(
        <div className="bg-gradient-to-b from-black via-gray-800 to-gray-600 w-full h-screen">
            <Navbar />
            <Form />
        </div>
    )
}