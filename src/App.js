import { useState, useRef } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import BioSection from "./components/biosection";
import Hero from "./components/hero";
import Techstack from "./components/techstack";
import Project from "./components/projects";
import AboutMe from "./components/aboutme";
import MemoryGame from "./components/memorygame";
import MusicPrompt from "./components/musicprompt";
import MusicControl from "./components/musiccontrol";

import co2 from "./assets/audio/co2.mp3";
import kabhikabhiaditi from "./assets/audio/kabhikabhiaditi.mp3";
import slow from "./assets/audio/slow.mp3";
import sweetcreature from "./assets/audio/sweetcreature.mp3";

function App() {
  const [askMusic, setAskMusic] = useState(true);
  const [playMusic, setPlayMusic] = useState(false); // ✅ new state
  const audioref = useRef(null);
  const [currentTrack, setCurrentTrack] = useState(0);

  const tracks = [
    { title: "Track1", src: slow },
    { title: "Track2", src: kabhikabhiaditi },
    { title: "Track3", src: co2 },
    { title: "Track4", src: sweetcreature },
  ];

  const handleMusicChoice = (play) => {
    setPlayMusic(play); // ✅ save user choice
    setAskMusic(false);
  };

  return (
    <>
      {/* ✅ Only render audio if user agreed */}
      {playMusic && (
        <audio ref={audioref} src={tracks[currentTrack].src} autoPlay loop />
      )}

      {askMusic ? (
        <MusicPrompt onChoice={handleMusicChoice} />
      ) : (
        <>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Navbar />
                  <Hero />
                  <BioSection />
                  <Techstack />
                  <Project />
                  <MemoryGame />
                </>
              }
            />
            <Route path="/projects" element={<Project />} />
            <Route path="/about" element={<AboutMe />} />
          </Routes>

       
          {playMusic &&(
            <MusicControl
              audioref={audioref}
              tracks={tracks}
              currentTrack={currentTrack}
              setCurrentTrack={setCurrentTrack}
            />
          )}
        
        </>
      )}
    </>
  );
}

export default App;
