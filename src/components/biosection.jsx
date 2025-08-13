export const BioSection = () => {
  return (
    <div className=" container grid md:grid-cols-2 sm:grid-cols-1 gap-4  mx-auto  ">
      <div className="p-5">
        <h1 className="text-5xl font-extrabold md:4xl text-white font-bebas uppercase">
          Hi! I'm <span className="text-orange-500">Garima</span>. <br />
          Eager to learn, <br />
          excited to build!
        </h1>
      </div>
      <div className=" flex flex-col justify-center items-center p-5 ">
        <p className="text-white text-xl font-bold  ">
          Fresher in title, veteran in Googling errors. <br />
          Learning to write code that doesn’t break under eye contact. <br />
          Balancing deadlines, documentation, and daily identity crises.
          <br /><span className="text-green-700">
          My code runs... eventually.
          </span>
        </p>
      </div>
    </div>
  );
};
