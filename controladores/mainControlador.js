let mainControlador = {
    home: function (req,res){
        res.send("Ni Superman, IronMan o La Mujer Maravilla son tan importantes cómo las y los Heroes de carne y hueso que encontrarás en este sitio.<br> Esperamos que ellas y ellos te sirvan como inspiración para poder cumplir tus objetivos. Recuerda: ¡nunca pares de creer en ti!" + "<br><br>" +
                 "Para conocer la lista de nuestros heroes y heroinas:       /heroes<br>" +
                 "Para ver el nombre de un heroe/heroina y su profesión:     /heroes/detalle/(numero de id)<br>" +
                 "Para conocer un poco mas de alguno de estos personajes:    /heroes/bio/(numero de id)/ok")
        },
    creditos: function (req,res){
        res.send('Página creada por Iñaki Aurrecoechea')

    },
    default: function (req, res) {
        res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas!');
         }
}

module.exports = mainControlador;