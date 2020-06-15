const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const reqLogin = require("../middleware/reqLogin");
const Post = mongoose.model("Post");

router.get("/Home", (req, res) => {
  Post.find()
    .populate("postedBy", "_id, name")
    .then((posts) => {
      res.json({ posts });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get(
  "/MyProfile",
  reqLogin,
  (req, res) => {
    Post.find({
      postedBy: req.user._id,
    })
      .populate(
        "postedBy",
        "_id , name"
      )
      .then((myownposts) => {
        res.json({ myownposts });
      });
  }
);

router.post(
  "/CreatePost",
  reqLogin,
  (req, res) => {
    const { title, body } = req.body;
    if (!title || !body) {
      return res.status(422).json({
        error:
          "Complete required fields please!",
      });
    }
    const post = new Post({
      title,
      body,
      postedBy: req.user,
    });
    post
      .save()

      .then((result) => {
        res.json({ post: result });
      })
      .catch((err) => {
        res.send(err);
      });
  }
);
module.exports = router;
