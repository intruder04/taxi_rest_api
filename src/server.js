const app = require('./app');
const config  = require('./config');

// http server init
app.listen(config.server_port, (err) => {
  if (err) throw err;
  console.log(`Server is listening on port ${config.server_port}`);
});

