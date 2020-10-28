const express = require('express')
const app = express()
const port = 3333
const API = require("call-of-duty-api")();

app.use(express.json());




app.post('/', (req, res) => {

  const {gamerTag, plataform} = req.body



     API.login("vitorrossignolli@gmail.com", "casa102030@").then(() => {
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
