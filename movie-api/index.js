const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to movie-api!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('movie-api running on port ' + PORT));
