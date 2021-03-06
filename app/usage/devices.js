const db = require('../../services/db');

const usageDevices = () => {
  const result = {
    error: null,
    value: '',
  };

  const query = db.queryDevicesStates();

  if (query === null) {
    result.error = 'failed';
    result.value = 'server error';
    return result;
  }

  result.value = JSON.stringify(query);
  return result;
};

module.exports = usageDevices;
