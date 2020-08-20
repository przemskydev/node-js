const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => res.send('Posts site with router'));

module.exports = router;
