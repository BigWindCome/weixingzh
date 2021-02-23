var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var db = require('./db/connect')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var xhfjlRouter = require('./routes/xhfjl');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/xhfjl', xhfjlRouter);

module.exports = app;
