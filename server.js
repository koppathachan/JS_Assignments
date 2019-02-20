var express = require("express"),
    app = new express();
app.use(express.static('dist'));
app.listen(8000,function(){
	console.log("app started on port 8000")
})
