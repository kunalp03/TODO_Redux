import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo } from '../actions';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="tasklist">
      <div className="display-tasks">
        <h3>Your tasks:</h3>
        <ul className="tasks">
          {tasks.tasks.map((t) => (
            <li className="task" key={t.id}>
              {t.text}
              <button
                className="delete-btn"
                onClick={() => handleDelete(t.id)}>
                delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TaskList;