const { Router } = require('express');
const controllers = require('../controllers/book');

const router = Router();

router.post('/book/add', controllers.addBook);
router.get('/book/all', controllers.findBook);
router.get('/book/:id', controllers.findBookById);
router.delete('/book/:id', controllers.deleteBookById);
router.put('/book/:id', controllers.updateBook);

module.exports = router;