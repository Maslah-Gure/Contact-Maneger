const port = process.env.PORT || 5000;
const express = require("express");
const app = express();
app.use(express.static(__dirname + "/public"));
app.get("/", (req, res) => {
  res.render("index");
});
app.listen(port, () => console.log(`Listning On port ${port}`));
