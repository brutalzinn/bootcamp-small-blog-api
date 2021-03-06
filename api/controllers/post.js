
const {create,list,del,edit,get,getCustom} = require('../services/post.service');


const createPost= async (req,res,next) => {
    const { body } = req;

    await create(body)

    return res.status(200).send({
      mensagem: "Post registrado com sucesso."
    });
  }
  
  const delPost = async (req, res, next) => {
 const {id} = req.params
 await del(id)
    return res.status(200).send({
      mensagem: "Post deletado com sucesso."
    });
    
  }
  

  const getPost = async (req,res,next) => {
    const {id} = req.params
  const response = await get(id)
  
     return res.status(200).json(response)
    }
  const lista = async (req,res,next) => {

  const response = await list()

    return res.status(200).json(response)
  }
  const editPost = async (req,res,next) => {
    const { body } = req;

    await edit(body)
    return res.status(200).send({
      mensagem: "Post alterado com sucesso."
    });
  }
  
  module.exports = {
    createPost,
    delPost,
    getPost,
    lista,
    editPost
  }
  