# MediaDisplay Component

The `MediaDisplay` component in React allows users to view a list of media files that have been downloaded from a server. It fetches the media files via an API, displays them in a grid format, and allows for video playback if the file is in a supported format (MP4 or WebM).

## Features

1. **Fetch Media Files**  
   - The component uses `axios` to make a GET request to the `/downloads` API endpoint and fetches a list of available media files.
   - The files are sorted by their `lastModified` date in descending order, ensuring that the most recent file is shown first.

2. **Error Handling**  
   - If there are no media files or an error occurs while fetching, an error message is displayed to the user.

3. **Dynamic Media Grid**  
   - The component displays media files in a grid layout. For video files (MP4 and WebM), it provides an inline video player with controls.
   - If the media format is unsupported (not MP4 or WebM), a message is displayed indicating that the format is not supported.

4. **Responsive Layout**  
   - The media items are rendered in a CSS grid layout, which can be styled to be responsive depending on the requirements of the application.

## How It Works

### State Management

- **mediaFiles**: Stores an array of `MediaFile` objects that represent the files fetched from the API.
- **errorMessage**: Stores any error message to be displayed in case of issues during fetching media files.

### API Interaction

1. **GET `/downloads`**:  
   On initial render, the component makes an HTTP GET request to fetch a list of media files. Each media file has:
   - `name`: The filename.
   - `size`: The file size.
   - `lastModified`: The timestamp of when the file was last modified.

2. **Sorting Files**:  
   Once the media files are fetched, they are sorted by the `lastModified` field, ensuring the most recent files appear first in the list.

### Displaying Media

- The media grid renders each file based on its file type:
  - **Video files (MP4, WebM)**: A video player is displayed with controls for the user to play the media.
  - **Unsupported file formats**: A message is shown that the media format is unsupported.

## How to Use

1. **Backend Requirements**  
   Ensure you have a backend API serving media files. The API should expose the following endpoint:
   - **GET `/downloads`**: Returns a list of media files in JSON format with attributes: `name`, `size`, and `lastModified`.

2. **Run the Frontend**  
   This component can be integrated into any React application. Install the necessary dependencies:

   ```bash
   npm install axios
   ```

   Then, run the React application:

   ```bash
   npm start
   ```

3. **Media Files**  
   The media files will be displayed in a grid. Supported video formats (MP4 and WebM) will show a video player, and unsupported formats will display a message.

## CSS Styling

- The component imports a CSS file (`MediaDisplay.css`) for styling. You can customize the grid and media item styles in this file based on your design needs.
  
  Example layout:

  ```css
  .media-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 16px;
  }

  .media-item {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 8px;
    text-align: center;
  }
  ```

## Future Enhancements

- **Pagination**: Add pagination or infinite scrolling to load more files dynamically.
- **File Previews**: Add preview support for non-video formats (e.g., images, audio files).
- **Search/Filter**: Implement a search or filter feature to quickly find specific media files.

## License

This project is open-source and available under the [MIT License](./LICENSE).