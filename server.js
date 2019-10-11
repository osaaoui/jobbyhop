const express = require("express");
const path = require("path");

const app = express();
app.use(express.static("build"));

app.get("/api/customers", (req, res) => {
  const customers = [
    { id: 1, firstName: "John", lastName: "Doe" },
    { id: 2, firstName: "Brad", lastName: "Traversy" },
    { id: 3, firstName: "Mary", lastName: "Swanson" }
  ];

  res.json(customers);
});

app.get("*", function(req, res) {
  res.sendFile(path.resolve("build", "index.html"));
});

app.listen(process.env.PORT || 5000);
