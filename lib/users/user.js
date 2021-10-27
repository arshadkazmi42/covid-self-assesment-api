const _ = require('lodash');

const Database = require('../db/db');

const Db = new Database();

const externals = {};


externals.createAsync = async (data) => {

  const name = _.get(data, ['name']);
  const phoneNumber = _.get(data, ['phoneNumber']);
  const pinCode = _.get(data, ['pinCode']);
  const isAdmin = _.get(data, ['isAdmin'], false);

  const user = await Db.createNewUserAsync(name, phoneNumber, pinCode, isAdmin);
  return user.id;
};


module.exports = externals;