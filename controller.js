'use strict';

var response = require('./res');
var connection = require('./conn');

exports.users = function(req, res){
    connection.query("select * from person",function(error, rows,fields){
        if(error){
            console.log(error);
        }
        else{
            response.ok(rows, res);
        }
            
        
    });
}

exports.index = function(req,res){
    response.ok("Halo bro.... REStFull",res);
};

exports.findUsers = function(req,res){
    var userId = req.params.user_id;

    connection.query('SELECT * FROM person where id = ?',
    [userId],
    function(error, rows, fields){
        if(error){
            console.log(error);
        }        
        else{
            response.ok(rows,res);
        }
    });


};

exports.createUsers = function(req,res){
    var f_name = req.body.f_name;
    var l_name = req.body.l_name;

    connection.query('INSERT INTO person (first_name, last_name) VALUE (?,?)',
    [f_name,l_name],
    function(error,rows,fields){
        if(error){
            console.log(error);
        }
        else{
            response.ok("Berhasil insert user",res);
        }
    });

};

exports.updateUsers = function(req,res){
    var user_id = req.body.user_id;
    var f_name = req.body.f_name;
    var l_name = req.body.l_name;

    connection.query("UPDATE person SET first_name = ?, last_name = ? WHERE id = ?",
    [f_name,l_name,user_id],
    function(error,rows,fields){
        if(error){
            console.log(error);
        }
        else{
            response.ok('Berhasil Update... ye yy..',res);
        }
    });

};

exports.deleteUsers = function(req,res){
    var user_id = req.body.user_id;

    connection.query('DELETE FORM person WHERE id = ?',
    [user_id],
    function(error,rows,fields){
        if(error){
            console.log(error);
        }
        else{
            response.ok("berhasil apus user id "+ user_id);
        }
    });
};