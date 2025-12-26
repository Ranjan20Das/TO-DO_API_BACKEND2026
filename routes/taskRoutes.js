const express = require("express");
const router = express.Router();
const { createTask, getTasks, updateTask, deleteTask } = require("../controllers/Taskcontroller");
const auth = require("../middleware/authmiddleware");

router.use(auth); // Protect all routes

router.post("/", createTask);
router.get("/", getTasks);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

module.exports = router;