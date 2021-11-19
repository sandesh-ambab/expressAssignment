const db = require('../models');
const Author = db.author;

// Add author
exports.create = (req, res) => {
    if (!req.body.authorname) {
        res.status(400).send({
            message: "Empty Data",
        });
        return;
    }

    //create a author
    const author = {
        authorname: req.body.authorname
    };

    //save author in the database
    Author.create(author)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: "Error Occurred, System Failed",
            });
        });
};

// Find All Author
exports.findAll = (req, res) => {
    Author.findAll()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: "Some error occurred while retrieving authors."
            });
        });
};

// find one user from id
exports.findOne= (req, res) => {
    const id = req.params.id;
    Author.findOne({where: { id: id }})
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: "Some error occurred while retrieving authors."
            });
        });
};

// delete particular author
exports.delete = (req, res) =>{
    id = req.params.id;
    console.log(id);

    Author.destroy({
        where: { id: id }
      })
        .then((data) => {
            if(!data){
                res.status(404).send({
                    message: `${id} was not found.`
                });
            }else {
                res.send({
                    message: "Author was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
              message: "Could not delete Author with id"+id
            });
        });
};

// update author
exports.update = (req, res) => {
    id = req.params.id;

    const author = {
        authorname: req.body.authorname
    };

    Author.update(author, { where: { id: id } })
        .then((data) => {
            if(!data){
                res.status(404).send({
                    message: `${id} was not found.`
                });
            }else{
                Author.findOne({ where : {id: id}})
                    .then((data) => {
                        res.send(data);
                    });
            }
        })
        .catch(err => {
            res.status(500).send({
              message: "Could not update Author with id"+id
            });
        });
};