import { useState } from "react";

function Entry({ taskList, tasks, onDelete, onUpdateTitle }) {
  const [isChecked, setIsChecked] = useState(taskList.isChecked);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(taskList.title);

  function handleCheck() {
    setIsChecked(!isChecked);
  }

  function handleDelete() {
    onDelete(taskList.id);
  }

  function handleEdit() {
    setIsEditing(true);
  }

  function handleSave() {
    if (editedTitle === taskList.title) {
      setIsEditing(false);
      return;
    }

    if (!editedTitle || tasks.some((task) => task.title === editedTitle)) {
      return;
    }

    setIsEditing(false);
    onUpdateTitle(taskList.id, editedTitle);
  }

  function handleInputChange(event) {
    setEditedTitle(event.target.value);
  }

  return (
    <li className={`entry ${isChecked ? "checked" : ""}`}>
      {isEditing ? (
        <input
          type="text"
          value={editedTitle}
          onChange={handleInputChange}
          autoFocus
        />
      ) : (
        <span style={{ textDecoration: isChecked ? "line-through" : "none" }}>
          {taskList.title}
        </span>
      )}
      <div>
        {!isEditing && (
          <button onClick={handleCheck}>
            <i className="fas fa-check"></i>
          </button>
        )}
        {!isEditing && (
          <button onClick={handleEdit}>
            <i className="fas fa-edit"></i>
          </button>
        )}
        {isEditing && (
          <button onClick={handleSave}>
            <i className="fas fa-save"></i>
          </button>
        )}
        {!isEditing && (
          <button onClick={handleDelete}>
            <i className="fas fa-trash-alt"></i>
          </button>
        )}
      </div>
    </li>
  );
}

export default Entry;
