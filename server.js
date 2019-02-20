var express = require("express"),
    app = new express();
app.use(express.static('dist'));
	app.get ('/', (req, res) => res.send('Hello world'));
	app.get ('/home', (req, res) => res.send('Home page'));
app.listen(8000,function(){

	console.log("app started on port 8000")
})
