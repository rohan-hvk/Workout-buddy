import Workout from './Workout';

const WorkoutList = ({ workouts, onDelete }) => (
  <div>
    {workouts.map((workout) => (
      <Workout key={workout.id} workout={workout} onDelete={onDelete} />
    ))}
  </div>
);

export default WorkoutList;

