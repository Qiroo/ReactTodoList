import Entry from "./Entry";

function List({ tasks, onDeleteTask, onUpdateTitle }) {
  return (
    <ul>
      {tasks.map((task) => (
        <Entry
          taskList={task}
          tasks={tasks}
          key={task.title}
          onDelete={onDeleteTask}
          onUpdateTitle={onUpdateTitle}
        />
      ))}
    </ul>
  );
}

export default List;
