const postController = require('../../controllers/post');


module.exports = (router) => {

    router.route('/post')
      .get(
        postController.lista
      )
      .post(
        postController.createPost
      )
      .put(
      postController.editPost
      )
      router.route('/post/find/:column/:value')
      .get(
        postController.getCustomFinder
      )
      router.route('/post/:id')
      .delete(
      postController.delPost
      )
      router.route('/post/:id')
      .get(
        postController.getPost
      )

    
  
  
  
  
  
  
  }
  