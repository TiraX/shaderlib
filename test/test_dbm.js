console.log('start test dbm !!');
var dbm = require('../db/dbm');
//dbm.connect('123456');	// init in dbm.js
dbm.set('table1', 'key1', 'value1');
dbm.get('table1', 'key1',
function test_table1_cb(err, res) {
  if (err) {
    console.log(err);
    return;
  }
  console.log(' result : ' + res);
});
console.log('attention end..');