# Image Gallery

The Image Uploader App allows users to upload images to the server and view them in the application. It is built using React and Nodejs, and provides a user-friendly interface.

![image-gallery-app](https://github.com/Ajith101/image-gallery-mern/assets/41799543/0f306f19-0b05-4bd0-851d-9155380f700c)
![image-gallery-app](https://github.com/Ajith101/image-gallery-mern/assets/41799543/4516caeb-e01b-4b1d-b163-ada784f5cc08)
![image-gallery-app](https://github.com/Ajith101/image-gallery-mern/assets/41799543/0d4e8b54-4518-4b87-877f-6c2cf0dab88e)
![image-gallery-app](https://github.com/Ajith101/image-gallery-mern/assets/41799543/13077bc6-64a6-4f08-8754-efd7253ee7da)

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
