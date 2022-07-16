const app = require("./app");
const connect = require("./config/db");
require("dotenv").config();
const port = process.env.PORT || 5555;
app.listen(port, async () => {
  try {
    await connect();
    console.log("running on 5555");
  } catch (error) {
    console.log("error", error);
  }
});
