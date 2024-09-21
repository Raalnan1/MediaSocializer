// server.js

const express = require('express');
const youtubedl = require('youtube-dl-exec');
const path = require('path');
const cors = require('cors');
const fs = require('fs');

const app = express();
const port = 5000;

const formats = {
  best: 'best',
  audio: 'bestaudio',
  video: 'bestvideo',
  mp4: 'bestvideo[ext=mp4]+bestaudio[ext=m4a]/mp4',
  webm: 'bestvideo[ext=webm]+bestaudio[ext=webm]/webm'
};

app.use(express.json());
app.use(cors());

// Set the download directory to /public/downloads
const downloadDir = path.join(__dirname, 'public', 'downloads');

// Ensure the download directory exists
if (!fs.existsSync(downloadDir)) {
  fs.mkdirSync(downloadDir, { recursive: true });
}

app.post('/download', async (req, res) => {
  const { url, format } = req.body;
  const selectedFormat = formats[format] || formats.best; // Default to 'best' if format is not specified or invalid

  try {
    const output = await youtubedl(url, {
      output: path.join(downloadDir, '%(title)s.%(ext)s'), // Change path to /public/downloads
      format: selectedFormat
    });
    res.json({ path: output._filename });
  } catch (error) {
    res.status(500).send('Error downloading video');
  }
});

app.get('/downloads', (req, res) => {
  // Change the downloads directory to /public/downloads
  fs.readdir(downloadDir, (err, files) => {
    if (err) {
      return res.status(500).send('Unable to scan downloads directory');
    }

    const fileDetails = files.map(file => {
      const filePath = path.join(downloadDir, file);
      const stats = fs.statSync(filePath);
      return {
        name: file,
        size: stats.size,
        lastModified: stats.mtime
      };
    });

    res.json(fileDetails);
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
