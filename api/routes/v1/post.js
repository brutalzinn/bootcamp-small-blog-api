const postController = require('../../controllers/post');
const {tagsHandler} = require('../../utils/middleware/tags.middleware')

module.exports = (router) => {

    router.route('/post')
      .get(
        postController.lista
      )
      .post(tagsHandler,
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
  