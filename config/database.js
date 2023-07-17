const mongoose = require("mongoose");

// for Deprecation error handling
mongoose.set("strictQuery", false);

exports.connectDatabase = () => {
  mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to MONGO DB successfully");
    })
    .catch((err) => {
      console.log(err);
    });
};


