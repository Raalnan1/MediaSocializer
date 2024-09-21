# Server.js for Media Socializer

This `server.js` file is the backend server for the **Media Socializer** project, built using **Express.js**. The server allows users to download media from URLs (such as YouTube) using the `youtube-dl-exec` library, and provides endpoints to list the downloaded media files. The backend handles both media download and media file management functionality.

## Features

1. **Download Media Files**:  
   Allows users to download media (video or audio) by providing a URL and specifying the format (e.g., mp3, mp4).
   
2. **Available Formats**:  
   Supports various media formats like `mp3`, `mp4`, `best`, `audio`, and `video`. Users can specify the format they wish to download, and the server uses these formats to fetch the appropriate media file.
   
3. **List Downloaded Files**:  
   Users can fetch a list of all downloaded media files, including metadata such as file size and the date it was last modified.

4. **Cross-Origin Support**:  
   Enables **CORS** (Cross-Origin Resource Sharing) to allow frontend requests from different domains.

## How It Works

### Endpoints

1. **POST /download**  
   Downloads media from a provided URL in a specified format.

   - **Request Body**:  
     ```json
     {
       "url": "YouTube or media URL",
       "format": "Format (e.g., mp3, mp4, audio, video)"
     }
     ```
   
   - **Response**:  
     Returns the file path of the downloaded media.
     ```json
     {
       "path": "/public/downloads/filename.ext"
     }
     ```

2. **GET /downloads**  
   Returns a list of downloaded media files along with metadata (size and last modified date).

   - **Response**:  
     ```json
     [
       {
         "name": "filename.ext",
         "size": 123456,
         "lastModified": "2024-09-20T12:34:56Z"
       },
       ...
     ]
     ```

### Media Download Formats

The following formats are supported:
- **best**: Downloads the best available media quality.
- **audio**: Downloads the best available audio stream only.
- **video**: Downloads the best available video stream only.
- **mp4**: Downloads in MP4 format (both video and audio combined).
- **webm**: Downloads in WebM format (both video and audio combined).

### Download Directory

Downloaded files are stored in the `public/downloads` directory. If the directory doesn't exist, it is automatically created when the server starts.

### Handling Media Requests

- The server uses `youtube-dl-exec` to fetch media from URLs.
- Media files are saved using the following naming format: `%(title)s.%(ext)s`, which means the title of the media along with the file extension (e.g., `.mp4`, `.mp3`).
- File metadata such as size and last modified date is returned in the `/downloads` endpoint response.

## Setup and Usage

1. **Install Dependencies**  
   Make sure to install the required dependencies for the server:

   ```bash
   npm install express youtube-dl-exec cors fs
   ```

2. **Start the Server**  
   To start the backend server, run:

   ```bash
   node server.js
   ```

   The server will run on `http://localhost:5000`.

3. **API Usage**  
   - To download a media file, make a `POST` request to `/download` with the URL and desired format.
   - To list downloaded media, make a `GET` request to `/downloads`.

## Error Handling

- If a download fails, the server returns a `500 Internal Server Error` response with an error message.
- If there's an issue scanning the downloads directory, an appropriate error message will be sent in the response.

## Future Improvements

- Add support for more media platforms beyond YouTube.
- Implement a retry mechanism in case downloads fail.
- Enable pagination for large media libraries.
- Add user authentication to secure file downloads.

## License

This project is open-source and available under the [MIT License](./LICENSE).

---

This file is the core part of the backend for **Media Socializer**, which enables seamless video/audio downloads and media management.