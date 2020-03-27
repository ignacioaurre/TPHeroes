
const fs = require('fs')
const heroes = JSON.parse(fs.readFileSync('./data/heroes.json', 'utf-8'));

let heroesControlador = {
    main: function (req,res){
        res.send(heroes);
        },
    detalles: function (req,res){
        let idHeroe = heroes.find(({id}) => id == req.params.idHeroes);
            if (idHeroe == undefined){
                res.send("Ingrese un id válido para un heroe o heroina")
            }
            else {
                res.send("Hola, mi nombre es " + idHeroe.nombre + " y soy " + idHeroe.profesion)
            }
        
        },
    reseña: function (req,res){
        let idHeroe = heroes.find(({id}) => id == req.params.idHeroes);
            if (idHeroe == undefined){
                res.send("No encontramos un heroe/heroina para mostrarte")
        }
        else if (req.params.ok !== "ok"){
                    res.send("Soy " + idHeroe.nombre + "<br>" +
                    "Lamento que no desees saber más de mi :(")
        }
        else {
            res.send("Hola, mi nombre es " + idHeroe.nombre + "<br>" + idHeroe.resenia)
        }
    
    }
};

module.exports = heroesControlador;