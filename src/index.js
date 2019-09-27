require('dotenv').config();

const app = require('./app');

app.listen(process.env.PORT || 4000, () => {
  console.log('Server running ' + process.env.PORT || 4000);
});
