'use strict';

var utils = require('../utils/writer.js');
var Guias = require('../service/GuiasService');

module.exports.guiasGET = function guiasGET (req, res, next, mes, ano) {
  Guias.guiasGET(mes, ano)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.guiasListaGET = function guiasListaGET (req, res, next, mes, ano) {
  Guias.guiasListaGET(mes, ano)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.guiasPOST = function guiasPOST (req, res, next, name, tipoGuia, guia) {
  Guias.guiasPOST(name, tipoGuia, guia)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
