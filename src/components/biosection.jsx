import { MoveUpRight } from "lucide-react";
export const BioSection = () => {
  return (
    <div className=" container grid md:grid-cols-2 sm:grid-cols-1 place-content-center gap-4  mx-auto  p-4 my-16">
      <div className="p-5 ">
        <h1 className="text-5xl font-extrabold md:4xl text-white font-bebas uppercase">
          Hi! I'm <span className="text-orange-500">Garima</span>. <br />
          Eager to learn, <br />
          excited to build!
        </h1>
      </div>
      <div className=" flex flex-col  justify-center  p-5  ">
        <p className="text-white text-xl font-semibold  text-balance ">
          Fresher in title, veteran in Googling errors. <br />
          Learning to write code that doesn’t break under eye contact. <br />
          Balancing deadlines, documentation, and daily identity crises.
          <br />
          <span className="text-orange-500">My code runs... eventually.</span>
        </p>
        <h3 className="flex text-4xl font-bold text-white text-left font-caveat uppercase hover:translate-x-2 hover:cursor-pointer  ">
          More about me <MoveUpRight className="text-white  hover:cursor-pointer" />
        </h3>
        
      </div>
      
    </div>
  );
};

export default BioSection;
