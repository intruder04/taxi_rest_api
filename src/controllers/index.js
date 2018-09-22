const config = require('../config');
// const db = require('../queries');

async function event(req, res, next) {

  console.log('body-',req.body);
  res.json({ result: 'asd' })

  // save to db:
  // db.any('insert into data (request, type, result)' +
  // 'values($1, $2, $3)', [req.body, 'square', JSON.stringify(squaredArr)])
  // .then(  
  //   result => res.json({ result: squaredArr }),
  //   error => res.status(400).send(error)
  // );

}

module.exports = event;
