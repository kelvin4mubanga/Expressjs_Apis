const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to todo-api!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('todo-api running on port ' + PORT));
