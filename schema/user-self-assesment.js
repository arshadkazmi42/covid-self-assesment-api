class UserSelfAssesment {

  constructor(userId, symptoms, travelHistory, contactWithCovidPatient) {

    this.userId = userId;
    this.symptoms = symptoms;
    this.travelHistory = travelHistory;
    this.contactWithCovidPatient = contactWithCovidPatient;

    this.validate();
    this.risk = this.caluclateRiskPercentage();
  }

  validate() {

    if (!this.userId || !this.symptoms) {
      throw new Error('Required parameters missing');
    } 

    return true;
  }

  caluclateRiskPercentage() {

    if (this.symptoms.length > 0 && !this.travelHistory && !this.contactWithCovidPatient) {
      return '10%';
    }

    if (this.symptoms.length == 1 && (this.travelHistory || this.contactWithCovidPatient)) {
      return '50%';
    }

    if (this.symptoms.length == 2 && (this.travelHistory || this.contactWithCovidPatient)) {
      return '75%';
    }

    if (this.symptoms.length > 2 && (this.travelHistory || this.contactWithCovidPatient)) {
      return '95%';
    }

    return '5%';
  }

  getUserId() {

    return this.userId;
  }

  getSymptoms() {

    return this.symptoms;
  }

  getTravelHistory() {

    return this.travelHistory;
  }

  getContactWithCovidPatient() {

    return this.contactWithCovidPatient;
  }

  getRiskPercentage() {
    
    return this.risk;
  }
}


module.exports = UserSelfAssesment;