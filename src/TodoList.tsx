import React, { useState } from 'react';

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [text, setText] = useState<string>('');

  const submitTodo = () => {
    setTodos([...todos, text]);
    setText('');
  };

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <ul>
        {todos.map((todo) => {
          return <li>{todo}</li>
        })}
      </ul>
      <button onClick={() => submitTodo() }>
        TODO
      </button>
      <button onClick={() => setTodos([])}>
        CLEAR
      </button>
    </div>
  );
}

export default TodoList;
