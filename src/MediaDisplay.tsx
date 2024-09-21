// src/MediaDisplay.tsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './MediaDisplay.css';

interface MediaFile {
  name: string;
  size: number;
  lastModified: string;
}

const MediaDisplay: React.FC = () => {
  const [mediaFiles, setMediaFiles] = useState<MediaFile[]>([]);  // Use MediaFile array
  const [errorMessage, setErrorMessage] = useState<string>('');

  // Fetch files from the API
  useEffect(() => {
    const fetchMediaFiles = async () => {
      try {
        const response = await axios.get<MediaFile[]>('http://localhost:5000/downloads');
        if (response.data) {
          const sortedFiles = response.data.sort((a, b) => new Date(b.lastModified).getTime() - new Date(a.lastModified).getTime());
          setMediaFiles(sortedFiles);
        } else {
          setErrorMessage('No media files found.');
        }
      } catch (error) {
        setErrorMessage('Error fetching media files.');
        console.error(error);
      }
    };
  
    fetchMediaFiles();
  }, []);
  

  return (
    <div>
      <h2>Media Files</h2>
      {errorMessage && <p>{errorMessage}</p>}
      
      {/* Check if mediaFiles is empty */}
      {mediaFiles.length === 0 && !errorMessage && <p>No media files available.</p>}

      <div className="media-grid">
        {mediaFiles.map((file, index) => {
          const fileType = file.name.split('.').pop(); // Get file extension

          return (
            <div key={index} className="media-item">
              <p>{file.name}</p>
              <p>{`http://localhost:5000/media/${file.name}`}</p>
              {fileType === 'mp4' || fileType === 'webm' ? (
                <video controls width="500">
                  <source src={`http://localhost:3000/downloads/${file.name}`} type={`video/${fileType}`} />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <p>Unsupported media format: {fileType}</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MediaDisplay;
