const express = require('express');
const router = express.Router();
const Reminder = require('../models/reminder');

// GET all reminders
router.get('/', async (req, res) => {
  try {
    const reminders = await Reminder.find().sort({ dueDate: 1 });
    res.status(200).json(reminders);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch reminders.' });
  }
});

// POST new reminder
router.post('/', async (req, res) => {
  const { title, dueDate, description, completed } = req.body;

  // Basic validation
  if (!title || !dueDate) {
    return res.status(400).json({ error: 'Title and due date are required.' });
  }

  try {
    const reminder = new Reminder({ title, dueDate, description, completed });
    await reminder.save();
    res.status(201).json(reminder);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PUT update reminder by ID
router.put('/:id', async (req, res) => {
  try {
    const updated = await Reminder.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: 'Reminder not found.' });
    res.status(200).json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE reminder by ID
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Reminder.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Reminder not found.' });
    res.json({ message: 'Reminder deleted successfully.' });
  } catch (err) {
    res.status(500).json({ error: 'Error deleting reminder.' });
  }
});

module.exports = router;
