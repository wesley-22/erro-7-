'use strict';


/**
 * busca os dados de CBO.
 *
 * cbo_id String 
 * returns inline_response_201_3
 **/
exports.cboGET = function(cbo_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "cbo_id" : "sucesso",
  "ocupacao" : "ocupacao",
  "subgrupo" : "subgrupo",
  "grande_grupo" : "grande_grupo",
  "subgrupo_principal" : "subgrupo_principal",
  "familia" : "familia"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * adiciona um novo CBO.
 *
 * returns inline_response_200_1
 **/
exports.cboPOST = function() {
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
 * cadastra um horário.
 *
 * returns inline_response_201
 **/
exports.horariosPOST = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "contratacao_id" : 0,
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
 * Remove um CBO do cadastro.
 *
 * cbo_id String 
 * returns inline_response_200_1
 **/
exports.v1CboDELETE = function(cbo_id) {
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
 * remove uma função.
 *
 * func_id Integer  (optional)
 * returns inline_response_200_1
 **/
exports.v1FuncaoDELETE = function(func_id) {
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
 * busca as funções disponiveis para a empresa.
 *
 * cdempresa Integer 
 * returns inline_response_201_2
 **/
exports.v1FuncaoGET = function(cdempresa) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "cbo_id" : 0,
  "func_nome" : "func_nome"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Altera uma função.
 *
 * func_nome String  (optional)
 * cbo_id Integer  (optional)
 * returns inline_response_200_1
 **/
exports.v1FuncaoPATCH = function(func_nome,cbo_id) {
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
 * adiciona uma função.
 *
 * func_nome String 
 * cbo_id Integer 
 * returns inline_response_200_1
 **/
exports.v1FuncaoPOST = function(func_nome,cbo_id) {
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
 * remove um horário cadastrado.
 *
 * hora_id Integer  (optional)
 * returns inline_response_200_1
 **/
exports.v1HorariosDELETE = function(hora_id) {
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
 * busca os dados de horário.
 *
 * cdempresa Integer 
 * returns List
 **/
exports.v1HorariosGET = function(cdempresa) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ "[{\"descricao\":\"SEGUNDA A SÁBADO DAS 13:00 ÀS 22:00\",\"dom_entrada\":\"\",\"dom_almoco_saida\":\"\",\"dom_amoco_retorno\":\"\",\"dom_saida\":\"\",\"dom_intervalo\":\"\",\"seg_entrada\":\"13:00\",\"seg_almoco_saida\":\"17:00\",\"seg_amoco_retorno\":\"18:00\",\"seg_saida\":\"22:00\",\"seg_intervalo\":\"\",\"ter_entrada\":\"13:00\",\"ter_almoco_saida\":\"17:00\",\"ter_amoco_retorno\":\"18:00\",\"ter_saida\":\"22:00\",\"ter_intervalo\":\"\",\"quar_entrada\":\"13:00\",\"quar_almoco_saida\":\"17:00\",\"quar_amoco_retorno\":\"18:00\",\"quar_saida\":\"22:00\",\"quar_intervalo\":\"\",\"quin_entrada\":\"13:00\",\"quin_almoco_saida\":\"17:00\",\"quin_amoco_retorno\":\"18:00\",\"quin_saida\":\"22:00\",\"quin_intervalo\":\"\",\"sex_entrada\":\"13:00\",\"sex_almoco_saida\":\"17:00\",\"sex_amoco_retorno\":\"18:00\",\"sex_saida\":\"22:00\",\"sex_intervalo\":\"\",\"sab_entrada\":\"08:00\",\"sab_almoco_saida\":\"\",\"sab_amoco_retorno\":\"\",\"sab_saida\":\"12:00\",\"sab_intervalo\":\"00:15\"}]", "[{\"descricao\":\"SEGUNDA A SÁBADO DAS 13:00 ÀS 22:00\",\"dom_entrada\":\"\",\"dom_almoco_saida\":\"\",\"dom_amoco_retorno\":\"\",\"dom_saida\":\"\",\"dom_intervalo\":\"\",\"seg_entrada\":\"13:00\",\"seg_almoco_saida\":\"17:00\",\"seg_amoco_retorno\":\"18:00\",\"seg_saida\":\"22:00\",\"seg_intervalo\":\"\",\"ter_entrada\":\"13:00\",\"ter_almoco_saida\":\"17:00\",\"ter_amoco_retorno\":\"18:00\",\"ter_saida\":\"22:00\",\"ter_intervalo\":\"\",\"quar_entrada\":\"13:00\",\"quar_almoco_saida\":\"17:00\",\"quar_amoco_retorno\":\"18:00\",\"quar_saida\":\"22:00\",\"quar_intervalo\":\"\",\"quin_entrada\":\"13:00\",\"quin_almoco_saida\":\"17:00\",\"quin_amoco_retorno\":\"18:00\",\"quin_saida\":\"22:00\",\"quin_intervalo\":\"\",\"sex_entrada\":\"13:00\",\"sex_almoco_saida\":\"17:00\",\"sex_amoco_retorno\":\"18:00\",\"sex_saida\":\"22:00\",\"sex_intervalo\":\"\",\"sab_entrada\":\"08:00\",\"sab_almoco_saida\":\"\",\"sab_amoco_retorno\":\"\",\"sab_saida\":\"12:00\",\"sab_intervalo\":\"00:15\"}]" ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * altera um horário de trabalho já cadastrado.
 *
 * returns inline_response_201
 **/
exports.v1HorariosPATCH = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "contratacao_id" : 0,
  "status" : "sucesso"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

