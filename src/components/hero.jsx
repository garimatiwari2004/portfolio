import "../styles/tag.css"

const Hero = () => {
  return (
    <div className=" herodiv flex flex-col items-center justify-center min-h-screen w-full ">
      <div className=" text-center ">
        <h1 className="text-white md:text-5xl text-4xl font-extrabold  tag">
          New in the game,
          <br/>
           Not in the Grind
        </h1>
      </div>
    </div>
  );
};

export default Hero;
