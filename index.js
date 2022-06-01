const express = require('express');
const PORT = process.env.PORT || 3000;
const usersRoutes = require('./src/users/routes');
const postsRoutes = require('./src/posts/post-routes');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World1');
});


app.use('/api/v1/', usersRoutes);
app.use('/api/v1/', postsRoutes);


app.listen(PORT, () => console.log(`Server has started on port ${PORT}`));