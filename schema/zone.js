const ZONES = {
  RED: 'RED',
  ORAGE: 'ORANGE'
};


const ZONE_SWITCH_THRESHOLD = 5;


class Zone {

  constructor(pinCode, positiveCases) {

    this.pinCode = pinCode;
    this.positiveCases = positiveCases;

    this.zoneType = this.findZoneType();
  }

  findZoneType() {

    if (this.positiveCases > ZONE_SWITCH_THRESHOLD) {
      return ZONES.RED;
    }

    return ZONES.ORAGE;
  }

  getPinCode() {

    return this.pinCode;
  }

  getPositiveCases() {

    return this.positiveCases;
  }

  getZoneType() {

    return this.zoneType;
  }
}


module.exports = Zone;