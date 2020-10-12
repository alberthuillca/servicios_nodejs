const express = require('express')
const mysql = require('mysql');
const app = express();

const mysqlConexion = mysql.createConnection({
    host: 'birvxmqrxnbzpdvm0ogz-mysql.services.clever-cloud.com',
    database: 'birvxmqrxnbzpdvm0ogz',
    user: 'uysv9t18xsovpgmn',
    password: 'lqXoWZythDxqtkIJbcOp'
})

// setings
app.set('port', process.env.PORT || 3000);

// Middleware 
app.use(express.json());

// rutas
app.use(require('./rutas/categorias'));

mysqlConexion.connect(function (err){
    if (err){
        console.log('Error');
    }else{
        console.log('La BD esta conectada');
    }
});

module.exports = mysqlConexion;

// Start Servidor
app.listen(app.get('port'), () => {
    console.log('Server funcionando', app.get('port'));
})
