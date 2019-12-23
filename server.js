const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
//const generatePassword = require("password-generator");
const app = express();

//serve static files from the react app
//app.use(express.static(path.join(__dirname, "client/build")));

//Put all api endpoints under '/api'
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/api/customers", (req, res) => {
  let { firstName } = req.query;
  //console.log(req.query.firstName);
  const customers = [
    { id: 1, firstName: "John", lastName: "Doe" },
    { id: 2, firstName: "Brad", lastName: "Smith" },
    { id: 3, firstName: "Mary", lastName: "Atkins" }
  ];
  console.log("the customer's name is " + firstName);
  var str = customers.filter(x => x.firstName == firstName);
  //console.log("the customer's name is " + str);
  //res.json(str);
  res.send(str);
});

app.get("*", (re, res) => {
  //res.sendFile(path.join(__dirname + "/client/build/index.html"));
  res.sendFile(path.join(__dirname + "/client/public/index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Customers listening on ${port}`);
