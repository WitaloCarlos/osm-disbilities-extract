var Node = require('../models/').nodes;
var User = require('../models/').users;


module.exports={

    //Get All
    index(req, res, next){

      Node.findAll({include: User}).then(function(nodes){
        res.status(200).json(nodes);
      })
      .catch(function(error){

        res.status(500).json(error);
      });
     next();
    },

    showByTag(req, res,next){

        var keyTag = req.params.tag;
        Node.findAll(
            {include: User,
                where:{
                tags:{
                    $contains:{
                        [keyTag]: req.params.value
                    }
                }
            }}
        ).then(function(nodes){
             console.log('Success on Tag' );
        res.status(200).json(nodes);
      }).catch(function(error){
          console.log(error);
        res.status(500).json(error);
      });
    next();
    },

    showByCompositeTag(req, res,next){

        var keyTag = req.params.tag;
        var compositeTag = req.params.compositeTag;
        Node.findAll({include: User,
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
        Node.count({where: {tags:{
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

      Node.findById(req.params.id, {
           include: User
      }).then(function(node){
        res.status(200).json(node);
      }).catch(function(error){
          console.log(error);
        res.status(500).json(error);
      });
      next();
    }

    
}
