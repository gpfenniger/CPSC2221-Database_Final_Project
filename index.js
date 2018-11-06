const express = require('express');
var bodyParser = require("body-parser");
const path = require('path');
const db = require('better-sqlite3')('restaurant.db');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const row = db.prepare('SELECT * FROM Userlist').all();

app.get('/', (req, res) => res.render("pages/index"));
app.get('/login', (req, res) => res.render("pages/login"));
app.get('/about', (req, res) => res.render("pages/about"));
app.get('/search', (req, res) => res.render("pages/search"));
app.get('/insert', (req, res) => res.render("pages/insert"));

app.get('/test', (req, res) => res.send(row));

app.post('/login/submit',function(req,res){
    const loginQuery = db
        .prepare('SELECT * FROM Userlist WHERE id = ' + req.body.password)
        .all();
    res.send(loginQuery);
  });

app.listen(port, () => console.log('CPSC 2221 - Database Final Project'));
