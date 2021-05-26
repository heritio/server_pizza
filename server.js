const express = require("express");

const Pizza = require("./models/pizzaModel");

const db = require("./db");

const app = express();

const pizzasRoute = require("./routes/pizzasRoute");

const userRoute = require("./routes/userRoute");

app.use("/api/pizzas", pizzasRoute);
app.use("/api/users", userRoute);

app.get("/", (req, res) => {
  res.send("Server working " + port);
});

const port = process.env.PORT || 8000;

app.listen(port, () => "Server running on port port");
