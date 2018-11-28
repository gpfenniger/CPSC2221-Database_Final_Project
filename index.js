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

app.get('/', (req, res) => res.render("pages/index"));
app.get('/login', (req, res) => res.render("pages/login"));
app.get('/about', (req, res) => res.render("pages/about"));
app.get('/search', (req, res) => res.render("pages/search"));
app.get('/insert', (req, res) => res.render("pages/insert"));
app.get('/pos', (req, res) => res.render("pages/pos"));

app.post('/search/query', (req, res) => {
    const query = db
        .prepare(req.body.sql)
        .all()
    res.send(query);
});

app.post('/insert/query', (req, res) => {
    db.exec(req.body.sql);
});

app.post('/test', (req, res) => {
    const tableQuery = db
        .prepare("SELECT * FROM " + req.body.table)
        .all();
    res.send(tableQuery);
});

app.post('/login/submit', (req,res) => {
    const loginQuery = db
        .prepare('SELECT * FROM employee WHERE employeeid = ' + req.body.password)
        .all();
    res.send(loginQuery);
});

app.listen(port, () => console.log('CPSC 2221 - Database Final Project'));
