const express = require('express');
const app = express();
const db = require('./models');
const workoutCtrl = require('./controllers/workoutController');

app.use(express.json());

app.post('/workouts', workoutCtrl.createWorkout);
app.get('/workouts', workoutCtrl.getAllWorkouts);

const PORT = 3000;

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});