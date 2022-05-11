require('dotenv').config()
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const cors = require("cors");
const authRoutes = require("./routes/auth");
const app = express();
const port = 8000;

//Database Connectivty

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}).then(() => {
    console.log("DB CONNECTED");
});

//Routes
app.use("/api", authRoutes);
//MiddleWares

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//Application Started

app.listen(port, () => {
    console.log(`app is running on port number  ${port}`);
});