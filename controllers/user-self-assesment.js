const UserSelfAssesment = require('../lib/users/user-self-assesment');

const externals = {};


externals.getAsync = async (req, res) => {

  // TODO
};


externals.createAsync = async (req, res) => {

  try {

    const requestData = req.body;
    const riskPercentage = await UserSelfAssesment.createAsync(requestData);

    return res.send({
      riskPercentage: riskPercentage
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