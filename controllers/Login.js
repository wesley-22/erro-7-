'use strict';

var utils = require('../utils/writer.js');
var Login = require('../service/LoginService');

module.exports.v1LoginPOST = function v1LoginPOST (req, res, next, login, senha) {
  Login.v1LoginPOST(login, senha)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
