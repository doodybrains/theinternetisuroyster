const express = require('express');
const app = express();
const local = 5000;
app.set('port', (process.env.PORT || local));
app.listen(app.get('port'), () => {
  console.log('app up');
});
