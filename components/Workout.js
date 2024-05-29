// Component to display a single workout
const Workout = ({ workout, onDelete }) => (
  <div className="bg-white p-4 rounded shadow mb-4 flex justify-between items-center">
    <div>
      <h3 className="text-lg font-bold">{workout.title}</h3>
      <p>Load (kg): {workout.load}</p>
      <p>Number of Reps: {workout.reps}</p>
      <p>Notes: {workout.notes}</p> {/* Display notes */}
    </div>
    <button onClick={() => onDelete(workout.id)} className="text-red-500">
      🗑️
    </button>
  </div>
);

export default Workout;


  