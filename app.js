require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Post } = require('./models');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// GET posts
app.get('/posts', async (req, res) => {
    const posts = await Post.findAll();
    res.json(posts);
});

// POST post
app.post('/posts', async (req, res) => {
    const { name, description } = req.body;
    try {
        const newPost = await Post.create({ name, description });
        res.status(201).json(newPost);
    } catch (error) {
        console.error('Error al crear post:', error);
        res.status(500).json({ error: 'No se pudo crear el post' });
    }
});

// DELETE post
app.delete('/posts/:id', async (req, res) => {
    const { id } = req.params;
    const post = await Post.findByPk(id);
    if (post) {
        await post.destroy();
        res.json(post);
    } else {
        res.status(404).json({ error: 'Post no encontrado' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
