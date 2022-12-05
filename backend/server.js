const path = require("path");
const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const PORT = process.env.PORT || 5000;

// Connect to database
// connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "../frontend/build")));

// Routes
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/tickets", require("./routes/ticketRoutes"));

// Serve Frontend
if (process.env.NODE_ENV === "production") {
  // Set build folder as static
  // FIX: below code fixes app crashing on refresh in deployment
  //   app.get("*", (_, res) => {
  //     res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
  //   });
  // } else {
  //   app.get("/", (req, res) => {
  //     res.status(200).json({ message: "Welcome to the Support Desk API" });
  //   });
}

app.use(errorHandler);

// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
//new comment
//Connect To Database
connectDB().then(() => {
  //Server Running
  app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}, you better catch it!`);
  });
});
