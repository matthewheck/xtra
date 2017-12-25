const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const { User, Post } = require('../models')

router.post('/user/create', function(req, res){
  var newUser = User({
    _id: new mongoose.Types.ObjectId(),
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
    name: {
      first: req.body.first,
      last: req.body.last
    },
    bio: req.body.bio
  })
  newUser.save(function(err){
    if (err) throw err
  })
})

router.post('/post/create', function(req,res){
  User.find({ username: req.body.username }, function(err, user) {
    if (err) throw err
    var newPost = Post({
      _id: new mongoose.Types.ObjectId(),
      title: req.body.title,
      subtitle: req.body.subtitle,
      body: req.body.body,
      author: {
        id: req.body.author,
        username: req.body.username
      }
    })
    newPost.save(function(err){
      if (err) throw err
    })
  })
})

module.exports = router
