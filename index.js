const express = require('express');
const path = require('path');
const db = require('better-sqlite3')('restaurant.db');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const row = db.prepare('SELECT * FROM Customer').all();

app.get('/', (req, res) => res.render("pages/index"));
app.get('/about', (req, res) => res.render("pages/about"));
app.get('/search', (req, res) => res.render("pages/search"));
app.get('/insert', (req, res) => res.render("pages/insert"));
app.get('/test', (req, res) => res.send(row));

app.listen(port, () => console.log('CPSC 2221 - Database Final Project'));
