'use strict';

var utils = require('../utils/writer.js');
var Funcionrios = require('../service/FuncionriosService');

module.exports.v1FuncionariosGET = function v1FuncionariosGET (req, res, next, empresaId) {
  Funcionrios.v1FuncionariosGET(empresaId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
