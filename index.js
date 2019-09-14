const express = require('express');
const bodyParser = require('body-parser');
var userRoute = require('./routes/user.route')

const port = 3000;
const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use('/users', userRoute);


// render index
app.get('/', function (req, res) {
    res.send('Hello World!');
});


app.listen(port, ()=>{
    console.log('===> OPEN: http://localhost:' + port);
});

