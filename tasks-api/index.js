const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to tasks-api!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('tasks-api running on port ' + PORT));
