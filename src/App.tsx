import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import TodoList from './TodoList';


const App: React.FC = () => { 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter base_count={100} />
        <TodoList />
      </header>
    </div>
  );
}

export default App;
