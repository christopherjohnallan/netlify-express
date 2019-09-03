'use strict';
const express = require('express');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');

const router = express.Router();
router.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>HelloQ from Express.js!</h1>');
  res.end();
});
// router.get('/another', (req, res) => res.json({ route: req.originalUrl }));
// router.post('/', (req, res) => res.json({ postBody: req.body }));

/* app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

router.get('/manifest.json', (req, res) => {
  // You can dynamically generate your manifest here
  // You can pull the data from database and send it back
  // I will use a template for simplicity

  //Use some logic to extract organization name from referer
  var matches = /\/([a-z]+)\/?$/i.exec(req.headers.referer);
  if (matches && matches.length > 1) {
    var orgName = matches[1];
  } else {
    var orgName = 'ORGA'; //Default
  }

  // Need to set content type, default is text/html
  res.set('Content-Type', 'application/json');
  res.render('manifest.hbs', { orgName });
}); */

/* router.get('/:orgName', (req, res) => {
  // res.render('index.hbs', { orgName: req.params.orgName });
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>BOO!</h1>');
  res.end();
}); */

router.get('/boo', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Boo!</h1>');
  res.end();
});

app.use(bodyParser.json());
app.use('/.netlify/functions/server', router);  // path must route to lambda

module.exports = app;
module.exports.handler = serverless(app);
