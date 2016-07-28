var express =  require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static('public'));
app.get('/',function (req,res) {
    res.send("hello world!!");
});
app.post('/register',function (req,res) {
  // res.send("data");
   res.send(req.body);
});

app.listen(3000 , function(){
    console.info("server running on port 3000");
});