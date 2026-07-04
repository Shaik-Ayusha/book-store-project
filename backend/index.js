const express = require("express");
const app = express();
const cors = require("cors");

require('dotenv').config();
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;

// middleware
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:5173', "https://book-store-project-git-main-shaikayusha112-2846s-projects.vercel.app/"],
    credentials: true
}))

// routes
const bookRoutes = require('./src/books/book.route');
const orderRoutes = require("./src/orders/order.route")
const userRoutes =  require("./src/users/user.route")
const adminRoutes = require("./src/stats/admin.stats")

app.use("/api/books", bookRoutes)
app.use("/api/orders", orderRoutes)
app.use("/api/auth", userRoutes)
app.use("/api/admin", adminRoutes)

async function connectWithRetry(retries = 5, delayMs = 2000) {
  const url = process.env.DB_URL;
  if (!url) {
    throw new Error('DB_URL is not set in backend/.env');
  }

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      console.log(`Attempt ${attempt} to connect to MongoDB...`);
      await mongoose.connect(url, { serverSelectionTimeoutMS: 5000 });
      console.log('Mongodb connected successfully!');
      return;
    } catch (err) {
      console.error(`Mongo connect attempt ${attempt} failed: ${err.message}`);
      if (attempt === retries) throw err;
      const wait = delayMs * attempt;
      console.log(`Waiting ${wait}ms before retrying...`);
      await new Promise(r => setTimeout(r, wait));
    }
  }
}

connectWithRetry().then(() => {
  app.use("/", (req, res) => {
    res.send("Book Store Server is running!");
  });

  const server = app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });

  server.on('error', (err) => {
    if (err && err.code === 'EADDRINUSE') {
      console.error(`Port ${port} is already in use. Stop the process using that port or set a different PORT.`);
      console.error('On Windows: run `netstat -ano | findstr :5000` and then `taskkill /PID <pid> /F`.');
      process.exit(1);
    }
    console.error('Server error:');
    console.error(err);
    process.exit(1);
  });
}).catch(err => {
  console.error('Failed to connect to MongoDB after retries:');
  console.error(err);
  process.exit(1);
});
