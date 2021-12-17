const router = require('express').Router()
const { User, Post } = require('../models')

// GET one user
router.get('/users/:id', async function ({ params: { id } }, res) {
  const user = await User.findOne({ where: { id }, include: [Post] })
  res.json(user)
})

// POST one user
router.post('/users', async function ({ body }, res) {
  const user = await User.create(body)
  res.json(user)
})

module.exports = router
