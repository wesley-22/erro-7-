'use strict';


/**
 * retorna lista de todas as empresas relacionadas ao usuário
 *
 * email String 
 * returns inline_response_200_3
 **/
exports.empresasGET = function(email) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "cdempresa" : "0001",
  "nmempresa" : "EMPRESA EXEMPLO LTDA"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

