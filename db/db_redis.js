var redis = require('redis');

function db_redis(auth) {
  this.client = redis.createClient('8002', '127.0.0.1');
  var scope = this;
  
  // redis connection
  this.client.on('error', function redis_client_error(err) {
    console.log(err);
  });
  
  this.client.auth(auth);
  
  this.set = function(table, key, value, cb) {
    var _cb = (cb == null) ? redis.print : cb;
    scope.client.hset(table, key, value, _cb);
  }
  
  this.get = function(table, key, cb) {
    var _cb = cb;
	scope.client.hget(table, key, function redis_hget_cb(err, replies) {
	  _cb(err, replies);
	});
  }
  
  this.close = function() {
    scope.client.quit();
  }
}

module.exports.createDbClient = function(auth) {
  return new db_redis(auth);
}
