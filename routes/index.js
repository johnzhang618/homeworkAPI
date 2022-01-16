const express = require('express');

const response = require('../services/response');

const router = express.Router();

router.use('/', (req, res) => {
  switch (req.method) {
    // handle methods GET
    case 'GET':
      switch (req.path) {
        // readings for charts
        case '/readings':
          break;

        // grid states for aside overview
        case '/grid':
          break;

        // devices details for aside overview
        case '/devices':
          break;

        // default return 404
        default:
          res.send(response.notfound(req.baseUrl));
      }
      break;

    // handle methods POST
    case 'POST':
      res.send(response.notfound(req.baseUrl));
      break;

    // handle methods PUT
    case 'PUT':
      res.send(response.notfound(req.baseUrl));
      break;

    // handle methods PATCH
    case 'PATCH':
      res.send(response.notfound(req.baseUrl));
      break;

    // handle methods DELETE
    case 'DELETE':
      res.send(response.notfound(req.baseUrl));
      break;

    // default return 404
    default:
      res.send(response.invalid('invalid request'));
  }
});

module.exports = router;
