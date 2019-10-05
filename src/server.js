require('dotenv').config();
const express = require('express');
const cors = require('cors');
const auth = require('./config/auth');
const routes = require('./routes');

const app = express();

app.use(auth.passport.initialize());

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running on port ' + process.env.PORT || 3000);
});
