module.exports = {
  success: (result) => ({
    code: 200,
    data: JSON.stringify(result),
    error: '',
    state: 'OK',
    message: 'success',
  }),

  invalid: (error) => ({
    code: 400,
    data: '',
    error,
    state: 'ERROR',
    message: 'failed',
  }),

  notfound: (error) => ({
    code: 404,
    data: '',
    error: `${error} not found`,
    state: 'ERROR',
    message: 'failed',
  }),

  failed: (error) => ({
    code: 500,
    data: '',
    error,
    state: 'ERROR',
    message: 'failed',
  }),
};
