var Way = require('../models/').ways;
var WayNode = require('../models/').way_nodes;
var Node = require('../models/').nodes;
var User = require('../models/').user;
var sequelize = require('sequelize');


module.exports={

    //Get All
    index(req, res, next){

      Way.findAll({include: [{model: WayNode, include:[{model:Node}]}]}).then(function(nodes){
        res.status(200).json(nodes);
      })
      .catch(function(error){

        res.status(500).json(error);
      });
     next();
    },

    showByTag(req, res,next){

        var keyTag = req.params.tag;
        Way.findAll({include: [{model: WayNode, include:[{model:Node}]}],
                     where: {tags:{$contains:{ [keyTag]: req.params.value } }            }
        }).then(function(ways){
             console.log('Success on Tag' );



        res.status(200).json(ways);
      }).catch(function(error){
          console.log(error);
        res.status(500).json(error);
      });
    next();
    },

    showByCompositeTag(req, res,next){

        var keyTag = req.params.tag;
        var compositeTag = req.params.compositeTag;
        Way.findAll({include: [{model: WayNode, include:[{model:Node}]}],
                     where: {$and: [ {tags:{$contains:{ [keyTag]: req.params.value }}}, 
                     {tags:{$contains:{ [compositeTag]: req.params.compositeValue }}}  ]}          
        }).then(function(ways){
             console.log('Success on Tag' );



        res.status(200).json(ways);
      }).catch(function(error){
          console.log(error);
        res.status(500).json(error);
      });
    next();
    },

    count(req, res,next){

        var keyTag = req.params.tag;
        Way.count({where: {tags:{
                    $contains:{
                        [keyTag]: req.params.value
                    }
                }            }
        }).then(function(waysCount){
             console.log('Success on Tag' );
            var result = {};
            result.count = waysCount;


        res.status(200).json(result);
      }).catch(function(error){
          console.log(error);
        res.status(500).json(error);
      });
    next();
    },

    show(req, res, next){

      Way.findById(req.params.id, {
           
      }).then(function(node){
        res.status(200).json(node);
      }).catch(function(error){
          console.log(error);
        res.status(500).json(error);
      });
      next();
    }

    
}
