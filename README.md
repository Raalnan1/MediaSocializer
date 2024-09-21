# Media Socializer

## Project Overview

**Media Socializer** is a web application that allows users to download and manage media from URLs (such as YouTube) while providing a simple interface to handle video and audio downloads. This project is built using React for the frontend, Express for the backend, and utilizes the `youtube-dl-exec` library for fetching and downloading media. Users can specify different formats such as `mp3` or `mp4` for their downloads and view available media files on a custom display page.

## Key Features

- **Download Media from URLs:** Easily download videos or audio by providing a URL.
- **Select Format:** Choose from various formats such as `mp3`, `mp4`, `audio`, and `video`.
- **Dynamic Format Detection:** Automatically fetch available formats based on the provided URL.
- **View Downloaded Media:** Display downloaded media files in a grid layout, with preview support for video formats.
- **Responsive Frontend & Backend:** Developed using React (frontend) and Express (backend) with API integration for download functionality.

## Tech Stack

- **Frontend:** React, TypeScript, Axios
- **Backend:** Express, Node.js
- **Media Handling:** youtube-dl-exec, body-parser
- **Development Tools:** React Scripts, TypeScript, Nodemon, Concurrently

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/media-socializer.git
    cd media-socializer
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Start the development server (both frontend and backend will run concurrently):

    ```bash
    npm start
    ```

   - The frontend will be available at `http://localhost:3000`.
   - The backend API will run at `http://localhost:5000`.

4. To build the project for production:

    ```bash
    npm run build
    ```

## Usage

1. **Download Media:**
   - Enter a YouTube (or similar) URL in the input field.
   - Select the format for download (e.g., `mp3`, `mp4`).
   - Click the "Download" button, and the media will be fetched and downloaded.

2. **View Media:**
   - Visit the `/media` page to see a list of all available media.
   - Supported video formats like `mp4` and `webm` will be playable directly in the browser.

## Scripts

- **`npm start`**: Runs both the frontend and backend concurrently.
- **`npm run start:frontend`**: Starts only the React frontend.
- **`npm run start:backend`**: Starts only the Express backend.
- **`npm run build`**: Builds the frontend for production.
- **`npm run test`**: Runs tests for the React app.

## Backend Endpoints

- **`POST /download`**: Accepts a URL and format, downloads the media to the server, and returns the file path.
- **`POST /formats`**: Accepts a URL, returns available download formats for that URL.
- **`GET /downloads`**: Fetches all downloaded media files on the server.

## Dependencies

### Main

- `react` & `react-dom`: Frontend framework for building the UI.
- `axios`: To handle HTTP requests.
- `express`: Backend framework to manage the server and API routes.
- `youtube-dl-exec`: Used for downloading and converting media from URLs.
- `typescript`: For static type checking across the project.
- `body-parser`: Middleware for parsing request bodies.

### Development

- `concurrently`: Allows running multiple npm scripts in parallel.
- `nodemon`: Automatically restarts the backend server on changes.

## Future Enhancements

- Add authentication and user-specific media libraries.
- Implement more media providers beyond YouTube.
- Add support for playlists and batch downloads.
- Include media transcoding capabilities directly on the server.

## License

This project is open source and available under the [MIT License](./LICENSE).

## Contributing

Feel free to open issues or submit pull requests to contribute to the project. We welcome any improvements or bug fixes!

---

Enjoy using **Media Socializer**!