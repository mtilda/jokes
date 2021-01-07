const bcrypt = require('bcrypt');
const express = require('express');
const user = express.Router();
const User = require('../models/user.js');

// show sign up form
user.get('/new', (req, res) => {
  res.render('user/new.ejs', { currentUser: req.session.currentUser });
});

// create new user
user.post('/', (req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
  User.create(req.body, (error, createdUser) => {
    if (error) res.error(error);
    else {
      console.log('user is created', createdUser);
      res.redirect('/');
    }
  });
});

module.exports = user;
