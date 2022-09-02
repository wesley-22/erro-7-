'use strict';


/**
 * remove um determinado módulo.
 *
 * mod_id Integer 
 * returns inline_response_200_1
 **/
exports.modulosDELETE = function(mod_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "status" : "sucesso"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * retorna a lista de módulos disponiveis.
 *
 * user_id Integer 
 * returns inline_response_200_5
 **/
exports.modulosGET = function(user_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "mod_nome" : "mod_nome",
  "mod_id" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * altera um determinado módulo.
 *
 * mod_id Integer 
 * mod_nome String  (optional)
 * mod_nivel Integer Define o nivel de acesso ao módulo: Administrador (1), Responsável da Empresa (2) ou Outorgado (3).  (optional)
 * returns inline_response_200_1
 **/
exports.modulosPUT = function(mod_id,mod_nome,mod_nivel) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "status" : "sucesso"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * adiciona um novo módulo.
 *
 * mod_nome String 
 * mod_nivel Integer Define o nivel de acesso ao módulo: Administrador (1), Responsável da Empresa (2) ou Outorgado (3). 
 * returns inline_response_200_1
 **/
exports.v1ModulosPOST = function(mod_nome,mod_nivel) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "status" : "sucesso"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

