const {openFile,createModel,Insert,Update,Delete} = require('../utils/database.utils')
 
const getDatabaseInfo = async (database,column,value) => {
    const json = await openFile(database)
    return json.find((item)=>item[column] == value)
  }


  module.exports = {
      getDatabaseInfo
  }