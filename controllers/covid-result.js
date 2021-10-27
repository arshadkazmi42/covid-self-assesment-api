const CovidResult = require('../lib/covid/covid-result');

const externals = {};

externals.getAsync = async (req, res) => {


};


externals.createAsync = async (req, res) => {

  try {

    const requestData = req.body;
    await CovidResult.createAsync(requestData);

    return res.send({
      updated: true
    });

  } catch (err) {
    console.log(err);
    return res.send({
      status: 'error',
      message: err.message
    });
  }
};


externals.createAdminAsync = async (req, res) => {

  try {

    const requestData = {
      ...req.body,
      isAdmin: true
    };
    
    const userId = await User.createAsync(requestData);

    return res.send({
      adminId: userId
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