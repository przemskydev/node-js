const { Router } = require('express');
const router = Router();
const Post = require('../models/Post')

router.get('/', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts)
  } catch (error) {
    res.send(error)
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
    res.send(error)
  }
})

router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.json(post)
  } catch (error) {
    res.send(error)
  }
})

router.delete('/:id', async (req, res)=>{
  try {
    const removed = await Post.remove({_id: req.params.id})
    res.json(removed)
  } catch (error) {
    res.send(error)
  }
})

router.patch('/:id', async (req, res)=>{
  try {
    const updated = await Post.updateOne(
      {_id: req.params.id},
      { $set: {
        title: req.body.title
      }})
      res.json(updated)
  } catch (error) {
    res.send(error)
  }
})


module.exports = router;
