'use strict';

var utils = require('../utils/writer.js');
var Usurio = require('../service/UsurioService');

module.exports.usuarioCredenciaisPATCH = function usuarioCredenciaisPATCH (req, res, next, login, senha, nova_senha) {
  Usurio.usuarioCredenciaisPATCH(login, senha, nova_senha)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usuarioDELETE = function usuarioDELETE (req, res, next, user_id) {
  Usurio.usuarioDELETE(user_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usuarioGET = function usuarioGET (req, res, next, id) {
  Usurio.usuarioGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usuarioPATCH = function usuarioPATCH (req, res, next, body, email, telefone, whatsapp, oauthgoogle, oauthhotmail, nome) {
  Usurio.usuarioPATCH(body, email, telefone, whatsapp, oauthgoogle, oauthhotmail, nome)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usuarioPOST = function usuarioPOST (req, res, next) {
  Usurio.usuarioPOST()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
