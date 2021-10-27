const _ = require('lodash');

const Database = require('../db/db');

const Db = new Database();

const externals = {};


externals.createAsync = async (data) => {

  const userId = _.get(data, ['userId']);
  const adminId = _.get(data, ['adminId']);
  const result = _.get(data, ['result']);

  const covidResult = await Db.createCovidResult(userId, adminId, result);
  return covidResult;
};


module.exports = externals;