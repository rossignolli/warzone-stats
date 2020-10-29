const express = require('express')
const app = express()
const port = 3333
const API = require("call-of-duty-api")();

require('dotenv/config');

app.use(express.json());


console.log(process.env.USER)
console.log(process.env.PASSWORD)



app.post('/', (req, res) => {

  const {gamerTag, plataform} = req.body



     API.login(process.env.USER, process.env.PASSWORD).then(() => {
        API.MWwz(gamerTag, plataform)
           .then((data) => {
             res.send(data)
             console.log(data); // see output
           })
           .catch((err) => {
             console.log(err);
             res.json({ error: err })
           });
       });


  
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
