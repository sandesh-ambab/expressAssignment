const db = require('../models');
const Genre = db.genre;

// Add genre
exports.create = (req, res) => {
    if (!req.body.type) {
        res.status(400).send({message: "Empty Data"});
        return;
    }

    //create a genre
    const genre = { type: req.body.type };

    //save genre in the database
    Genre.create(genre)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({message: "Error Occurred, System Failed"});
        });
};

// Find All genre
exports.findAll = (req, res) => {
    Genre.findAll()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({message: "Some error occurred while retrieving genre."});
        });
};

// find one user from id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Genre.findOne({ where: { id: id } })
        .then((data) => {
            if (data) {
                res.send(data);
            } else {
                res.send({ message: `${id} was not found` })
            }
        })
        .catch((err) => {
            res.status(500).send(err.message);
        });
};

// delete particular genre
exports.delete = (req, res) => {
    id = req.params.id;

    Genre.destroy({ where: { id: id } })
        .then((data) => {
            if (!data) {
                res.status(404).send({message: `${id} was not found.`});
            } else {
                res.send({message: "genre was deleted successfully!"});
            }
        })
        .catch(err => {
            res.status(500).send({message: "Could not delete genre with id"});
        });
};

// update genre
exports.update = (req, res) => {
    id = req.params.id;
    const genre = { type: req.body.type };

    Genre.update(genre, { where: { id: id } })
        .then((data) => {
            if (data){
                Genre.findOne({ where: {id: id}})
                .then((data) => {
                    if(data){
                        res.send(data);
                    }else{
                        res.send({message: `${id} was not found.`});
                    }
                })
            }            
        })
        .catch(err => {
            res.status(500).send({message: "Could not update genre with id"});
        });
};