const path = require('path');
const express = require('express');
const handlebars = require('express-handlebars');
const route = require('./routes');
const app = express();
const port = process.env.PORT || 3000;
//const db = require('./config/db/');
//db.connect();
// Use static folder
app.use(express.static(path.join(__dirname, 'public')));

app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());


// Template engine
app.engine(
  'hbs',
  handlebars({
    extname: '.hbs',
  }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// Routes init
route(app);

app.listen(port, function() {
  console.log('Listening on port ' + port)
})