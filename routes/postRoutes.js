const router = require('express').Router()
const { Post, User } = require('../models')

// GET all posts
router.get('/posts', async function (req, res) {
  const posts = await Post.findAll({ include: [User] })
  res.json(posts)
})

// POST one post
router.post('/posts', async function ({ body }, res) {
  const post = await Post.create(body)
  res.json(post)
})

// DELETE one post
router.delete('/posts/:id', async function ({ params: { id } }, res) {
  await Post.destroy({ where: { id } })
  res.sendStatus(200)
})

module.exports = router
