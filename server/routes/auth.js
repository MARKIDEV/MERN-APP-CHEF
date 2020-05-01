const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");

router.get("/", (req, res) => {
  res.send("hello");
});
router.post("/signup", (req, res) => {
  const {
    name,
    email,
    password,
  } = req.body;
  if (!email || !password || !name) {
    res.status(422).json({
      error:
        "please add all the fields",
    });
  }
  User.findOne({ email: email })
    .then((savedUser) => {
      if (savedUser) {
        return res.status(422).json({
          error: "user exist already !",
        });
      }
      const user = new User({
        name,
        email,
        password,
      });
      user
        .save()
        .then((user) => {
          res.json({
            message:
              "saved with success!",
          });
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
});
module.exports = router;
