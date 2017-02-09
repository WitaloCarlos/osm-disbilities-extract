var nodes = require('../controllers/nodes');


// USER API
module.exports = function(router){

// nodes
  router.get('/nodes', nodes.index); // GET ALL
  router.get('/nodes/:id', nodes.show); // GET BY ID


//HOME
  router.get('/', function(req, res){
  	res.json({message:'Welcome to OSM disabilities tags!'});
  });

  return router;
}
