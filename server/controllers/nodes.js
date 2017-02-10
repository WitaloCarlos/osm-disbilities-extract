var Node = require('../models/').nodes;
var User = require('../models/').users;


module.exports={

    //Get All
    index(req, res){

      Node.findAll({include: User}).then(function(nodes){
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
    },

    create(req, res){
      Node.create(req.body)
      .then(function(newNode){
        res.status(200).json(newNode);
      }).catch(function(error){
        res.status(500).json(error);
      });
    },

    update(req, res){
      Node.update(req.body, {
        where: {
          id: req.params.id
        }
      }).then(function(updated){
        res.status(200).json(updated);
      }).catch(function(error){
        res.status(500).json(error);
      });
    },

    delete(req, res){
      Node.destroy({
        where: {
          id: req.params.id
        }
      }).then(function(deleted){
        res.status(200).json(deleted);
      }).catch(function(error){
        res.status(500).json(error);
      });
    }
}
