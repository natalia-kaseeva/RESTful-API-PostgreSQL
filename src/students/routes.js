const { Router } = require('express');
const controller = require('./controller');

const router = Router();

// router.get('/', (req, res) => {
//     res.send('using api router');
// });

router.get('/', controller.getStudents);
router.post('/', controller.addStudent);
router.get('/:id', controller.getStudentById);
router.delete('/:id', controller.removeStudent);


module.exports = router;