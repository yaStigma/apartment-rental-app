# 🏠 ApartlySpace — Apartment Management Panel

**ApartlySpace** is an admin panel for managing a rental apartment database.  
This project was built as part of a test task using the **MERN stack**: React + Redux Toolkit on the frontend, and Express.js + MongoDB on the backend.

## 🚀 Core Features

### 📝 Apartments

- Add a new apartment with the following details:

  - Title (up to 90 characters)
  - Description (up to 335 characters)
  - Price
  - Number of rooms (1, 2, or 3)
  - Apartment photos

- Edit apartment information
- Delete an apartment from the system
- View a list of all apartments in the database

### 🔍 Filters

- By price (min / max)
- By number of rooms
- By price order: ascending / descending

## 💻 Technologies Used

### Frontend

- React
- Redux Toolkit for state management
- React Hook Form + Yup for form validation
- UI: TailwindCSS + DaisyUI
- Axios for HTTP requests

### Backend

- Node.js + Express.js
- MongoDB
- Multer for file uploads (optional)
- Cloudinary for image storage (optional)

## 🧩 Project Highlights

- Reusable form for adding and editing apartments
- Image upload with preview (multiple photos supported)
- API requests via Redux thunks
- Smart filtering with value validation
- Clean and responsive UI with modals

## 🛠️ Getting Started

### 🔧 Clone the repository

```bash
git clone https://github.com/yaStigma/apartment-rental-app.git
cd apartment-rental-app
```

## 📦 Install dependencies

### Frontend

```bash
cd client
npm install
```

### Backend

```bash
cd server
npm install
```

## 🗄️ Set up environment variables

### Backend (server/.env)

```bash
# Server Port
PORT=3000

# MongoDB Configuration
MONGODB_USER=your_mongodb_user
MONGODB_PASSWORD=your_mongodb_password
MONGODB_URL=cluster0.mongodb.net
MONGODB_DB=apartments-db

# Cloudinary Configuration (optional image upload)
CLOUD_NAME=your_cloudinary_cloud_name
API_KEY=your_cloudinary_api_key
API_SECRET=your_cloudinary_api_secret

# Enable or disable Cloudinary image upload
# Set to true to enable, false to disable
ENABLE_CLOUDINARY=true
```

## ▶️ Run the project

### Backend

```bash
cd server
npm run dev
```

### Frontend

```bash
cd client
npm run dev
```

The app will be available at:
http://localhost:5173

### 🌍 Deployment

Frontend: Vercel: https://apartment-rental-app-green.vercel.app/

Backend + MongoDB: https://apartment-rental-app-qu5f.onrender.com

## 🗃️ Project Structure

```bash
apartment-rental-app/
│
├── client/               # React frontend
│   ├── public/
│   ├── src/
│   |    ├── components/
│   |    ├── hooks/
│   |    ├── pages/
│   |    ├── redux/
│   |    ├── types/
│   |    ├── App.tsx
│   |    ├── main.tsx
│   |    ├── index.css
│   |    └── ...
│   └── ...
├── server/               # Express.js backend
│   ├── src/
│   |    ├── constants/
│   |    ├── controllers/
│   |    ├── db/
│   |    |   ├── models/
│   |    ├── middlewares/
│   |    ├── routes/
│   |    ├── services/
│   |    ├── utils/
│   |    ├── validation/
│   |    ├── index.js
│   |    ├── server.js
│   ├── temp/
│   └── ...
├── README.md
└── .gitignore
```

## 👩‍💻 Author

- Author: Yenakiieva Tanya | Junior Fullstack Developer |
- Contact Information: email: yastigma@gmail.com, telegram: yastigma.
- GitHub: https://github.com/yaStigma
