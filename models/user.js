var dbm = require('../db/dbm');
var Asset = require('./asset');

function User(user) {
  this.email = user.email;
  this.name = user.name;
  this.password = user.password;
  this.upload_infos = user.upload_infos ? user.upload_infos : {};
};

User.prototype.jsonData = function() {
  var json = {
    email: this.email,
    name: this.name,
    password: this.password,
    upload_infos: this.upload_infos
  };
  return json;
};

User.prototype.save = function save(callback) {
  var user = {
    email: this.email,
    name: this.name,
    password: this.password,
	upload_infos: this.upload_infos
  };
  
  dbm.set('users', this.email, JSON.stringify(user), callback);
};

User.prototype.load = function load(callback) {
  dbm.get('users', this.email, function(err, user_str) {
    if (!user) {
      callback(err, null);
	  return;
	}
	
	var user = JSON.parse(user_str);
	this.name = user.name;
	this.upload_infos = user.upload_infos;
	callback(err, this);
  });
};

User.get = function get(email, callback) {
  dbm.get('users', email, callback);
};

User.prototype.addUpload = function addUpload(uploadid, filename, callback) {
  // add upload summary info to user upload_infos and save it.
  var upload_info = {};
  var name = filename.split('.');
  if (name.length > 1) {
    name = name[name.length - 2];
  }
  else {
    name = name[name.length - 1];
  }
  upload_info.name = name;
  upload_info.time = Date.now();
  this.upload_infos[uploadid] = upload_info;
  this.save(callback);

  // add upload detail info to upload and save it
  var asset = new Asset(uploadid);
  asset.author = this.email;
  asset.source = filename;
  asset.save(callback); 
}
module.exports = User;