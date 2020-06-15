const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {
  JWT_SECRET,
} = require("../keys");
const reqLogin = require("../middleware/reqLogin");

router.post(
  "/SignIn",
  reqLogin,
  (req, res) => {
    const {
      email,
      password,
    } = req.body;
    if (!email || !password) {
      res.status(422).json({
        error:
          "email or password is invalid or both!",
      });
    }
    User.findOne({ email: email }).then(
      (savedUser) => {
        if (!savedUser) {
          return res.status(422).json({
            error:
              "user doesn't exist  !",
          });
        }
        bcrypt
          .compare(
            password,
            savedUser.password
          )
          .then((doMatch) => {
            if (doMatch) {
              const token = jwt.sign(
                { _id: savedUser._id },
                JWT_SECRET
              );
              res.json({ token });
            } else {
              return res
                .status(422)
                .json({
                  error:
                    "email or password doesn't match",
                });
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    );
  }
);
router.post("/Register", (req, res) => {
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
  } else {
    res.json({ message: "yess!" });
  }
  User.findOne({ email: email })
    .then((savedUser) => {
      if (savedUser) {
        return res.status(422).json({
          error: "user exist already !",
        });
      }
      bcrypt
        .hash(password, 14)
        .then((hashedPassword) => {
          const user = new User({
            name: name,
            email: email,
            password: hashedPassword,
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
              console.log(
                "this is the error",
                err
              );
            });
        });
    })
    .catch((err) => {
      console.log(err);
    });
});
module.exports = router;
// router.get(
//   "/protected",
//   reqLogin,
//   (req, res) => {
//     res.send("hello it is protected by JWT");
//   }
// );
