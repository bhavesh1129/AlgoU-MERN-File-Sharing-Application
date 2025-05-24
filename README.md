# AlgoU File Sharing Application

A modern MERN stack application for secure file upload and sharing. Users can upload files and get shareable download links with download tracking.

## Features

- 📁 **File Upload**: Upload files up to 10MB
- 🔗 **Share Links**: Get instant shareable download links
- 📊 **Download Tracking**: Track how many times files are downloaded
- 🎨 **Modern UI**: Clean and responsive user interface
- 🔒 **Secure**: File validation and error handling

## Tech Stack

**Frontend:**
- React 18
- Axios for API calls
- CSS3 for styling

**Backend:**
- Node.js with Express
- MongoDB with Mongoose
- Multer for file uploads
- CORS enabled

## Prerequisites

Before running this application, make sure you have:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (running locally or connection to MongoDB Atlas)
- npm or yarn package manager

## Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/your-username/AlgoU-MERN-File-Sharing-Application.git
cd AlgoU-MERN-File-Sharing-Application
```

### 2. Backend Setup
```bash
# Navigate to server directory
cd server

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Edit .env file with your MongoDB connection string
# MONGODB_URL=mongodb://localhost:27017/file-sharing
# PORT=8000
```

### 3. Frontend Setup
```bash
# Navigate to client directory (from root)
cd client

# Install dependencies
npm install
```

### 4. Create uploads directory
```bash
# From server directory
mkdir uploads
```

## Running the Application

### Start the Backend Server
```bash
# From server directory
cd server
npm start
```
The server will start on `http://localhost:8000`

### Start the Frontend Application
```bash
# From client directory (in a new terminal)
cd client
npm start
```
The React app will start on `http://localhost:3000`

## Usage

1. **Upload a File**: Click the "Upload" button and select a file (max 10MB)
2. **Get Share Link**: After upload, you'll receive a shareable download link
3. **Share & Download**: Share the link with others for file downloads
4. **Track Downloads**: Each download is automatically tracked in the database

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/upload` | Upload a file |
| GET | `/file/:fileId` | Download a file by ID |

## Project Structure

```
AlgoU-MERN-File-Sharing-Application/
├── client/                 # React frontend
│   ├── src/
│   │   ├── service/       # API service functions
│   │   ├── App.js         # Main React component
│   │   └── App.css        # Styling
│   └── package.json
├── server/                # Node.js backend
│   ├── controller/        # Route controllers
│   ├── database/         # Database connection
│   ├── models/           # MongoDB schemas
│   ├── routes/           # API routes
│   ├── utils/            # Utility functions
│   ├── uploads/          # File storage directory
│   ├── .env.example      # Environment variables template
│   └── package.json
└── README.md
```

## Dependencies

### Backend Dependencies
- express: Web framework for Node.js
- mongoose: MongoDB object modeling
- multer: File upload middleware
- cors: Cross-origin resource sharing
- dotenv: Environment variable management

### Frontend Dependencies
- react: UI library
- axios: HTTP client for API calls

## Environment Variables

Create a `.env` file in the server directory with:

```env
MONGODB_URL=mongodb://localhost:27017/file-sharing
PORT=8000
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you encounter any issues or have questions, please create an issue in the GitHub repository.