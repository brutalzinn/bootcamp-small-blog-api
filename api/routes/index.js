const { Router } = require('express');
const { name, version } = require('../../package.json');


const routesV1Post = require('./v1/post');
const routesV1Categoria = require('./v1/categoria');
const routesV1Search = require('./v1/extra/search');




module.exports = (app) => {

  app.get('/', (req, res, next) => {
    res.send({ name, version });
  });

  const routesV1 = Router();

  routesV1Search(routesV1);
routesV1Post(routesV1);

  routesV1Categoria(routesV1)
  
  app.use('/v1', routesV1);



}
