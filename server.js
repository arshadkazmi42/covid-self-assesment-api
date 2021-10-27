const express = require('express');
const bodyParser = require('body-parser');

const CovidResult = require('./controllers/covid-result');
const User = require('./controllers/user');
const UserSelfAssesment = require('./controllers/user-self-assesment');
const Zone = require('./controllers/zone');


const port = 8100;
const app = express();

app.use(bodyParser.json());

app.post('/api/registerUser', async (req, res, next) => {
  
  return await User.createAsync(req, res);
});

app.post('/api/selfAssessment', async (req, res, next) => {
  
  return await UserSelfAssesment.createAsync(req, res);
});

app.post('/api/registerAdmin', async (req, res, next) => {
  
  return await User.createAdminAsync(req, res);
});

app.post('/api/updateCovidResult', async (req, res, next) => {
  
  return await CovidResult.createAsync(req, res);
});

app.post('/api/getZoneInfo', async (req, res, next) => {
  
  return await Zone.getAsync(req, res);
});

app.post('/api/createZoneInfo', async (req, res, next) => {
  
  return await Zone.createAsync(req, res);
});

app.listen(port, function () {
  console.log('Server is running on ' + port + ' port');
});
