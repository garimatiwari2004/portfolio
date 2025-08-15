import { Link } from "react-router-dom";
import "../styles/nav.css";
import { NavigationMenu } from "radix-ui";
export default function Navbar() {
    return (
        <div className=" navbar absolute top-4 left-1/2 transform -translate-x-1/2 flex flex-col justify-center items-center bg-gray-200 rounded-3xl  md:w-[500px]  p-4 ">
        <nav >     
            
            <ul className="flex justify-center gap-5" >     
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>  
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </ul>
        </nav>  
        </div>
    );
}