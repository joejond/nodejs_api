var mysql =  require('mysql');
var conn = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'diesel2018',
    database : 'api'
});


conn.connect(function(err){
    if(err) throw err;
});

module.exports = conn;