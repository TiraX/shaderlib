function User(user) {
  this.email = user.email;
  this.name = user.name;
  this.password = user.password;
};
module.exports = User;


var dbm = require('../db/dbm');
User.prototype.save = function save(callback) {
  var user = {
    email: this.email,
    name: this.name,
    password: this.password,
  };
  
  dbm.set('users', this.email, JSON.stringify(user));
};

User.get = function get(email, callback) {
  dbm.get('users', email, callback);
};