'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.warrantsGET = function warrantsGET (req, res, next, startTime, endTime) {
  Default.warrantsGET(startTime, endTime)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.warrantsWarrantIdResultsPOST = function warrantsWarrantIdResultsPOST (req, res, next, body, warrantId) {
  Default.warrantsWarrantIdResultsPOST(body, warrantId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
