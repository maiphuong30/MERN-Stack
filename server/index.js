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
var auth = require('./middleware/auth.middleware');
app.use('/', home);
app.use('/admin/',adminRoute);
app.use('/admin/product/', adRoute);
app.use('/admin/danhmuc/',auth.isAdminLoggedin, dmRoute);
app.use('/login/', authRoute);
/*app.use('/login', (req, res) => {
    res.send({
      token: 'test123'
    });
  });*/
app.listen(port, function () {
    console.log("Server listening on port " + port);
});
