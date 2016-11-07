var dbm = require('../db/dbm');
var Asset = require('./asset');

function User(user) {
  this.email = user.email;
  this.name = user.name;
  this.password = user.password;
  this.upload_infos = [];
};

User.prototype.save = function save(callback) {
  var user = {
    email: this.email,
    name: this.name,
    password: this.password,
	upload_infos: this.uploads
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
  // add this upload info to user upload_infos and save it.
  var upload_info = {};
  upload_info.id = uploadid;
  this.upload_infos.push(upload_info);
  dbm.save(callback);
  
  // add this new upload to upload table
  var newAsset = new Asset(uploadid);
  newAsset.modelName = filename;
  newAsset.save(callback);
  return newAsset;
}
module.exports = User;