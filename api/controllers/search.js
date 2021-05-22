

const {getDatabaseInfo,searchFinder} = require('../services/search.service');

  const search = async (req,res,next) => {
    const {id} = req.params
  const response = await get(id)
  
     return res.status(200).json(response)
    }


  const customFinder = async (req,res,next) => {
    const {database,column,value} = req.params
  const response = await getDatabaseInfo(database,column,value)
  
     return res.status(200).json(response)
    }

module.exports = {
    customFinder,
    search
}