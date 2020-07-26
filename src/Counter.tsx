import React, { useState, useEffect } from 'react';

type Props = {
    base_count: number
}

const Counter: React.FC<Props> = ({base_count}) => {
  const [count, setCount] = useState<number>(base_count);

  useEffect(() => {
    document.title = `Count: ${count}`
  }, [count]);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Counter;
