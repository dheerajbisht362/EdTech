const express = require("express");

const router = express.Router();

router.get("/", async (req, res) => {
  res.render("ejs/home");
});

module.exports = router;
