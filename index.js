const express = require('express');
const PORT = process.env.PORT || 3000;
const studentRoutes = require('./src/students/routes');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World1');
});


app.use('/api/v1/students', studentRoutes);


app.listen(PORT, () => console.log(`Server has started on port ${PORT}`));