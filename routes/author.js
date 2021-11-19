
const { Router } = require('express');
const controllers = require('../controllers/author');

const router = Router();

router.get('/', (req, res) => res.json({ message: "Welcome to sandesh application." }))

router.post('/author/add', controllers.create);
router.get('/author/all', controllers.findAll);
router.delete('/author/:id', controllers.delete);
router.put('/author/:id', controllers.update);
router.get('/author/:id', controllers.findOne);



module.exports = router;