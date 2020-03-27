let express = require('express');
let router = express.Router()
let fs = require('fs');
const heroes = JSON.parse(fs.readFileSync('./data/heroes.json', 'utf-8'));
const mainControlador = require('../controladores/mainControlador')


router.get('/', mainControlador.home);
router.get('/creditos', mainControlador.creditos);




module.exports = router;