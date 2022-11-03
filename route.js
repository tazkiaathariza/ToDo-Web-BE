const express = require("express");
const app = express();
const router = require("express").Router();
const login = require('./controllers/userController')
const todo = require('./controllers/todoController');
const open = require('./controllers/indexController');
const cors = require('cors');


router.get("/", open.index);
router.post("/login", login.userLogin);
router.post("/task/create", todo.createTask);
router.delete("/task/delete/:todo_id", todo.deleteTask);


module.exports = router;
