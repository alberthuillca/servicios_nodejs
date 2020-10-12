const express = require('express')
const mysql = require('mysql');


const mysqlConexion = mysql.createConnection({
    host: 'b9sgi85w0gawksbslnpj-mysql.services.clever-cloud.com',
    user: 'ufep0oftmeis56cu',
    password: 's69IYyUcpxfoPoWVBG4L',
    database: 'b9sgi85w0gawksbslnpj'
})

mysqlConexion.connect(function (err){
    if (err){
        console.log('Error');
        return;
    }else{
        console.log('La BD esta conectada');
    }
});

module.exports = mysqlConexion;

const app = express();  


// setings
app.set('port', process.env.PORT || 3000);

// Middleware 
app.use(express.json());

// rutas
app.use(require('./rutas/categorias'));




// Start Servidor
app.listen(app.get('port'), () => {
    console.log('Server funcionando', app.get('port'));
})

