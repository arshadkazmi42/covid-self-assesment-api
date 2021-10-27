const _ = require('lodash');

const Database = require('../db/db');

const Db = new Database();

const externals = {};


externals.createAsync = async (data) => {

  const userId = _.get(data, ['userId']);
  const symptoms = _.get(data, ['symptoms']);
  const travelHistory = _.get(data, ['travelHistory']);
  const contactWithCovidPatient = _.get(data, ['contactWithCovidPatient']);

  const selfAssesment = 
    await Db.createUserSelfAssesmentAsync(userId, symptoms, travelHistory, contactWithCovidPatient);
  return selfAssesment.getRiskPercentage();
};


module.exports = externals;