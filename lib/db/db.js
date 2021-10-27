const { CovidResult, User, UserSelfAssesment, Zone } = require('../../schema');

const DATABASE = require('./local');


class Database {

  constructor() {}

  generateUserId() {

    return DATABASE.USERS.length + 1;
  }

  async createNewUserAsync(name, phoneNumber, pinCode, isAdmin) {

    if (await this.phoneNumberExists(phoneNumber)) {
      throw new Error('Phone number already registered');
    }

    const userId = this.generateUserId();
    const user = new User(userId, name, phoneNumber, pinCode, isAdmin);
    
    DATABASE.USERS.push(user);

    return user;
  }

  async createUserSelfAssesmentAsync(userId, symptoms, travelHistory, contactWithCovidPatient) {
    
    if (!await this.isUserExistsAsync(userId)) {
      throw new Error('Invalid User ID');
    }

    const assesment = new UserSelfAssesment(userId, symptoms, travelHistory, contactWithCovidPatient);
    DATABASE.SELF_ASSEMENTS.push(assesment);
    return assesment;
  }

  async createCovidResult(userId, adminId, covidResult) {

    if (!await this.isUserExistsAsync(userId)) {
      throw new Error('Invalid User Id');
    }

    if (!await this.isUserExistsAsync(adminId)) {
      throw new Error('Invalid admin id');
    }

    if (!await this.isAdminUser(adminId)) {
      throw new Error('Invalid Admin ID');
    }

    const result = new CovidResult(userId, adminId, covidResult);
    DATABASE.COVID_RESULTS.push(result);

    return result;
  }

  async getZoneInfoAsync(pinCode) {

    const zone = await this.findZoneByPincodeAsync(pinCode);
    if (!zone) {
      throw new Error('No zone details found');
    }

    return zone;
  }

  async createZoneAsync(pinCode, positiveCases) {

    const isZoneExists = await this.findZoneByPincodeAsync(pinCode);
    if (isZoneExists) {
      throw new Error('Zone already exists. Try updating the zone info');
    }

    const zone = new Zone(pinCode, positiveCases);
    DATABASE.ZONES.push(zone);

    return zone;
  }

  async findZoneByPincodeAsync(pinCode) {

    const zones = DATABASE.ZONES;
    for (const zone of zones) {
      if (zone.pinCode === pinCode) {
        return zone;
      }
    }

    return null;
  }

  async getUsersAsync() {

    return DATABASE.USERS;
  }

  async phoneNumberExists(phoneNumber) {

    const users = await this.getUsersAsync();
    for (const user of users) {
      if (user.getPhoneNumber() === phoneNumber) {
        return true;
      }
    }

    return false;
  }

  async isUserExistsAsync(userId) {

    const users = await this.getUsersAsync();
    for (const user of users) {
      if (user.id === userId) {
        return true;
      }
    }

    return false;
  }

  async isAdminUser(userId) {

    const users = await this.getUsersAsync();
    for (const user of users) {
      if (user.id === userId) {
        return user.isAdmin;
      }
    }

    return false;
  }
}


module.exports = Database;