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
  //if (pass != pass1) {
  //  req.flash('error', '两次输入的口令不一致');
  //  return; // res.redirect('/reg');   
  //}
  //生成口令的散列值
  var crypto = require('crypto');
  var md5 = crypto.createHash('md5');
  var password = md5.update(req.body.pass).digest('base64');
  var User = require('../models/user');
  var newUser = new User({
    email: req.body.email,
    name: req.body.uname,
    password: password
  });
  
  //检查用户名是否已经存在
  User.get(newUser.email,
  function(err, user) {
    if (user) {
	  err = 'Username already exists.';
	}
    if (err) {
	  var info = {
	    error: err,
		info: null
	  };
	  console.log('error : ' + err);
	  //req.flash('error', err);
	  return res.send(info);
    }
    //如果不存在则新增用户
    newUser.save(function(err) {
	  var info = {
	    error: null,
		info: null
	  };
	  if (err) {
	    info.error = err;
	  } else {
	    info.info = 'register success';
	  }
      req.session.user = newUser;
	  res.send(info);
    });
  });
});

router.post('/login', function(req, res) {
  var crypto = require('crypto');
  var md5 = crypto.createHash('md5');
  var password = md5.update(req.body.pass).digest('base64');
  var User = require('../models/user');
  var newUser = new User({
    email: req.body.email,
    name: null,
    password: password
  });
  
  //check user email and password
  User.get(newUser.email,
  function(err, userStr) {
    var info = {
      error: null,
      info: null
    };
    if (err) {
      info.error = err;
	  console.log('error : ' + err);
	  //req.flash('error', err);
	  return res.send(info);
    }
	var user = null;
	if (userStr != null) {
	  user = JSON.parse(userStr);
	}
	if (user == null || user.password != password) {
      // wrong password	
	  info.error = 'Invalid email or password.';
	  console.log('error : ' + info.err);
	  return res.send(info);
	}
	info.info = 'login success.';
	newUser.name = user.name;
	req.session.user = newUser;
	res.send(info);
  });
});

router.get('/logout', function(req, res) {
  req.session.user = null;
  res.redirect('/');
});

module.exports = router;