const tagEnabled = process.env.TAGS
const {tagsGenerator} = require('../../utils/tags.generator')
const tagsHandler = (req, res, next) =>{
console.log(tagEnabled)
const { body } = req;
if(!tagEnabled){
    next()
}
req.body = { ...body,tags:tagsGenerator(body) }
next()
}

module.exports = {
    tagsHandler
}