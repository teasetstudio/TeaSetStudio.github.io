let express = require('express'),
    app = express();

var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/', function(req, res){
    console.log('asldfhj');
});

app.listen(3000);