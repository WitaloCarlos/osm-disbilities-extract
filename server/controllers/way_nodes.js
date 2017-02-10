var Node = require('../models/').nodes;
var User = require('../models/').users;


module.exports={

    //Get All
    index(req, res){

      Node.findAll().then(function(nodes){
        res.status(200).json(nodes);
      })
      .catch(function(error){

        res.status(500).json(error);
      });
    },

    showByTagWheelchair(req, res){
        
        Node.findAll(
            {include: User,
                where:{
                tags:{
                    $contains:{
                        wheelchair: req.params.value
                    }
                }
            }}
        ).then(function(nodes){
             console.log('Success on Wheelchair' );
        res.status(200).json(nodes);
      }).catch(function(error){
          console.log(error);
        res.status(500).json(error);
      });
    
    }