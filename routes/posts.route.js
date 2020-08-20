const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => res.send('Posts site with router'));

router.get('/spec', (req, res) => res.send('Single specific post'));



module.exports = router;
