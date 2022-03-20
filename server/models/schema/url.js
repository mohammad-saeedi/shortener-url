const { model, Schema } = require("../connection/connection");

const urlSchema = new Schema({
  main_url: {
    type: String,
    required: true,
  },
  short_url: {
    type: String,
    required: true
  },
  date: {
    type: String,
    default: new Date().toLocaleDateString("en-us"),
  },
});

const URL = model("url", urlSchema);

module.exports = URL;
