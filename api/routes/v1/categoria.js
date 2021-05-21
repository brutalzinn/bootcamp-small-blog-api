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
      router.route('/categoria/:id')
      .delete(
      categoriaController.delCategoria
      )
      router.route('/categoria/:id')
      .get(
        categoriaController.getCategoria
      )

    
  
  
  
  
  
  
  }
  