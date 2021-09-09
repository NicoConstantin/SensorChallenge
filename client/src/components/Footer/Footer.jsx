import completeLogo from "../../assets/images/sensorFooter.png"


export default function Footer () {

    return (
        <footer className="bg-almost-black text-violet shadow-xl w-full flex justify-center items-center fixed bottom-0">
            <img src={completeLogo} alt="logo complete" className="w-40"/>
        </footer>
    )
}