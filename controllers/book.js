const db = require('../models');
const Book = db.book;

exports.addBook = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({message: "Empty Data"});
        return;
    }

    Book.create(req.body)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({message: "Error Occurred, System Failed"});
        });
};

exports.findBook = (req, res) => {
    Book.findAll()
        .then((data) => {
            if(data){
                res.send(data);
            }else{
                res.send({
                    message: "Books not found"
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Some error occurred while retrieving books."
            });
        });
};

exports.findBookById = (req, res) => {
    const id = req.params.id;
    Book.findOne({ where: {id: id}})
        .then((data) => {
            if(data){
                res.send(data);
            }else{
                res.send({ message: "Book was not found" })
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Some error occurred while retrieving book."
            });
        });
};

exports.deleteBookById = (req, res) => {
    const id = req.params.id;
    Book.destroy({ where: {id: id} })
        .then((data) => {
            if(data){
                res.send({ message: "Book was deleted successfully"})
            }else{
                res.send({ message: "Book was not found"})
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Some error occurred while deleting book."
            });
        });
}

exports.updateBook = (req, res) => {
    const id = req.params.id;
    Book.update(req.body, { where: {id: id} })
        .then((data) => {
            if(data){
                Book.findOne({where: {id: id}})
                    .then((data) => {
                        if(data){
                            res.send(data)
                        }else{
                            res.send({message: "Book was not found"})
                        }
                    });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Some error occurred while updating book."
            });
        });
};