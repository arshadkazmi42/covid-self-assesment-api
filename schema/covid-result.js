class CovidResult {

  constructor(userId, adminId, covidResult) {

    this.userId = userId;
    this.adminId = adminId;
    this.result = covidResult;

    this.validate();
  }

  validate() {

    if (!this.userId || !this.adminId || !this.result) {
      throw new Error('Required Params missing');
    }

    return true;
  }

  getUserId() {

    this.userId;
  }

  getAdminId() {

    return this.adminId;
  }

  getResult() {

    return this.result;
  }
};


module.exports = CovidResult;