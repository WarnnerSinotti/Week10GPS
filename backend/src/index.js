const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes");


const app = express();

mongoose.set("useCreateIndex", true);
mongoose.connect(
  "mongodb+srv://warnner:warnner@cluster0.zffzy.mongodb.net/Week10?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use(cors()); //acesso para qualquer aplicação externa
app.use(express.json());
app.use(routes);

app.listen(3333);
