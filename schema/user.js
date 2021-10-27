class User {

  constructor(id, name, phoneNumber, pinCode, isAdmin) {

    this.id = id;
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.pinCode = pinCode;
    this.isAdmin = isAdmin;

    this.validate();
  }

  validate() {

    if (!this.name || !this.phoneNumber || !this.pinCode) {
      throw new Error('Required Params missing');
    }

    return true;
  }

  id() {

    this.id = id;
  }

  getName() {

    return this.name;
  }

  getPhoneNumber() {

    return this.phoneNumber;
  }

  getPincode() {

    return this.pinCode;
  }

  isAdmin() {
    
    return this.isAdmin;
  }
};


module.exports = User;