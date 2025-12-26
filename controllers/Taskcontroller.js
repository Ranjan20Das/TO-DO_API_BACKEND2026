const Task = require("../models/task");

// CREATE TASK
exports.createTask = async (req, res) => {
    try {
        const task = await Task.create({
            title: req.body.title,
            completed: req.body.completed || false,
            userId: req.user.id,
        });
        res.status(201).json(task);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// GET ALL TASKS
exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ userId: req.user.id });
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// UPDATE TASK
exports.updateTask = async (req, res) => {
    try {
        const task = await Task.findOneAndUpdate(
            { _id: req.params.id, userId: req.user.id },
            req.body,
            { new: true }
        );
        if (!task) return res.status(404).json({ message: "Task not found" });
        res.json(task);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// DELETE TASK
exports.deleteTask = async (req, res) => {
    try {
        const task = await Task.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
        if (!task) return res.status(404).json({ message: "Task not found" });
        res.json({ message: "Task deleted" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};