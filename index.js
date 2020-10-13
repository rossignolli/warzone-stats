const express = require('express')
const app = express()
const port = 3000
const API = require("call-of-duty-api")();





app.get('/', (req, res) => {

    API.login("vitorrossignolli@gmail.com", "casa102030@").then(() => {
        API.MWwz("Cromox#1784", API.platforms.battle)
          .then((data) => {
            res.send(data)
            console.log(data); // see output
          })
          .catch((err) => {
            console.log(err);
          });
      });


  
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
