
export default function Navbar() {
    return (
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex flex-col justify-center items-center bg-gray-200 rounded-3xl  md:w-[500px]  p-4 ">
        <nav className=" " >     
            
            <div className="flex justify-center gap-5" >     
                <a href="/">Home</a>
                <a href="/about">About</a>  
                <a href="/projects">Projects</a>
                <a href="/contact">Contact</a>
            </div>
        </nav>  
        </div>
    );
}