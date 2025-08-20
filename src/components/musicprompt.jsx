import React from "react";

const MusicPrompt = ({ onChoice }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 text-white p-4">
      <div className="bg-gray-800 p-6 rounded shadow-md text-center">
        <p className="mb-4 text-xl">
          Wanna hear some music while exploring my portfolio? 🎵
        </p>
        <button
          className="mr-2 px-4 py-2 bg-blue-600 rounded"
          onClick={() => onChoice(true)}
        >
          Yes, play!
        </button>
        <button
          className="px-4 py-2 bg-gray-600 rounded"
          onClick={() => onChoice(false)}
        >
          No, thanks
        </button>
      </div>
    </div>
  );
};

export default MusicPrompt;
