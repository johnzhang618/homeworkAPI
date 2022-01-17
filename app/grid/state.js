const db = require('../../services/db');

const gridState = () => {
  const result = {
    error: null,
    value: '',
  };
  // TODO: get grid state
  const query = db.queryGridState();

  if (query === null) {
    result.error = 'failed';
    result.value = 'server error';
    return result;
  }

  result.value = JSON.stringify(query);
  return result;
};

module.exports = gridState;
