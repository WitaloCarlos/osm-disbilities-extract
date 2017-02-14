var nodes = require('../controllers/nodes');
var ways = require('../controllers/ways');


// USER API
module.exports = function(router){

// nodes
  router.get('/nodes', nodes.index); // GET ALL
  router.get('/nodes/:id', nodes.show); // GET BY ID
  router.get('/nodes/:tag/:value', nodes.showByTag); // GET BY TAG
  router.get('/count/nodes/:tag/:value', nodes.count); // GET COUNT
  router.get('/nodes/:tag/:value/:compositeTag/:compositeValue', nodes.showByCompositeTag); // GET COMPOSITE TAGS


// ways
  router.get('/ways', ways.index); // GET ALL
  router.get('/ways/:id', ways.show); // GET BY ID
  router.get('/ways/:tag/:value', ways.showByTag); // GET BY TAG
  router.get('/count/ways/:tag/:value', ways.count); // GET COUNT
  router.get('/ways/:tag/:value/:compositeTag/:compositeValue', ways.showByCompositeTag); // GET COMPOSITE TAGS


//HOME
  router.get('/', function(req, res){
  	res.json({message:'Welcome to OSM disabilities tags!'});
  });

  return router;
}
