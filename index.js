let express = require('express')
let app = express();
let bodyParser = require('body-parser');
let path = require('path');

const expressHbs = require('express-handlebars');
app.engine(
    'hbs',
    expressHbs({
      layoutsDir: 'views/layouts/',
      defaultLayout: 'main-layout',
      extname: 'hbs'
    })
  );
  app.set('view engine', 'hbs');
  app.set('views', 'views');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false })) // middleware

// parse application/json
app.use(bodyParser.json()) // middleware

let gameRoutes = require('./routes/game');

app.use(express.static(path.join(__dirname,'public')));

app.get('/', function (req,res) {
    res.render('home');
});

app.use(gameRoutes);

app.listen(3000, () => console.log('Server ready on 3000'))



  