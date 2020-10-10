const express = require('express')
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
