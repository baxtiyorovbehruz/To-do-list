
import { StyleTodo } from './style.Todo';
import { useCallback, useMemo, useState } from 'react';
import TodoItem from './TodoItem';

function Todo() {
  const [active, setActive] = useState('All');
  const [todos, setTodos] = useState([]);
  const [inputVal, setInputVal] = useState('');
  const [clickedEdit, setClickedEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const input = (e) => {
    setInputVal(e.target.value);
  };

  const add = useCallback(() => {
    setTodos((prev) => [...prev, { title: inputVal, isDone: false }]);
    setInputVal('');
  }, [inputVal]);

  function handleClickDelete(clickedItemIndex) {
    const deleteItem = todos.filter(
      (item, index) => index !== clickedItemIndex
    );

    setTodos(deleteItem);
  }

  function handleClickEdit(clickedEditItem, index) {
    setClickedEdit(true);
    setInputVal(clickedEditItem.title);
    setEditIndex(index);
  }
  function editConfirm() {
    const updatedTodos = todos.map((item, index) =>
      index === editIndex ? { ...item, title: inputVal } : item
    );
    setTodos(updatedTodos);
    setClickedEdit(false);
    setInputVal('');
    setEditIndex('');
  }
  function clickedCheckBox(indexItem) {
    const updated = todos.map((item, index) =>
      index === indexItem
        ? { ...item, isDone: item.isDone ? false : true }
        : item
    );
    setTodos(updated);
  }
  const filteredTodos = useMemo(() => {
    let filteredTodos = [];
    if (active === 'All') {
      filteredTodos = todos;
    } else if (active === 'Done') {
      filteredTodos = todos.filter((item) => item.isDone);
    } else if (active === 'Active') {
      filteredTodos = todos.filter((item) => !item.isDone);
    }

    return filteredTodos;
  }, [active, todos]);

  return (
    <StyleTodo>
      <nav>
        <input
          value={inputVal}
          onChange={(e) => input(e)}
          type="text"
          placeholder="Todo title"
        />
        {clickedEdit ? (
          <button onClick={() => editConfirm()}>Edit Confirm</button>
        ) : (
          <button onClick={add}>Add</button>
        )}
      </nav>
      <div className="cont">
        <div className="filter">
          <button
            style={{ backgroundColor: active === 'All' ? '#f80202' : '' }}
            onClick={() => setActive('All')}
          >
            All
          </button>
          <button
            style={{ backgroundColor: active === 'Active' ? '#ff0000' : '' }}
            onClick={() => setActive('Active')}
          >
            Active
          </button>
          <button
            style={{ backgroundColor: active === 'Done' ? '#ea0a0a' : '' }}
            onClick={() => setActive('Done')}
          >
            Done
          </button>
        </div>
        <div
          style={{ border: !todos.length ? 'none' : '2px solid black' }}
          className="all"
        >
          {filteredTodos.map((item, index) => (
            <TodoItem
              key={index}
              item={item}
              index={index}
              handleClickDelete={handleClickDelete}
              handleClickEdit={handleClickEdit}
              clickedCheckBox={clickedCheckBox}
            ></TodoItem>
          ))}
        </div>
      </div>
    </StyleTodo>
  );
}

export default Todo;
