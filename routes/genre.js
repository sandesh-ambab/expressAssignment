const { Router } = require('express');
const controllers = require('../controllers/genre');

const router = Router();

router.get('/', (req, res) => res.json({ message: "Welcome to sandesh application." }))

router.post('/genre/add', controllers.create);
router.get('/genre/all', controllers.findAll);
router.delete('/genre/:id', controllers.delete);
router.put('/genre/:id', controllers.update);
router.get('/genre/:id', controllers.findOne);



module.exports = router;