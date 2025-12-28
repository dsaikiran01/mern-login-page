const mongoose = require("mongoose");
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/login_test';

const connectDB = async () => {
  mongoose.connect(MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));
};

module.exports = connectDB;
