function Asset(id) {
  this.id = id;
  this.author = '';
  this.time = Date.now();
  this.source = '';
  this.model = '';
};

var dbm = require('../db/dbm');
Asset.prototype.jsonData = function () {
  var asset = {
    id: this.id,
    author: this.author,
    time: this.time,
    source: this.source,
	model: this.model
  };
  return asset;
};

Asset.prototype.fromJson = function (asset_json) {
  this.id = asset_json.id;
  this.author = asset_json.author;
  this.time = asset_json.time;
  this.source = asset_json.source;
  this.model = asset_json.model;
};

Asset.prototype.save = function save(callback) {
  var asset = this.jsonData();
  dbm.set('uploads', this.id, JSON.stringify(asset), callback);
};

Asset.prototype.load = function load(callback) {
  var asset = this;
  dbm.get('uploads', this.id, function(err, asset_str) {
    if (!asset_str) {
      callback(err, null);
	  return;
	}
	
	var asset_json = JSON.parse(asset_str);
	asset.fromJson(asset_json);
	callback(err, asset);
  });
};

module.exports = Asset;