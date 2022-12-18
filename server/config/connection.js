const mongoose = require("mongoose");

// ==========================================================
// ==========================================================
// Mongoose Functionality
// ==========================================================
// ==========================================================
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI ||'mongodb://localhost:27017/', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    console.log(`Error: ${err.message}`);
    process.exit();
  }
};

mongoose.set('strictQuery', true);

module.exports = connectDB;
