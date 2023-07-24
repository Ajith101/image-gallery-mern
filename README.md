# Image Gallery MERN App Readme

The Image Uploader App allows users to upload images to the server and view them in the application. It is built using React and Nodejs, and provides a user-friendly interface.

## Features

- Image upload functionality with preview.
- Image upload progressbar.
- Image details view window.
- Responsive design for a seamless experience across devices.

## Installation

To run the Image Gallery App locally, follow these steps:

1. **Clone the repository:**

   ```
   git clone https://github.com/Ajith101/image-gallery-mern-app
   ```

2. **Install dependencies:**

   ```
   cd client
   npm install
   cd server
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the client folder of the project and provide the following configuration:

   ```
   VITE_BASE_URL = http://yourhost-name
   ```

4. **Run the development server:**

   ```
   npm run dev
   ```

   This command will concurrently start the server and the React client.

## Technologies Used

- Front-end:

  - React
  - Axios
  - Tailwind Css

- Back-end:
  - Node.js
  - Express.js
  - Cors
  - Multer (for handling image uploads)
