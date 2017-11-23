var express = require('express');
var app = express();
const PORT = process.env.PORT || 5000;

app.set('view engine','pug');

app.get('/', function (req, res) {
   //res.send('Hello World');
   res.render('index', { title: 'Hey', message: 'Hello there!' });
});

app.listen(PORT || 5000, () => console.log(`Listening on ${ PORT }`));