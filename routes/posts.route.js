const { Router } = require('express');
const router = Router();
const Post = require('../models/Post')

router.get('/', (req, res) => res.send('Posts site with router'));

router.post('/', (req, res) => {
  const post = new Post({
    title: req.body.title,
    desc: req.body.desc
  })

  post.save()
    .then(data => res.json(data))
    .catch(error => console.log(error))
})


module.exports = router;
