import React from "react";
import { useState, useEffect } from "react";
import pookiedog from "../assets/pookiedog.jpg";
import straycat from "../assets/straycat.jpg";
import manmonk from "../assets/manmonk.jpg";
import oned from "../assets/oned.jpg";
import mabetapin from "../assets/mabetapin.jpg";
import allmine from "../assets/allmine.jpeg";
import manali from "../assets/manali.jpg";
import outfit from "../assets/outfit.jpeg";

const MemoryGame = () => {
  const cardValues = [
    { src: oned, matched: false },
    { src: mabetapin, matched: false },
    { src: manmonk, matched: false },
    { src: pookiedog, matched: false },
    { src: straycat, matched: false },
    { src: allmine, matched: false },
    { src: manali, matched: false },
    { src: outfit, matched: false },
  ];
  const [input, setInput] = useState("");

  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [first, setFirst] = useState(null);
  const [sec, setSec] = useState(null);
  const [disabled, setDisabled] = useState(null);

  const shufflecards = () => {
    const shuffledcards = [...cardValues, ...cardValues]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setCards(shuffledcards);
    setTurns(0);
  };

  useEffect(() => {
    shufflecards();
  }, []);

  const handleChoice = (card) => {
    if (disabled) return;
    if (first && card.id == first.id) return;

    first ? setSec(card) : setFirst(card);
  };
  const resetTurn = () => {
    setFirst(null);
    setSec(null);
    setTurns((prev) => prev + 1);
    setDisabled(false);
  };

  useEffect(() => {
    if (!first || !sec) return;
    setDisabled(true);
    if (first.src == sec.src) {
      setCards((prev) =>
        prev.map((c) => (c.src === first.src ? { ...c, matched: true } : c))
      );
      resetTurn();
    } else {
      setTimeout(() => {
        resetTurn();
      }, 900);
    }
  }, [first, sec]);
  return (
    <div className=" bg-gradient-to-r from-gray-900 to-gray-950  w-screen  mt-16 py-10  flex flex-col justify-center gap-6  ">
      
      <h1 className="text-white text-4xl text-center ">Memory Match Game</h1>
      <div className="flex justify-center ">
        <button
          onClick={shufflecards}
          className="px-2 py-1 border-none rounded-md bg-green-700 text-white font-semibold inline-block"
        >
          New Game
        </button>
      </div>

      <div className="container mx-auto  p-7">
        <div className="grid md:grid-cols-4 grid-cols-2 gap-4 rounded-xl">
          {cards.map((card) => {
            const isFlipped=card.matched||card.id===first?.id||card.id===sec?.id;

            return(
            <button
              className="bg-gray-700 relative aspect-[7/8] w-full rounded-xl object-cover  mx-auto my-auto overflow-hidden shadow-lg flex items-center justify-center"
              key={card.id}
              onClick={()=>handleChoice(card)}
              disabled={disabled}
              style={{ perspective: "1000px" }}
            >
                 <div
        className="w-full h-full relative"
        style={{
          transformStyle: "preserve-3d",
          transition: "transform 0.6s",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front (the "?") */}
        <div
          className="absolute inset-0 flex items-center justify-center font-bold text-5xl bg-[repeating-linear-gradient(0deg,#111827_0px,#111827_1px,transparent_1px,transparent_10px)] bg-white  rounded-xl"
          style={{
            backfaceVisibility: "hidden",
            textShadow: "2px 2px 1px white",
            
          }}
        >
          ?
        </div>

        {/* Back (the image) */}
        <div
          className="absolute inset-0"
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
          }}
        >
          <img
            src={card.src}
            alt="card"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>
            </button>);
          })};
        </div>
      </div>
      <div className="flex justify-center items-center">
      < button className="text-white text-center bg-blue-400 p-2  rounded-lg">Turns: {turns}</button>
      </div>
    </div>
  );
};

export default MemoryGame;
