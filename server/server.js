// module and variablse
const express = require("express");
const cors = require("cors");
const URL = require("./models/schema/url");
const app = express();

// middleware
app.use(express.json());
app.use(cors());

// routes
app.post("/cut", async (req, res) => {
  const { url } = req.body;
  const findUrl = await URL.findOne({ main_url: url });
  if (findUrl) {
    return res.json({ short: findUrl.short_url });
  }
  const newUrl = new URL({
    main_url: url,
    short_url: require("./models/schema/gen-id")(),
  });
  await newUrl.save();
  const findAgain = await URL.findOne({ main_url: url });
  res.json({ short: findAgain.short_url });
});

app.get("/:id", async (req, res) => {
  const { id } = req.params;
  const findUrl = await URL.findOne({ short_url: id });
  res.redirect(findUrl.main_url);
});

// set port
app.listen(5000);
