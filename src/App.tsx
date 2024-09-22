import React from "react";
import "./App.css";
import VideoDownload from "./VideoDownload";
import MediaDisplay from "./MediaDisplay";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Media Socializer</h1>
        <p>
          Download videos to your{" "}
          <a target="downloads" href="http://localhost:5000/downloads">
            computer
          </a>
          .
        </p>
        <VideoDownload />
        <MediaDisplay />
        <div>
          <a target="Repo" href="https://github.com/Raalnan1/MediaSocializer">
            Repo
          </a>
        </div>
      </header>
    </div>
  );
};

export default App;
