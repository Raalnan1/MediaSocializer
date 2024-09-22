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
          <h3>Links</h3>
          <ul>

            <li>
              <a
                target="Repo"
                href="https://github.com/Raalnan1/MediaSocializer"
              >
                Repo
              </a>
            </li>
            <li>
              <a
                target="Repo"
                href="https://github.com/Raalnan1/MediaSocializer/blob/main/README.md"
              >
                ReadMe
              </a>
            </li>
            <li>
              <a
                target="Repo"
                href="https://github.com/Raalnan1/MediaSocializer/blob/main/server.md"
              >
                Server
              </a>
            </li>

            <li>
              <a
                target="Repo"
                href="https://github.com/Raalnan1/MediaSocializer/blob/main/src/MediaDisplay.md"
              >
                Media Display Component
              </a>
            </li>

            <li>
              <a
                target="Repo"
                href="https://github.com/Raalnan1/MediaSocializer/blob/main/src/VideoDownload.md"
              >
                Video Download Component
              </a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default App;
