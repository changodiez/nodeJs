const express = require('express')
const app = express()
const port = 3000

app.get ("/calculation/:calculate", (req, res) => {
    const calculate = req.query.calculate
    const firstNum = req.query.firstNum;
    const secondNum = req.query.secondNum;
    console.log("the user  has requested to add 2 numbers");
    if (calculate == "add") {
        let result = parseInt(firstNum) + parseInt(secondNum);
        res.send(`${result}`);
      } else if (calculate == "substruct") {
        let result = parseInt(firstNum) - parseInt(secondNum);
        res.send(`${result}`);
      } else if (calculate == "multiple") {
        let result = parseInt(firstNum) * parseInt(secondNum);
        res.send(`${result}`);
      } else if (calculate == "devide") {
        let result = parseInt(firstNum) / parseInt(secondNum);
        res.send(`${result}`);
      }
    
})


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))