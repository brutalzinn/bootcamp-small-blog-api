const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const router = require('./routes/index');
router(app);

const port = 8000

app.listen(port, () => {
});


module.exports = app;


