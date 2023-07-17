const express = require("express");

const {
  createShortUrl,
  getAllUrls,
  openFullUrl,
} = require("../controllers/shorturl");

const router = express.Router();

router.route("/shortUrls").post(createShortUrl);

router.route("/").get(getAllUrls);

router.route("/:shortUrl").get(openFullUrl);

module.exports = router;
