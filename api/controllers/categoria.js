
const {create,list,del,edit} = require('../services/categoria.service');


const createCategoria= async (req,res,next) => {
 

    return res.status(200).send({
      mensagem: "Categoria registrado com sucesso."
    });
  }
  
  const delCategoria = (req, res, next) => {
  
    return res.status(200).send({
      mensagem: "Categoria deletado com sucesso."
    });
    
  }
  const lista = async (req,res,next) => {

  
    return res.status(200).send(lista)
  }
  const editCategoria = async (req,res,next) => {
   
  
    return res.status(200).send({
      mensagem: "Categoria alterado com sucesso."
    });
  }
  
  module.exports = {
    createCategoria,
    delCategoria,
    lista,
    editCategoria
  }
  