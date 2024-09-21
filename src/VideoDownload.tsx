import React, { useState } from 'react';
import axios from 'axios';

const formatDescriptions: { [key: string]: string } = {
  best: 'Download the best available format.',
  mp4: 'Download in MP4 video format.',
  mp3: 'Download as an MP3 audio file.',
  audio: 'Download only the audio (best available format).',
  video: 'Download only the video (best available format).',
};

const VideoDownload: React.FC = () => {
  const [url, setUrl] = useState('');
  const [format, setFormat] = useState('mp3'); // Preselect 'mp3' as the default format
  const [formats, setFormats] = useState<string[]>(['best', 'mp4', 'mp3', 'audio', 'video']); // Set default formats here
  const [downloading, setDownloading] = useState(false);
  const [downloadPath, setDownloadPath] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleDownload = async () => {
    if (!url) return;
    setDownloading(true);
    try {
      const response = await axios.post('http://localhost:5000/download', { url, format });
      setDownloadPath(response.data.path);

      // Refresh the page after successful download
      window.location.reload(); // This will refresh the entire page
    } catch (error) {
      console.error('Error downloading video:', error);
      setErrorMessage(JSON.stringify(error));
    } finally {
      setDownloading(false);
    }
  };

  const fetchFormats = async (videoUrl: string) => {
    try {
      const response = await axios.post('http://localhost:5000/formats', { url: videoUrl });
      const fetchedFormats = response.data.formats;
      setFormats(fetchedFormats);

      // If 'mp3' is available in the fetched formats, keep it as the selected format.
      // Otherwise, select the first available format from the fetched list.
      if (fetchedFormats.includes('mp3')) {
        setFormat('mp3');
      } else {
        setFormat(fetchedFormats[0]);
      }
    } catch (error) {
      console.error('Error fetching formats:', error);
      setErrorMessage('Failed to load formats, showing default options');
      setFormat('mp3'); // Set 'mp3' as the default format
    }
  };

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newUrl = e.target.value;
    setUrl(newUrl);
    setErrorMessage(''); // Reset the error message when the URL changes
    fetchFormats(newUrl); // Fetch formats for the new URL
  };

  return (
    <div>
      <h2>Video Download</h2>
      <input
        type="text"
        value={url}
        onChange={handleUrlChange}
        onFocus={(e) => e.target.select()} // Automatically selects all text on focus
        placeholder="Enter YouTube URL"
      />
      <select title="Select download format" value={format} onChange={(e) => setFormat(e.target.value)}>
        {formats.map((f) => (
          <option key={f} value={f} title={formatDescriptions[f] || 'No description available'}>
            {f}
          </option>
        ))}
      </select>
      <button onClick={handleDownload} disabled={downloading}>
        {downloading ? 'Downloading...' : 'Download'}
      </button>
      {downloadPath && <p>Video downloaded to: {downloadPath}</p>}
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default VideoDownload;
