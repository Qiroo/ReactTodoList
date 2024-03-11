import { useState } from "react";

function Input({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [existingTitles, setExistingTitles] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    if (!title || existingTitles.includes(title)) return;

    const newTask = { title, isChecked: false, id: Date.now() };
    setTitle("");
    onAddTask(newTask);
    setExistingTitles([...existingTitles, title]);
  }

  return (
    <div className="input-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter task..."
        />
        <button>
          <i className="fas fa-plus"></i>
        </button>
      </form>
    </div>
  );
}

export default Input;
