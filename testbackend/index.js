const express = require("express");

const app = express();

const port = 8000;

const admin = (req, res) => {
    return res.send("You are on Admin Page...");
}

const isAdmin = (req, res, next) => {
    console.log("You are calling is Adin");
    next();
}

app.get('/', (req, res) => {
    return res.send("Home Page");
});

app.get('/login', (req, res) => {
    return res.send("You are on logIn Page...");
});

app.get('/admin', isAdmin, admin);

app.listen(port, () => {
    console.log("Port is up and running");
});