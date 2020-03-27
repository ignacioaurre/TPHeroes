const express = require('express');
const fs = require('fs');
const app = express();

let rutasMain = require('./routes/main');
let rutasHeroes = require('./routes/heroes');



app.listen(3030, () => console.log('Server running in 3030 port'));

app.use('/', rutasMain);
app.use('/heroes', rutasHeroes);

app.get('*', (req, res) => {
res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas!');
 });