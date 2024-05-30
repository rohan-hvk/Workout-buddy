import { useState } from 'react';
import AddWorkoutForm from '../components/AddWorkoutForm';
import WorkoutList from '../components/WorkoutList';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa'; // Import icons

const Index = () => {
  const [workouts, setWorkouts] = useState([]);
  const [showForm, setShowForm] = useState(true); // State to manage form visibility

  // Function to add a new workout
  const addWorkout = (workout) => {
    setWorkouts([...workouts, { ...workout, id: Date.now(), completed: false }]);
  };

  // Function to delete a workout
  const deleteWorkout = (id) => {
    setWorkouts(workouts.filter((workout) => workout.id !== id));
  };

  // Function to edit a workout
  const editWorkout = (updatedWorkout) => {
    setWorkouts(
      workouts.map((workout) =>
        workout.id === updatedWorkout.id ? updatedWorkout : workout
      )
    );
  };

  // Function to toggle the completed status of a workout
  const toggleComplete = (id) => {
    setWorkouts(
      workouts.map((workout) =>
        workout.id === id ? { ...workout, completed: !workout.completed } : workout
      )
    );
  };

  // Function to toggle form visibility
  const toggleFormVisibility = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Workout Buddy</h1>
        <button onClick={toggleFormVisibility} className="text-xl">
          {showForm ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>
      {showForm && <AddWorkoutForm onAddWorkout={addWorkout} />}
      <WorkoutList
        workouts={workouts}
        onDelete={deleteWorkout}
        onEdit={editWorkout}
        onToggleComplete={toggleComplete}
      />
    </div>
  );
};

export default Index;
