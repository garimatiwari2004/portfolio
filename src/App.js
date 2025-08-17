import { useState, useRef } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import BioSection from "./components/biosection";
import Hero from "./components/hero";
import Techstack from "./components/techstack";
import Project from "./components/projects";
import AboutMe from "./components/aboutme";
import MemoryGame from "./components/memorygame";
import MusicPrompt from "./components/music";
import MusicControl from "./components/musicControl";

import co2 from "./assets/audio/co2.mp3";
import kabhikabhiaditi from "./assets/audio/kabhikabhiaditi.mp3";
import slow from "./assets/audio/slow.mp3";
import sweetcreature from "./assets/audio/sweetcreature.mp3";

function App() {
  const [askMusic, setAskMusic] = useState(true);
  const audioref = useRef(null);
  const [currentTrack, setCurrentTrack] = useState(0);

  const tracks = [
    { title: "Track1", src: co2 },
    { title: "Track2", src: kabhikabhiaditi },
    { title: "Track3", src: slow },
    {title:"Track4",src:sweetcreature}
    
  ];

  const handleMusicChoice = (play) => {
    if (play && audioref.current) audioref.current.play();
    setAskMusic(false);
  };

  return (
    <>
      {/* Audio element with ref */}
      <audio ref={audioref} src={tracks[currentTrack].src} loop />

      {askMusic ? (
        <MusicPrompt onChoice={handleMusicChoice} />
      ) : (
        <>
          <Routes>
            <Route path="/" element={
              <>
                <Navbar />
                <Hero />
                <BioSection />
                <Techstack />
                <Project />
                <MemoryGame />
              </>
            }/>
            <Route path="/projects" element={<Project />} />
            <Route path="/about" element={<AboutMe />} />
          </Routes>

          {/* Music control */}
          <MusicControl
            audioref={audioref}
            tracks={tracks}
            currentTrack={currentTrack}
            setCurrentTrack={setCurrentTrack}
          />
        </>
      )}
    </>
  );
}

export default App;
