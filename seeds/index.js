const sequelize = require('../config/connection');
const Post = require('../models/post');
const PostData = require('./seeds.json');

async function seedDatabase() {
    await sequelize.sync({force: true});
    await Post.bulkCreate(PostData);
    process.exit(0);
}

seedDatabase();