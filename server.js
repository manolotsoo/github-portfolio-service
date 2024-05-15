let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let port = process.env.PORT || 8010;
const { main } = require('./routes/main');
const { sendGridRoutes } = require('./routes/sendgrid.routes');

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "https://manolotsoo.github.io/");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

// les routes
const prefix = '/api'

// On démarre le serveur
app.listen(port, "0.0.0.0");
console.log('Serveur démarré sur http://localhost:' + port);

// Pour les formulaires
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.route(prefix + '/main')
  .get(main)
app.route(prefix + '/send/mail')
  .post(sendGridRoutes)

module.exports = app;