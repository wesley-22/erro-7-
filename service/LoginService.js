'use strict';


/**
 * Faz o envio dos dados de login.
 *
 * login String 
 * senha String 
 * returns inline_response_200_1
 **/
exports.v1LoginPOST = function(login,senha) {
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

