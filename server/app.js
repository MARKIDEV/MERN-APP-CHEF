const express = require("express");
const app = express();
const mongoose = require("mongoose");

const { MONGOURI } = require("./keys");
const PORT = 8000;

mongoose.connect(MONGOURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on(
  "connected",
  () => {
    console.log(
      "Mongoose default connection is open"
    );
  }
);
mongoose.connection.on(
  "error",
  (err) => {
    console.log(
      "error Mongoose connection ",
      err
    );
  }
);
require("./models/user");
require("./models/post");

app.use(express.json());

app.use(require("./routes/auth"));
app.use(require("./routes/postRoute"));

app.listen(PORT, () => {
  console.log(
    "server is running on port ",
    PORT
  );
});

// const CustomMiddelware = (
//   req,
//   res,
//   next
// ) => {
//   console.log(
//     "customMiddleWare executed!"
//   );
//   next();
// };
// app.use(CustomMiddelware);
// app.get("/", (req, res) => {
//   res.send("hello");
// });
