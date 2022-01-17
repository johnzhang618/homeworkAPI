const usageReadings = ({ start, end }) => {
  const result = {
    error: null,
    value: '',
  };

  if (!start || !end) {
    result.error = 'invalid';
    result.value = 'invalid query parameters';
    return result;
  }

  const startTmp = parseInt(start, 10);
  const endTmp = parseInt(end, 10);

  if (startTmp > endTmp) {
    result.error = 'invalid';
    result.value = 'invalid query parameters';
    return result;
  }

  // TODO: get usage readings
  const query = null;

  if (query === null) {
    result.error = 'failed';
    result.value = 'server error';
    return result;
  }

  result.value = JSON.stringify(query);
  return result;
};

module.exports = usageReadings;
