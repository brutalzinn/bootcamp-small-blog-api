const categoriaController = require('../../controllers/categoria');


module.exports = (router) => {

    router
      .route('/categoria')
      .get(
        categoriaController.lista
      )
      .post(
        categoriaController.createCategoria
      )
      .put(
      categoriaController.editCategoria
      )
      .delete(
      categoriaController.delCategoria
      )
    
  
  
  
  
  
  
  }
  