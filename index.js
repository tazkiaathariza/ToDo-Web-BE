const app = express();
const bodyParser = require("body-parser");
const login = require('./controllers/userController')
const todo = require('./controllers/todoController');
const open = require('./controllers/indexController');
const express = require("express");
const cors = require("cors");


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  cors({
    origin: "*",
  })
);
app.use(cookieParser());

app.get("/", open.index);
app.post("/login", login.userLogin);
app.post("/task/create", todo.createTask);
app.delete("/task/delete/:todo_id", todo.deleteTask);


app.listen(process.env.PORT || 8000, function () {
    console.log(
      "Express server listening on port %d in %s mode",
      this.address().port,
      app.settings.env
    );
    console.log(`http://localhost:${this.address().port}`);
});
