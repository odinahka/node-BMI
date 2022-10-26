const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
res.sendFile(`${__dirname}/bmiCalculator.html`);
});

app.post("/", (req, res)=>{
const height = +req.body.height;
//console.log(height + weight);
const weight = +req.body.weight;
//console.log(height);
const bmi = Math.floor(weight/Math.pow(height, 2));
res.send("Your BMI is "+ bmi);
});

app.listen(3000, () => {
    console.log("server is listening on port 3000");
})