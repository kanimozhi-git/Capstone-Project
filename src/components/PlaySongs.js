import React, { useState } from "react";

function PlaySongs() {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const songs = [
    {
      id: 1,
      title: "Aagaya Vennilave",
      src: "./Aagaya Vennilave.mp3"
    },
    {
      id: 2,
      title: "En_Vaaniley",
      src: "./En_Vaaniley.mp3"
    }
    // Add more songs as needed
  ];

  const playSong = (song) => {
    if (currentSong === song && isPlaying) {
      // If the song is already playing, pause it
      setIsPlaying(false);
    } else {
      setCurrentSong(song);
      setIsPlaying(true);
    }
  };

  return (
    <div>
      <h1>Simple Music Player</h1>
      <ul>
        {songs.map((song) => (
          <li key={song.id}>
            {song.title}
            <button onClick={() => playSong(song)}>
              {currentSong === song && isPlaying ? "Pause" : "Play"}
            </button>
          </li>
        ))}
      </ul>
      {currentSong && (
        <div>
          <h2>Now Playing: {currentSong.title}</h2>
          <audio controls autoPlay={isPlaying} src={currentSong.src}></audio>
        </div>
      )}
      <PlaySongs/>
    </div>
  );
}

export default PlaySongs;
