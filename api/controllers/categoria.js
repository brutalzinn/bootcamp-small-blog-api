
const {create,list,del,edit} = require('../services/categoria.service');


const createCategoria= async (req,res,next) => {
    const { body } = req;

    await create(body)

    return res.status(200).send({
      mensagem: "Categoria registrado com sucesso."
    });
  }
  
  const delCategoria = async (req, res, next) => {
 const {id} = req.params
 await del(id)
    return res.status(200).send({
      mensagem: "Categoria deletado com sucesso."
    });
    
  }
  const lista = async (req,res,next) => {

  const response = await list()

    return res.status(200).json(response)
  }
  const editCategoria = async (req,res,next) => {
    const { body } = req;

    await edit(body)
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
  