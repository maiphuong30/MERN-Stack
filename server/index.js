var express = require('express');
var mongoose = require('mongoose');
const cors = require('cors');
var router = express.Router();
var port = 5000;
var url = 'mongodb+srv://admin:admin@cluster0.b0yjk.mongodb.net/btlon';

mongoose.connect(url,
    {useNewUrlParser: true, useUnifiedTopology: true})
    .then((db)=> console.log("db is connected"))
    .catch((err) =>console.log(err));
var app = express();
var cookieParser = require('cookie-parser');
app.set('view engine', 'ejs');
app.set("views", "./views");
app.use(express.json());
app.use(express.static("public"));
app.use(cookieParser());
app.use(cors());
var home = require('./routes/pageRoute');
var adRoute = require('./routes/admin/qlProductRoute');
var dmRoute = require('./routes/admin/danhmucRoute');
var authRoute = require('./routes/auth');
var adminRoute = require('./routes/adminRoute');
app.use('/', home);
//app.use('/admin/',adminRoute);
app.use('/product/', adRoute);
app.use('/danhmuc/', dmRoute);
app.use('/login/', authRoute);
app.use('/find/',home);
app.listen(port, function () {
    console.log("Server listening on port " + port);
});
