var express = require('express')
  , page = require('./routes/page')
  , http = require('http')
  , path = require('path')
  , flash = require('connect-flash');
//  , mongoose = require('mongoose')
//  , Schema = mongoose.Schema;

//mongoose.connect('mongodb://localhost/nlms');

var app = express();

// all environments
app.set('port', process.env.PORT || 5000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(flash());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', page.index);
app.get('/login', page.login);
app.get('/logout', page.logout);
app.post('/login_process', page.login_process);

app.get('/staff', page.staff);
app.get('/inventory', page.inventory);
app.get('/logs', page.logs);
app.get('/about', page.about);

/*//model schema for mongo
var Staff = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, required: true, default: "ojt" },
  created_at: { type: Date, default: Date.now }
});
*/


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
