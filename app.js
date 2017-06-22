var express = require("express");
var app = express(); 

app.use(express.static(__dirname + '/public'));
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')


app.get('/', function(req, res){
	res.render('index')
})

app.get("/home", function(req, res){
		res.render("home"); 
	
})

var PORT = 3000 || process.env.PORT; 
app.listen(PORT, function(){
	console.log("listening on %d", 3000);

})
