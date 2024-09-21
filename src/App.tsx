import React from 'react';
import './App.css';
import VideoDownload from './VideoDownload';
import MediaDisplay from './MediaDisplay';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>YT-Bravo</h1>
        <p>Download YouTube videos in <a target="downloads" href="http://localhost:5000/downloads">MP4</a> format</p>
        <VideoDownload />
        <MediaDisplay />
      </header>
    </div>
  );
};

export default App;
