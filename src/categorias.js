const express = require('express')
const router = express.Router()

const mysqlConexion = require('./index');

router.get('/', (req, res) => {
    mysqlConexion.query('SELECT * FROM categoria', (err,rows,fields) => {
        if (!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })

})

router.get('/:id', (req,res) => {
    const {id} = req.params;
    mysqlConexion.query('SELECT * FROM categoria where idcategoria = ?', [id],(err,rows, fields) => {
        if (!err){
            res.json(rows[0]);
        }else{
            console.log(err);
        }
    })
})

router.delete('/:id', (req,res) => {
    const {id} = req.params;
    mysqlConexion.query('DELETE FROM categoria where idcategoria = ?', [id],(err,rows, fields) => {
        if (!err){
            res.json({Status:'Categoria Eliminada'})
        }else{
            console.log(err);
        }
    })
})

router.post('/add', (req, res) =>{
    const {nom_categoria} = req.body;
    const query = 'CALL AGREGAR_CATEGORIA(?);';
    mysqlConexion.query(query, [nom_categoria], (err, rows, fields) =>{
        if (!err){
            res.json({Status:'Categoria Guardada'})
        }else{
            console.log(err);
        }
    })
})
router.put('/upd', (req, res) =>{
    const {id, nom_categoria} = req.body;
    const query = 'CALL MODIFICAR_CATEGORIA(?, ?);';
    mysqlConexion.query(query, [id, nom_categoria], (err, rows, fields) =>{
        if (!err){
            res.json({Status:'Categoria Modificada'})
        }else{
            console.log(err);
        }
    })
})


module.exports = router;