const User = require("../models/user");


exports.signup = (req, res) => {

    res.json({
        message: "signup Route working!",
    });
}

exports.signout = (req, res) => {
    res.json({
        message: "User Signed out!",
    })
};
