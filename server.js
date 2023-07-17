const { connectDatabase } = require("./config/database");
const app = require("./app");

app.listen(process.env.PORT, () => {
  console.log(`Server running at http://localhost:${process.env.PORT}`);
  connectDatabase();
});

