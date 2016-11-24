console.log('start test task !!');
var task = require('../models/task');

setTimeout( function() {
  task.send_cm_task('fileid......', 'fn......', function (err, result) {
  });
}, 1000);

console.log('test end..');