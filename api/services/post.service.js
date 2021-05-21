const {openFile,createModel,Insert,Update,Delete} = require('../utils/database.utils')

const create = async (body) => {
  await Insert('post',createModel(body))
}
const edit = async (body) => {
await Update('post',body)
}
const del = async (body) => {

await Delete('post',body)
}

const list = async (body) => {
 return await openFile('post')
}

module.exports = {
  create,
  list,
  del,
  edit
}
