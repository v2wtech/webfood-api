require('dotenv').config();

const app = require('./app');

app.listen( process.env.APP_PORT || 4000, () => console.log('Server running on port 4000'));
