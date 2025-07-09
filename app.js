const express = require('express');
const cors = require('cors');
const { Post } = require('./models');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Get all posts
app.get('/posts', async (req, res) => {
    const posts = await Post.findAll();
    res.json(posts);
});

// Create a post
app.post('/posts', async (req, res) => {
    const { name, description } = req.body;
    const newPost = await Post.create({ name, description });
    res.json(newPost);
});

// Delete a post
app.delete('/posts/:id', async (req, res) => {
    const { id } = req.params;
    const post = await Post.findByPk(id);
    if (post) {
        await post.destroy();
        res.json(post);
    } else {
        res.status(404).json({ error: 'Post not found' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
