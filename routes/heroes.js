let express = require('express');
let router = express.Router()
let fs = require('fs');

const heroes = JSON.parse(fs.readFileSync('./data/heroes.json', 'utf-8'));
const heroesControlador = require('../controladores/heroesControlador')

router.get('/', heroesControlador.main)
router.get('/detalles/:idHeroes', heroesControlador.detalles)
router.get('/bio/:idHeroes/:ok?', heroesControlador.reseña)



module.exports = router;