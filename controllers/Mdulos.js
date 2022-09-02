'use strict';

var utils = require('../utils/writer.js');
var Mdulos = require('../service/MdulosService');

module.exports.modulosDELETE = function modulosDELETE (req, res, next, mod_id) {
  Mdulos.modulosDELETE(mod_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.modulosGET = function modulosGET (req, res, next, user_id) {
  Mdulos.modulosGET(user_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.modulosPUT = function modulosPUT (req, res, next, mod_id, mod_nome, mod_nivel) {
  Mdulos.modulosPUT(mod_id, mod_nome, mod_nivel)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1ModulosPOST = function v1ModulosPOST (req, res, next, mod_nome, mod_nivel) {
  Mdulos.v1ModulosPOST(mod_nome, mod_nivel)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
