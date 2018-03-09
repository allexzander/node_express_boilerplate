const Express = require('express'),
App = Express(),
Session = require('express-session'),
BodyParser = require('body-parser'),
Logger = require('morgan'),
CookieParser = require('cookie-parser');

const Port = process.env.port ? process.env.port : process.env.NODE_ENV == "staging"? 8080: 3000;

App.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  next();
});

App.use(Logger('dev'));
App.use(BodyParser.json());
App.use(BodyParser.urlencoded({extended: true}));
App.use(CookieParser());
App.use(Session({
  secret: 'shhh... classified',
  resave: true,
  saveUninitialized: true
}));

App.use('/', require('./routes/routes.js'));

const server = App.listen(Port);

console.log(`Server started on port: ${Port}`);