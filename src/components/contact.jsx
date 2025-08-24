import logo from "../assets/logo.png";

import "../styles/contactcard.css";
import githubgif from "../assets/gihubgif.gif";
import linkedin from "../assets/linkedin.png";

const Contact = () => {
  return (
    <div className="socardss relative flex flex-col justify-center items-center ">
      <div className="overlay absolute bg-gray-800 w-full h-full opacity-65 z-55"></div>
      <div className=" grid md:grid-cols-2 sm:grid-cols-1 place-content-center place-items-center    ">
        <div className=" flex justify-center items-center w-full   ">
          <img src={logo} alt="logo" className=" opacity-50 rounded-lg z-50 " />
        </div>
        <div className=" flex flex-col justify-center  items-center  p-2  z-50 mt-8">
          <p className="text-white">
            <b className="text-yellow-200">Don’t know what you need?</b> I may
            not have all the answers yet, but I can help you outline simple
            steps and grow the idea alongside you.
          </p>
          <br />
          <p className="text-white">
            <b className="text-yellow-200">
              Already have an idea and need somebody to help create it?
            </b>{" "}
            I’ll listen to what you’re trying to achieve and make it as close to
            your vision as possible, with suggestions along the way to create
            the best product possible.
          </p>
          <br />
          <p className="text-white">
            <b className="text-yellow-200">
              Have a team working on a project but need a boost of support?
            </b>{" "}
            I’m flexible enough to work with any team, even if they’re part way
            through a project. Just let me know how to get started.
          </p>
        </div>
      </div>
      <div className="mt-5 ">
        <div className="socards flex flex-wrap justify-center gap-8 p-4     ">
          <div className="card-container  w-fit  border border-dashed border-gray-800  rounded-lg p-2 ">
            <a
              href="https://www.github.com/garimatiwari2004"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="social-card border border-gray-950 shadow-[0_0_25px_5px_rgba(254,240,138,0.4)] ">
                <div className="social-front p-2 flex flex-col gap-2">
                  <h3>Commits and features</h3>
                  <img src={githubgif} alt="" className="rounded-lg" />
                </div>
                <div className="social-back p-2 flex flex-col gap-2">
                  <h3>Bug Manufacturing ;)</h3>
                  <img
                    src={githubgif}
                    alt=""
                    className="border border-red-900 rounded-lg"
                  />
                </div>
              </div>
            </a>
          </div>
          <div className="card-container w-fit rounded-lg p-2 ">
            <a
              href="https://www.linkedin.com/in/garimatiwariii"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="social-card  shadow-[0_0_25px_5px_rgba(254,240,138,0.4)] ">
                <div className="social-front p-2 flex flex-col gap-2">
                  <h3>Connections & Network</h3>
                  <img src={linkedin} alt="" className="bg-white rounded-lg" />
                </div>

                <div className="social-back p-2 flex flex-col gap-2">
                  <h3>Imposter Syndrome :\</h3>
                  <img src={linkedin} alt="" className="bg-white rounded-lg" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-10  z-50 ">
      <a
        href="mailto:garimatiwari1803@gmail.com"
        className="block text-white text-xl hover:underline hover:text-yellow-300  hover:cursor-pointer z-50 hover:scale-y-150"
      >
        Reach out to me on mail !
      </a>
      </div>
    </div>
  );
};

export default Contact;
