import {
  ArrowBigLeftDash,
  ArrowBigRightDash,
  ArrowUpRight,
} from "lucide-react";
import "../styles/project.css";
import lakshai from "../assets/lakshai.png";
import studybud from "../assets/studybud.png";
import snapcycle from "../assets/snapcycle.png";


const Project = () => {
  return (
    <div className="projectclass  w-full min-h-screen my-16  ">
      <h1 className="gradient-title text-[#d6dbd6fb] text-5xl font-extrabold font-bebas uppercase text-center mb-8">
        Exciting Projects I have worked on
      </h1>
      <div className=" grid sm:grid-cols-1 md:grid-cols-2 items-stretch gap-6 container mx-auto justify-center   p-4">
        <div className="border border-gray-500 px-4 pt-2  flex flex-col space-y-2 justify-between   h-full bg-gray-800 rounded-md    ">
          <h2 className="text-2xl text-white font-bold font-bebas ">
            {" "}
            <a
              href="https://sensai-iota-beige.vercel.app/"
              className="inline-flex items-center gap-1 hover:text-yellow-400 transition hover:-translate-y-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              LakshAI
              <ArrowUpRight size={20} />
            </a>
          </h2>
          <p className="text-gray-400 font-sm font-poppins tracking-wide  ">
            An intelligent web platform designed to guide students and
            professionals through every stage of career preparation. The system
            leverages AI to provide personalized resume analysis, interview
            question generation, resume improvement suggestions, and industry
            insights based on current market trends.
          </p>
          <div className=" flex gap-2 flex-wrap ">
            <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-800">
              React
            </span>
            <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-800">
              Next.js
            </span>
            <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-800">
              Generative AI
            </span>
            <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-800">
              TailwindCSS
            </span>
            <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-800">
              PostgreSql
            </span>
          </div>
          <div className="overflow-hidden">
            <img src={lakshai} alt="" />
          </div>
        </div>
        <div className="border border-gray-500 px-4 pt-2  flex flex-col space-y-2 justify-between h-full flex-grow  bg-gray-800 rounded-md ">
          <h2 className="text-2xl text-white font-bold font-bebas">
            {" "}
            <a
              href="https://garimatiwari2004.pythonanywhere.com/"
              className="inline-flex items-center gap-1 hover:text-yellow-400 transition hover:-translate-y-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              StudyBuddy
              <ArrowUpRight size={20} />
            </a>
          </h2>
          <p className="text-gray-400 font-sm font-poppins tracking-wide ">
            StudyBuddy is a real-time discussion and collaboration platform
            built with Django, Django Channels, and Django REST Framework. It
            enables users to create topic-based rooms, engage in threaded
            conversations, and exchange knowledge efficiently
          </p>
          <div className=" flex flex-wrap ">
            <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-800">
              HTML
            </span>
            <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-800">
              CSS
            </span>
            <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-800">
              Python
            </span>
            <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-800">
              Django
            </span>
            <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-800">
              DjangoChannels
            </span>
            <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-800">
              Django Rest Framework (DRF)
            </span>
          </div>
          <div className="overflow-hidden">
            <img src={studybud} alt="" />
          </div>
        </div>
        <div className="border border-gray-500 px-4 pt-2  flex flex-col space-y-2 justify-between   h-full bg-gray-800 rounded-md    ">
          <h2 className="text-2xl text-white font-bold font-bebas ">
            {" "}
            <a
              href="https://sparkathon-f1lx.vercel.app/"
              className="inline-flex items-center gap-1 hover:text-yellow-400 transition hover:-translate-y-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              SnapCycle
              <ArrowUpRight size={20} />
            </a>
          </h2>
          <p className="text-gray-400 font-sm font-poppins tracking-wide  ">
            Built the engaging, responsive frontend for SnapCycle, a
            sustainability-focused platform encouraging bottle returns through
            QR scanning and rewards. Delivered pixel-perfect UI from Figma
            designs using React and Tailwind CSS, optimizing for speed,
            mobile-first responsiveness, and user-friendly navigation. Enhanced
            user experience with smooth animations, clear reward tracking, and
            intuitive workflows—helping drive adoption of eco-friendly habits
            through technology
          </p>
          <div className=" flex gap-2 flex-wrap ">
            <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-800">
              React
            </span>
            <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-800">
              Next.js
            </span>
            <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-800">
              Framer Motion
            </span>
            <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-800">
              TailwindCSS
            </span>

           
          </div>
          <div className="overflow-hidden">
            <img src={snapcycle} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
