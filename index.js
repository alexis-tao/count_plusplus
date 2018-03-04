var app = require('express')(); 
var hbs = require ('hbs');
var fs = require('fs');

app.set('view engine', 'html');
app.engine('html', hbs.__express);


app.get('/user_input', function (req, res) {
	console.log(req.query);
	var analyze = JSON.parse(fs.readFileSync('user_input.json', 'utf8'));
	analyze.push(req.query);
})
