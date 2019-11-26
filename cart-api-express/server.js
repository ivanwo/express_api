const express = require("express");
const cors = require("cors");
const cartRoutes = require("./router");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", cartRoutes);

const port = 3001;
app.listen(port, _ => {
  console.log(`listening on port ${port}`);
});
