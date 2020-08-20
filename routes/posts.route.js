const { Router } = require('express');
const router = Router();
const Post = require('../models/Post')

router.get('/', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts)
  } catch (error) {
    res.send({ message })
  }
});

router.post('/', async (req, res) => {
  const post = new Post({
    title: req.body.title,
    desc: req.body.desc
  })

  try {
    const savePost = await post.save()
    res.json(savePost)
  } catch (error) {
    res.send({ message })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.json(post)
  } catch (error) {
    res.send({ message })
  }
})


module.exports = router;
