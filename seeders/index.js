const { User, Post } = require('../models')

async function seeder() {
  console.log('----Seeding Data----')

  await User.bulkCreate(require('./userSeed.js'))
  await Post.bulkCreate(require('./postSeed.js'))

  console.log('----Data Seeded----')

  process.exit()
}

seeder()
