const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to blog-api!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('blog-api running on port ' + PORT));
