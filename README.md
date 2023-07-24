# Image Gallery

The Image Uploader App allows users to upload images to the server and view them in the application. It is built using React and Nodejs, and provides a user-friendly interface.

![image-gallery-app](https://github.com/Ajith101/image-gallery-mern/assets/41799543/3390d2bc-84ea-4aed-8654-52797203a969)
![image-gallery-app](https://github.com/Ajith101/image-gallery-mern/assets/41799543/54deaf55-ecb1-45ca-b3d1-b859a28539c0)
![image-gallery-app](https://github.com/Ajith101/image-gallery-mern/assets/41799543/3c14085e-d980-4c65-b2d3-8e7d3b4e1a0a)
![image-gallery-app](https://github.com/Ajith101/image-gallery-mern/assets/41799543/a79ab1c1-391a-4e02-8b56-e2bef781253f)

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
