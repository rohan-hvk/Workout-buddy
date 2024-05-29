import { useState } from 'react';

// Component for the workout form
const AddWorkoutForm = ({ onAddWorkout }) => {
  // State variables
  const [title, setTitle] = useState('');
  const [load, setLoad] = useState('');
  const [reps, setReps] = useState('');
  const [notes, setNotes] = useState(''); // new state for notes

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (!title || !load || !reps) return; //validation
    onAddWorkout({ title, load, reps, notes }); // Include notes in the workout object
    setTitle(''); 
    setLoad(''); 
    setReps(''); 
    setNotes(''); 
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded">
      <div className="mb-4">
        <label className="block text-gray-700">Exercise Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 mt-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Load (in kg)</label>
        <input
          type="number"
          value={load}
          onChange={(e) => setLoad(e.target.value)}
          className="w-full p-2 mt-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Number of Reps</label>
        <input
          type="number"
          value={reps}
          onChange={(e) => setReps(e.target.value)}
          className="w-full p-2 mt-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Notes</label> {/* notes */}
        <input
          type="text"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="w-full p-2 mt-2 border rounded"
        />
      </div>
      <button type="submit" className="w-full bg-green-500 text-white p-2 rounded">
        Add Workout
      </button>
    </form>
  );
};

export default AddWorkoutForm;



