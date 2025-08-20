import {
  ArrowBigLeftDash,
  ArrowBigRightDash,
  ArrowUpRight,
} from "lucide-react";
import "../styles/project.css";
import lakshai from "../assets/lakshai.png";
import studybud from "../assets/studybud.png";
import snapcycle from "../assets/snapcycle.png";
import movierec from "../assets/movierec.png";

const Project = () => {
  return (
    <div className="projectclass  w-full min-h-screen  rounded-b-2xl">
      <h1 className="gradient-title text-[#d6dbd6fb] text-5xl font-extrabold font-bebas uppercase text-center mb-8">
        Exciting Projects I have worked on
      </h1>
      <div className=" grid sm:grid-cols-1 md:grid-cols-2 items-stretch gap-6 gap-y-10 container mx-auto justify-center   p-4">
        <a
          href="https://sensai-iota-beige.vercel.app/"
          className="inline-flex items-center gap-1 hover:text-yellow-400 transition "
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="group border border-gray-500 px-4 pt-2  flex flex-col space-y-2 justify-between hover:shadow-lg   h-full bg-gray-800 rounded-md    ">
            <h2 className="text-2xl text-white font-bold font-bebas flex gap-2">
              LakshAI <ArrowUpRight size={20} />
            </h2>
            <p className="text-gray-400 font-sm font-poppins tracking-wide  ">
              An intelligent web platform designed to guide students and
              professionals through every stage of career preparation. The
              system leverages AI to provide personalized resume analysis,
              interview question generation, resume improvement suggestions, and
              industry insights based on current market trends.
            </p>
            <div className=" flex gap-2 flex-wrap ">
              <span className="px-3 py-1 text-sm rounded-full bg-gray-600 text-white">
                React
              </span>
              <span className="px-3 py-1 text-sm rounded-full bg-gray-600 text-white">
                Next.js
              </span>
              <span className="px-3 py-1 text-sm rounded-full bg-gray-600 text-white">
                Generative AI
              </span>
              <span className="px-3 py-1 text-sm rounded-full bg-gray-600 text-white">
                TailwindCSS
              </span>
              <span className="px-3 py-1 text-sm rounded-full bg-gray-600 text-white">
                PostgreSql
              </span>
            </div>
            <div className="overflow-hidden">
              <img
                src={lakshai}
                alt=""
                className="   max-w-full aspect-[20/10] object-contain rounded-lg object-bottom transform transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-y-110"
              />
            </div>
          </div>
        </a>
        <a
          href="https://garimatiwari2004.pythonanywhere.com/"
          className="inline-flex items-center gap-1 hover:text-yellow-400 transition "
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="border group border-gray-500 px-4 pt-2  flex flex-col space-y-2 justify-between h-full flex-grow  bg-gray-800 rounded-md ">
            <h2 className="text-2xl text-white font-bold font-bebas flex gap-2">
              StudyBuddy
              <ArrowUpRight size={20} />
            </h2>
            <p className="text-gray-400 font-sm font-poppins tracking-wide ">
              StudyBuddy is a real-time discussion and collaboration platform
              built with Django, Django Channels, and Django REST Framework. It
              enables users to create topic-based rooms, engage in threaded
              conversations, and exchange knowledge efficiently
            </p>
            <div className=" flex flex-wrap gap-2 ">
              <span className="px-3 py-1 text-sm rounded-full bg-gray-600 text-white">
                HTML
              </span>
              <span className="px-3 py-1 text-sm rounded-full bg-gray-600 text-white">
                CSS
              </span>
              <span className="px-3 py-1 text-sm rounded-full bg-gray-600 text-white">
                Python
              </span>
              <span className="px-3 py-1 text-sm rounded-full bg-gray-600 text-white">
                Django
              </span>
              <span className="px-3 py-1 text-sm rounded-full bg-gray-600 text-white">
                DjangoChannels
              </span>
              <span className="px-3 py-1 text-sm rounded-full bg-gray-600 text-white">
                Django Rest Framework (DRF)
              </span>
            </div>
            <div className="overflow-hidden">
              <img
                src={studybud}
                alt=""
                className=" max-w-full aspect-[20/10] object-contain rounded-lg object-bottom transform transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-y-110"
              />
            </div>
          </div>
        </a>
        <a
          href="https://sparkathon-f1lx.vercel.app/"
          className="inline-flex items-center gap-1 hover:text-yellow-400 transition "
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="border group border-gray-500 px-4 pt-2  flex flex-col space-y-2 justify-between   h-full bg-gray-800 rounded-md    ">
            <h2 className="text-2xl text-white font-bold font-bebas flex gap-2 ">
              SnapCycle
              <ArrowUpRight size={20} />
            </h2>
            <p className="text-gray-400 font-sm font-poppins tracking-wide  ">
              Built the engaging, responsive frontend for SnapCycle, a
              sustainability-focused platform encouraging bottle returns through
              QR scanning and rewards. Delivered pixel-perfect UI from Figma
              designs using React and Tailwind CSS, optimizing for speed,
              mobile-first responsiveness, and user-friendly navigation.
              Enhanced user experience with smooth animations, clear reward
              tracking, and intuitive workflows—helping drive adoption of
              eco-friendly habits through technology
            </p>
            <div className=" flex gap-2 flex-wrap ">
              <span className="px-3 py-1 text-sm rounded-full bg-gray-600 text-white">
                React
              </span>
              <span className="px-3 py-1 text-sm rounded-full bg-gray-600 text-white">
                Next.js
              </span>
              <span className="px-3 py-1 text-sm rounded-full bg-gray-600 text-white">
                Framer Motion
              </span>
              <span className="px-3 py-1 text-sm rounded-full bg-gray-600 text-white">
                TailwindCSS
              </span>
            </div>
            <div className="overflow-hidden">
              <img
                src={snapcycle}
                alt=""
                className=" max-w-full aspect-[20/10] object-contain rounded-lg object-bottom transform transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-y-110"
              />
            </div>
          </div>
        </a>
        <a
          href="https://github.com/garimatiwari2004/Movie-Recommender-System-Movierec"
          className="inline-flex items-center gap-1 hover:text-yellow-400"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="border group border-gray-500 px-4 pt-2  flex flex-col space-y-2 justify-between   h-full bg-gray-800 rounded-md    ">
            <h2 className="text-2xl text-white font-bold font-bebas flex gap-2 ">
              Movie Recommender System
              <ArrowUpRight size={20} className="group-hover:-translate-y-1" />
            </h2>
            <p className="text-gray-400 font-sm font-poppins tracking-wide  ">
              A movie recommendation system is an intelligent application that
              suggests films to users based on their tastes, preferences, and
              viewing history. It works by analyzing data such as user ratings,
              watch history, and movie attributes like genre, cast, and
              director. The system can use content-based filtering, which
              recommends movies similar to those a user has already liked,
              collaborative filtering, which finds patterns from the behavior of
              similar users, or a hybrid approach that combines both methods for
              improved accuracy.
            </p>
            <div className=" flex gap-2 flex-wrap ">
              <span className="px-3 py-1 text-sm rounded-full bg-gray-600 text-white">
                Python
              </span>
              <span className="px-3 py-1 text-sm rounded-full bg-gray-600 text-white">
                NumPy
              </span>
              <span className="px-3 py-1 text-sm rounded-full bg-gray-600 text-white">
                Scikit-Learn
              </span>
              <span className="px-3 py-1 text-sm rounded-full bg-gray-600 text-white">
                Matplotlib
              </span>
            </div>
            <div className="overflow-hidden">
              <img
                src={movierec}
                alt=""
                className=" max-w-full aspect-[20/10] object-contain rounded-lg object-bottom transform transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-y-110"
              />
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Project;
