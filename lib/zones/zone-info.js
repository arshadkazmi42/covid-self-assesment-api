const _ = require('lodash');

const Database = require('../db/db');

const Db = new Database();

const externals = {};


externals.getAsync = async (data) => {

  const pinCode = _.get(data, ['pinCode']);

  return await Db.getZoneInfoAsync(pinCode);
};


externals.createAsync = async (data) => {

  const pinCode = _.get(data, ['pinCode']);
  const positiveCases = _.get(data, ['numCases']);

  return await Db.createZoneAsync(pinCode, positiveCases);
};


module.exports = externals;