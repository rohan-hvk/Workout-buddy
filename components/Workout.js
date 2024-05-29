import { useState } from 'react';

// Component to display a single workout
const Workout = ({ workout, onDelete, onEdit }) => {
  // State to manage edit mode
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(workout.title);
  const [editedLoad, setEditedLoad] = useState(workout.load);
  const [editedReps, setEditedReps] = useState(workout.reps);
  const [editedNotes, setEditedNotes] = useState(workout.notes);

  // Function to handle the save of an edited workout
  const handleSave = () => {
    onEdit({ ...workout, title: editedTitle, load: editedLoad, reps: editedReps, notes: editedNotes });
    setIsEditing(false);
  };

  return (
    <div className="bg-white p-4 rounded shadow mb-4 flex justify-between items-center">
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            className="w-full p-2 mt-2 border rounded"
          />
          <input
            type="number"
            value={editedLoad}
            onChange={(e) => setEditedLoad(e.target.value)}
            className="w-full p-2 mt-2 border rounded"
          />
          <input
            type="number"
            value={editedReps}
            onChange={(e) => setEditedReps(e.target.value)}
            className="w-full p-2 mt-2 border rounded"
          />
          <input
            type="text"
            value={editedNotes}
            onChange={(e) => setEditedNotes(e.target.value)}
            className="w-full p-2 mt-2 border rounded"
          />
        </div>
      ) : (
        <div>
          <h3 className="text-lg font-bold">{workout.title}</h3>
          <p>Load (kg): {workout.load}</p>
          <p>Number of Reps: {workout.reps}</p>
          <p>Notes: {workout.notes}</p>
        </div>
      )}
      <div>
        {isEditing ? (
          <button onClick={handleSave} className="text-blue-500 mr-2">
            Save
          </button>
        ) : (
          <button onClick={() => setIsEditing(true)} className="text-blue-500 mr-2">
            ✏️
          </button>
        )}
        <button onClick={() => onDelete(workout.id)} className="text-red-500">
          🗑️
        </button>
      </div>
    </div>
  );
};

export default Workout;


  