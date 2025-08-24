import { useState, useEffect } from "react";

const MusicControl = ({ audioref, tracks, currentTrack, setCurrentTrack }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTracks, setShowTracks] = useState(false);

  // Play initial track safely
  useEffect(() => {
    if (!audioref.current) return;

    // Set src first
    audioref.current.src = tracks[currentTrack].src;

    // Play after audio is loaded
    const handleCanPlay = () => {
      audioref.current.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    };

    audioref.current.addEventListener("canplay", handleCanPlay);

    return () => {
      audioref.current.removeEventListener("canplay", handleCanPlay);
    };
  }, [audioref, currentTrack, tracks]);

  const toggleMusic = () => {
    if (!audioref.current) return;
    if (audioref.current.paused) {
      audioref.current.play();
      setIsPlaying(true);
    } else {
      audioref.current.pause();
      setIsPlaying(false);
    }
  };

  const selectTrack = (index) => {
    setCurrentTrack(index);
    setIsPlaying(false); 
  };

  return (
    <>
      <button onClick={toggleMusic} className="fixed right-0 top-4 z-[500] sm:opacity-70 bg-red-300 hover:opacity-100 md:opacity-40 text-black px-4 py-2 rounded-l-full">
        {isPlaying ? "Pause" : "Play"}
      </button>

      <button onClick={() => setShowTracks(!showTracks)} className="fixed right-0 top-14 z-[500] sm:opacity-70 md:opacity-40 hover:opacity-100  bg-blue-400 px-4 py-2 rounded-l-full">
        Next
      </button>

      {showTracks && (
        <div className="fixed right-0 top-24 bg-gray-700 p-3 rounded flex flex-col gap-2">
          {tracks.map((track, index) => (
            <button
              key={index}
              onClick={() => selectTrack(index)}
              className={`px-2 py-1 z-[500] rounded ${currentTrack === index ? "bg-green-400" : "bg-gray-300"}`}
            >
              {track.title}
            </button>
          ))}
        </div>
      )}
    </>
  );
};

export default MusicControl;
