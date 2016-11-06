function Asset(id) {
  this.id = id;
  this.modelName = '';
};
module.exports = Asset;

var dbm = require('../db/dbm');
Asset.prototype.save = function save(callback) {
  var asset = {
    id: this.id,
  };
  
  dbm.set('uploads', this.id, JSON.stringify(asset), callback);
};

Asset.prototype.load = function load(callback) {
  dbm.get('uploads', this.id, function(err, asset_str) {
    if (!asset_str) {
      callback(err, null);
	  return;
	}
	
	var asset = JSON.parse(asset_str);
	this.id = asset.id;
	callback(err, this);
  });
};
