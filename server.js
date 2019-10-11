const express = require("express");
const path = require("path");

const app = express();

const publicPath = path.join(__dirname, "..", "public");
app.use(express.static(publicPath));

app.get("/api/customers", (req, res) => {
  const customers = [
    { id: 1, firstName: "John", lastName: "Doe" },
    { id: 2, firstName: "Brad", lastName: "Traversy" },
    { id: 3, firstName: "Mary", lastName: "Swanson" }
  ];

  res.json(customers);
});

/*app.get("*", function(req, res) {
  res.sendFile(path.join(publicPath, "index.html"));
});*/

const port = process.env.PORT || 5000;

app.listen(port, () => `Server running on port ${port}`);
