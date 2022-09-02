'use strict';


/**
 * retorna a lista de todos os funcionarios da empresa
 *
 * empresaId Integer 
 * returns List
 **/
exports.v1FuncionariosGET = function(empresaId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "idfuncionario" : "a11h6dk1y5u9811kg6k8hg3",
  "nmfuncionario" : "JOAO DA SILVA"
}, {
  "idfuncionario" : "afjfk18f181s61hjl3sj16m",
  "nmfuncionario" : "MARIA DA SILVA"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

