// Node

var fs = require('fs');

var array = ["195811171676738888", "195811171676734235", "196504061991032005", "196504066691032005", "195811171676731002", "195811171679100004", "195811173256331005", "195811171676731009", "195811171676731001", "195811171676723202", "195811171676731202", "195811171676734306", "195811171676765366", "196604241992032005"]

for (var i = 0; i < array.length; i++) {
  var nama_file = 'w'+[i]
  var ganti_nama = array[i]
  fs.rename('cew/'+nama_file, 'cew/'+ganti_nama, function(err) {
    if (err) console.log('ERROR: ' + err);
  });
  // console.log(nama_file+' menjadi = '+ganti_nama);
}
