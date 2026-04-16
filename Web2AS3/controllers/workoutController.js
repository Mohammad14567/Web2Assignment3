const { Workout } = require('../models');

exports.createWorkout = async (req, res) => {
  try {
    const workout = await Workout.create(req.body);
    res.status(201).json(workout);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAllWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.findAll();
    res.json(workouts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};