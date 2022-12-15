const path = require("path");
const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve Frontend
app.use(express.static(path.join(__dirname, "../frontend/build")));

// Routes
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/tickets", require("./routes/ticketRoutes"));

app.use(errorHandler);

//Connect To Database before listening port
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}, you better catch it!`);
  });
});
