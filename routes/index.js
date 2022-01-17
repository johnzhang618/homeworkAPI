const express = require('express');

const response = require('../services/response');
const gridState = require('../app/grid/state');
const usageDevices = require('../app/usage/devices');
const usageReadings = require('../app/usage/readings');

const router = express.Router();

const formatResponse = (res, result) => {
  if (result.error != null) {
    res.send(response[result.error](result.value));
  }

  res.send(response.success(result.value));
};

router.use('/api/v1/grid/state', (req, res) => formatResponse(res, gridState()));

router.use('/api/v1/usage/devices', (req, res) => formatResponse(res, usageDevices()));

router.use('/api/v1/usage/readings', (req, res) => formatResponse(res, usageReadings(req.query)));

// default return 404
router.use('/', (req, res) => {
  res.send(response.notfound('invalid request'));
});

module.exports = router;
