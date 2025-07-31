const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to ecommerce-api!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('ecommerce-api running on port ' + PORT));
