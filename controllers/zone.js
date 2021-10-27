const Zone = require('../lib/zones/zone-info');

const externals = {};


externals.getAsync = async (req, res) => {

  try {

    const requestData = req.body;
    const zone = await Zone.getAsync(requestData);

    return res.send({
      numCases: zone.getPositiveCases(),
      zoneType: zone.getZoneType()
    });

  } catch (err) {
    console.log(err);
    return res.send({
      status: 'error',
      message: err.message
    });
  }
};


externals.createAsync = async (req, res) => {

  try {

    const requestData = req.body;
    const zone = await Zone.createAsync(requestData);

    return res.send({
      numCases: zone.getPositiveCases(),
      zoneType: zone.getZoneType()
    });

  } catch (err) {
    console.log(err);
    return res.send({
      status: 'error',
      message: err.message
    });
  }
};


externals.updateAsync = async (req, res) => {

  // Update user
};


module.exports = externals;