const express = require("express");
const router = express.Router();

const todoController = require('./controllers/todoController');
router.get("/todos", todoController.index);
router.get("/todos/:id", todoController.show);
router.post("/todos", todoController.store);
router.patch("/todos/:id", todoController.update);
router.patch("/todos/:id/toggle", todoController.toggle);
router.delete("/todos", todoController.destroy);

module.exports = router;
