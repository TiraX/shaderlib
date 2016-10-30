var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/',
function(req, res, next) {
  res.render('index', {
    title: 'ShaderLib'
  });
});

router.post('/reg',
function(req, res) {
  //检验用户两次输入的口令是否一致
  var email = req.body.email;
  var uname = req.body.uname;
  var pass = req.body.pass;
  var pass1 = req.body.pass1;
  console.log('email = ' + email);
  console.log('uname = ' + uname);
  console.log('pass = ' + pass);
  console.log('pass1 = ' + pass1);
  if (pass != pass1) {
    req.flash('error', '两次输入的口令不一致');
    return; // res.redirect('/reg');   
  }
  //生成口令的散列值
  console.log('md5 ... ');
  var crypto = require('crypto');
  var md5 = crypto.createHash('md5');
  console.log('md5 ... ' + md5);
  var password = md5.update(req.body.pass).digest('base64');
  console.log('crypto = ' + password);
  var User = require('../models/user');
  var newUser = new User({
    email: req.body.email,
    name: req.body.uname,
    password: password
  });
  
  console.log('user info 1 ==== ' + newUser);
  //检查用户名是否已经存在
  User.get(newUser.email,
  function(err, user) {
    if (user) err = 'Username already exists.';
    if (err) {
      req.flash('error', err);
      return res.redirect('/reg');
    }
    //如果不存在则新增用户
    newUser.save(function(err) {
      if (err) {
        req.flash('error', err);
        return res.redirect('/reg');
      }
      req.session.user = newUser;
      req.flash('success', '注册成功');
      res.redirect('/');
    });
  });
});

module.exports = router;