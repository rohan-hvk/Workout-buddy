import { useState } from 'react';
import AddWorkoutForm from '../components/AddWorkoutForm';
import WorkoutList from '../components/WorkoutList';

const Index = () => {
  const [workouts, setWorkouts] = useState([]);

  const addWorkout = (workout) => {
    setWorkouts([...workouts, { ...workout, id: Date.now() }]);
  };

  const deleteWorkout = (id) => {
    setWorkouts(workouts.filter((workout) => workout.id !== id));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Workout Buddy</h1>
      <AddWorkoutForm onAddWorkout={addWorkout} />
      <WorkoutList workouts={workouts} onDelete={deleteWorkout} />
    </div>
  );
};

export default Index;
