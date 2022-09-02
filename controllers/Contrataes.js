'use strict';

var utils = require('../utils/writer.js');
var Contrataes = require('../service/ContrataesService');

module.exports.contratacoesCandidatoPOST = function contratacoesCandidatoPOST (req, res, next) {
  Contrataes.contratacoesCandidatoPOST()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1ContratacoesCandidatoGET = function v1ContratacoesCandidatoGET (req, res, next, contratacao_id) {
  Contrataes.v1ContratacoesCandidatoGET(contratacao_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1ContratacoesGET = function v1ContratacoesGET (req, res, next, cdempresa) {
  Contrataes.v1ContratacoesGET(cdempresa)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1ContratacoesPATCH = function v1ContratacoesPATCH (req, res, next, contratacao_id, status) {
  Contrataes.v1ContratacoesPATCH(contratacao_id, status)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1ContratacoesPOST = function v1ContratacoesPOST (req, res, next) {
  Contrataes.v1ContratacoesPOST()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
