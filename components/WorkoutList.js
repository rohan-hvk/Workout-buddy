import Workout from './Workout';

const WorkoutList = ({ workouts, onDelete, onEdit }) => (
  <div>
    {workouts.map((workout) => (
      <Workout key={workout.id} workout={workout} onDelete={onDelete} onEdit={onEdit} />
    ))}
  </div>
);

export default WorkoutList;
