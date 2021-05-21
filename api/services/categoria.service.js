const {openFile,createModel,Insert,Update,Delete} = require('../utils/database.utils')

const create = async (body) => {
  await Insert('categoria',createModel(body))
}
const edit = async (body) => {
await Update('categoria',body)
}
const del = async (body) => {

await Delete('categoria',body)
}

const list = async (body) => {
 return await openFile('categoria')
}

module.exports = {
  create,
  list,
  del,
  edit
}
