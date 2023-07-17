const Shorturl = require("../model/shortURL");

exports.createShortUrl = async (req, res) => {
  await Shorturl.create({ full: req.body.fullUrl });
  res.redirect("/");
};

exports.getAllUrls = async (req, res) => {
  const shortUrls = await Shorturl.find();
  res.render("index", { shortUrls: shortUrls });
};

exports.openFullUrl = async (req, res) => {
  const shortUrl = await Shorturl.findOne({ short: req.params.shortUrl });
  if (shortUrl == null) return res.sendStatus(404);

  shortUrl.clicks++;
  shortUrl.save();

  res.redirect(shortUrl.full);
};
