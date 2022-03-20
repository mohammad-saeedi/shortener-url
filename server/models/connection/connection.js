const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/shortener-url");

module.exports = mongoose;