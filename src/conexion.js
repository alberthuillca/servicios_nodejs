const mysql = require('mysql');

const mysqlConexion = mysql.createConnection({
    host: 'birvxmqrxnbzpdvm0ogz-mysql.services.clever-cloud.com',
    user: 'uysv9t18xsovpgmn',
    password: 'lqXoWZythDxqtkIJbcOp',
    database: 'birvxmqrxnbzpdvm0ogz'
})

mysqlConexion.connect(function (err){
    if (err){
        console.log(err);
        return;
    }else{
        console.log('La BD esta conectada');
    }
});

module.exports = mysqlConexion;