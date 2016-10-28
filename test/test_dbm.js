
console.log('attention !!');
var dbm = require('../db/dbm');
dbm.connect('123456');
dbm.set('table1', 'key1', 'value1');
dbm.get('table1', 'key1', function test_table1_cb(err, res) {
  if (err) {
    console.log(err);
	return;
  }
  console.log(' result : ' + res);
});
console.log('attention end..');