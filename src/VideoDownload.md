# VideoDownload Component

This React component, `VideoDownload`, is a user interface that allows users to download video or audio content from a YouTube URL by selecting different formats. It interacts with a backend API to process the download request and displays feedback such as errors and the download path.

## Features

1. **URL Input**:  
   Users can input a YouTube URL from which they wish to download media.
   
2. **Format Selection**:  
   Users can select the desired format for downloading. Available formats include:
   - `best`: Best available format (combining video and audio).
   - `mp4`: MP4 video format.
   - `mp3`: MP3 audio format.
   - `audio`: Best available audio-only format.
   - `video`: Best available video-only format.

   Each option in the dropdown has a title attribute that provides a description of the format.

3. **Download Button**:  
   Once a URL is entered and a format is selected, the user can initiate the download by clicking the "Download" button. The button will be disabled while the download is in progress to prevent multiple submissions.

4. **Dynamic Format Fetching**:  
   When a valid URL is entered, the component fetches the available formats from the backend server dynamically and updates the format selection dropdown.

5. **Error Handling**:  
   If there is any issue during the download process, an error message will be displayed to the user.

6. **Download Path Display**:  
   After a successful download, the component will display the path where the downloaded file is saved.

## How It Works

### State Management

- **url**: Stores the YouTube URL entered by the user.
- **format**: Stores the currently selected download format (default is `mp3`).
- **formats**: Stores the list of available formats for the video, either dynamically fetched or default.
- **downloading**: Boolean flag to indicate whether a download is in progress.
- **downloadPath**: Stores the path to the downloaded file after a successful download.
- **errorMessage**: Stores any error message to be displayed in case of issues during the download process.

### API Interactions

1. **POST `/download`**:  
   When the user clicks "Download", the component sends a `POST` request to the backend API to initiate the download. It includes the provided URL and selected format.

2. **POST `/formats`**:  
   When the user enters a URL, the component sends a `POST` request to fetch the available download formats for the media. The fetched formats are used to update the format dropdown.

### Download Process

- The user inputs a YouTube URL and selects a format from the dropdown.
- Upon clicking the "Download" button, the request is sent to the backend.
- The download button becomes disabled while the file is downloading.
- Once the download is complete, the component displays the file path to the user.
- In case of an error, a message is displayed below the download button.

## How to Use

1. **Install Dependencies**  
   Make sure you have `axios` installed to make HTTP requests:

   ```bash
   npm install axios
   ```

2. **Backend Requirements**  
   This component requires a backend server with two endpoints:
   - **POST `/download`**: Processes download requests.
   - **POST `/formats`**: Returns available formats for a given URL.

3. **Run the Frontend**  
   After ensuring that your backend is up and running, you can use this component in your React project. Run the frontend using:

   ```bash
   npm start
   ```

4. **Input a YouTube URL** and select the desired download format to download the media file.

## Future Enhancements

- Add progress tracking for file downloads.
- Support for additional video platforms beyond YouTube.
- Improved error handling for more specific feedback.

## License

This component is open-source and available under the [MIT License](./LICENSE).