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

    show(req, res){

      Node.findById(req.params.id, {
           include: User
      }).then(function(node){
        res.status(200).json(node);
      }).catch(function(error){
          console.log(error);
        res.status(500).json(error);
      });
    }

    
}
