const express = require('express');
const app = express();
const routes = require('./Routes/index'); // Import the routes
const mongoose = require('mongoose');
const cors = require('cors');


app.use(cors({
  origin: '*'  || 'http://localhost:5173',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

//  Required to parse JSON request bodies
app.use(express.json());
//  Required if you're accepting URL-encoded form dat
// app.use(express.urlencoded({ extended: true }));
app.use('/api', routes); // Use the routes

// const uri = "mongodb+srv://aghnafaran:dde1JXf7whrt691D@cluster0.cewgt7u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const uri = "mongodb://localhost:27017/booksApp"; // Local MongoDB URI
const PORT = 8001;

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Books Database connected!"))
  .catch(err => console.error('MongoDB connection error:', err));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
