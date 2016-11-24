var fs = require('fs');
var request = require('request');

function Task() {
  this.config = undefined;
  var _task = this;

  // load config file
  fs.readFile('./config.json', function(err, data) {
    if (err) {
	  console.log('Error reading config.json when create Task manager.');
	  console.log('  ' + err);
	  throw err;
	}
	_task.config = JSON.parse(data.toString());
    console.log('Task manager created.');
  });
};

Task.prototype.send_cm_task = function (_id, _name, callback) {
  var post_data = {
    form: {
	  fileid: _id,
	  filename: _name
	}
  };
  var url = this.config.taskserver + 'cm';
  request.post(url, post_data, function(err, res, body) {
    console.log('request post - err : ' + err);
	console.log('request post - res : ' + res.toString());
	console.log('request post - body : ' + body);
  });
};

var _task = new Task();
module.exports = _task;