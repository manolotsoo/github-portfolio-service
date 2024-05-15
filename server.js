let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let port = process.env.PORT || 8010;
const { main } = require('./routes/main');
const { sendGridRoutes } = require('./routes/sendgrid.routes');

app.use((req, res, next) => {
  const allowedOrigin = 'https://manolotsoo.github.io';
  const requestOrigin = req.get('Origin');

  if (requestOrigin === allowedOrigin) {
    res.header('Access-Control-Allow-Origin', allowedOrigin);
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  } else {
    res.status(403).send('Forbidden: Access denied from this origin.');
    return;
  }
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