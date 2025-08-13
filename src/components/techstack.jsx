import html5 from "../assets/html5.png";
import css from "../assets/css.png";
import tailwindcss from "../assets/tailwindcss.png";
import react from "../assets/react.png";
import nextdotjs from "../assets/nextdotjs.png";
import django from "../assets/django.png";
import python from "../assets/python.png";
import javascript from "../assets/javascript.png";



const Techstack=()=>{
    return(
        <div className="w-full  bg-white p-4 ">
    
        <div className="container mx-auto  min-h-screen space-y-6 flex flex-col items-center w-full  ">
        <h1 className="text-5xl  font-extrabold font-montserrat text-gray-400 text-center mt-8 ">Endless sky, Limitless dreams!</h1>
        <h2 className="text-gray-900 font-sans text-lg font-semibold text-center mb-8">I leverage <span id="tech">React</span>, <span id="tech">Next.js</span >, <span id="tech">Django</span>, <span id="tech">Python</span>, and <span id="tech">TailwindCSS</span> to build web applications that are fast, efficient,
             and visually compelling. My understanding of Data Science and 
             Machine Learning allows me to incorporate data-driven intelligence, 
             predictive models, and automation, making my applications not only functional 
             but also smarter and future-ready</h2>

        <div className="autoslider flex gap-5 mt-8 overflow-x-auto scrollbar-hide">
            <img src={html5} alt="" className="h-10 w-10 md:h-20 md:w-20 hover:translate-y-[-3px] hover:drop-shadow-[0_4px_3px_rgba(239,68,68,0.7)]" />
            <img src={css} alt=""  className="h-10 w-10 md:h-20 md:w-20 hover:translate-y-[-3px] hover:drop-shadow-[0_4px_3px_rgba(239,68,68,0.7)]"/>
            <img src={javascript} alt=""  className="h-10 w-10 md:h-20 md:w-20 hover:translate-y-[-3px] hover:drop-shadow-[0_4px_3px_rgba(239,68,68,0.7)]" />
            <img src={react} alt=""  className="h-10 w-10 md:h-20 md:w-20 hover:translate-y-[-3px] hover:drop-shadow-[0_4px_3px_rgba(239,68,68,0.7)]" />
            <img src={python} alt=""  className="h-10 w-10 md:h-20 md:w-20 hover:translate-y-[-3px] hover:drop-shadow-[0_4px_3px_rgba(239,68,68,0.7)]" />
            <img src={django} alt=""  className="h-10 w-10 md:h-20 md:w-20 hover:translate-y-[-3px] hover:drop-shadow-[0_4px_3px_rgba(239,68,68,0.7)]"/>
            <img src={nextdotjs} alt=""  className="h-10 w-10 md:h-20 md:w-20 hover:translate-y-[-3px] hover:drop-shadow-[0_4px_3px_rgba(239,68,68,0.7)]" />
            <img src={tailwindcss} alt=""  className="h-10 w-10 md:h-20 md:w-20 hover:translate-y-[-3px] hover:drop-shadow-[0_4px_3px_rgba(239,68,68,0.7)]"/>




        </div>
        </div>
        </div>
    )

}
export default Techstack;