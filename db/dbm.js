var use_db = './db_redis';

function dbm() {
  this.db = undefined;
  console.log('Db manager created.');
}

dbm.prototype.connect = function(auth) {
  var db_config = require(use_db);
  this.db = db_config.createDbClient(auth);
  console.log('Created db connection with : ' + use_db);
}

dbm.prototype.set = function(table, key, value, cb) {
  this.db.set(table, key, value, cb);
}

dbm.prototype.get = function(table, key, cb) {
  this.db.get(table, key, cb);
}

var _dbm = new dbm();
module.exports = _dbm;