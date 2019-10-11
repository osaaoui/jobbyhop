const express = require("express");
const path = require("path");

const app = express();

const publiPath = path.join(__dirname, "..", "public");
app.use(express.static(publiPath));

app.get("/api/customers", (req, res) => {
  const customers = [
    { id: 1, firstName: "John", lastName: "Doe" },
    { id: 2, firstName: "Brad", lastName: "Traversy" },
    { id: 3, firstName: "Mary", lastName: "Swanson" }
  ];

  res.json(customers);
});

app.get("*", function(req, res) {
  res.sendFile(path.join(publiPath, "index.html"));
});

const port = process.env.PORT || 3000;

app.listen(port, () => `Server running on port ${port}`);
