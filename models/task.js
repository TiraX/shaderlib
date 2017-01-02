var fs = require('fs');
var request = require('request');
var config = require('../config');

function Task() {
  console.log('Task manager created.');
};

Task.prototype.send_cm_task = function (_id, _name, callback) {
  var post_data = {
    form: {
	  fileid: _id,
	  filename: _name
	}
  };
  var url = config.taskserver + 'process';
  request.post(url, post_data, function(err, res, body) {
    console.log('request post - err : ' + err);
	console.log('request post - res : ' + res.toString());
	console.log('request post - body : ' + body);
  });
};

Task.prototype.receive_task_result = function(_id, _name, callback) {
  var file_path = 'public/files/';
  var src_url = config.taskserver + 'tmpfiles/' + _id + '/' + _name;

  var dst_path = file_path + _id + '/' + _name;
  var dl_stream = request(src_url).pipe(fs.createWriteStream(dst_path));
  console.log('file downloaded to : ' + dst_path);
  
  dl_stream.on('finish', callback);
};

var _task = new Task();
module.exports = _task;