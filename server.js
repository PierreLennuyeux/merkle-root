var express    = require('express');
var app 	   = express();
var session    = require('cookie-session');
var bodyParser = require('body-parser');
var request    = require("request");
let anecdote   = "";

var urlencodedParser = bodyParser.urlencoded({ extended: false });

var converter  = require('./function');

app.use(session({secret: 'convertisseur'}));

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.send('Hello World');
});

app.get('/convertisseur', function(req, res) {
	res.setHeader('Content-Type', 'text/html');

	var nbre 		 = 0;
	var nbreConverti = 0;

	if (req.session.resultat !== '') {
		nbreConverti = req.session.resultat;
	}

	request("http://numbersapi.com/"+nbreConverti, function(err, res, body) {
		anecdote = body;
	});

	res.render('convertisseur', {resultatConversion: nbreConverti, stringAnecdote: anecdote});
});

app.post('/convertisseur/execute',urlencodedParser, function(req, res) {
	var nbre 		 = req.body.entree;
	var nbreConverti = 0;

	if (req.body.conversion == 1) {
		nbreConverti = converter.convertDecimal(nbre);
	} else {
		nbreConverti = converter.convertHexa(nbre);
	}

    req.session.resultat = nbreConverti;
    res.redirect('/convertisseur');
});

app.listen(8080);