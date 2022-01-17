const db = require('../../services/db');

const gridState = () => {
  const result = {
    error: null,
    value: '',
  };

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
