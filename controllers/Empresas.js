'use strict';

var utils = require('../utils/writer.js');
var Empresas = require('../service/EmpresasService');

module.exports.empresasGET = function empresasGET (req, res, next, email) {
  Empresas.empresasGET(email)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
