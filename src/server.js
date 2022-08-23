const express = require('express')

const cors = require('cors')

const app = express()

const port = 5000

app.use(cors());

app.use('/login', (req, res) => {

  res.send({

    token: 'test123'

  });

});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

