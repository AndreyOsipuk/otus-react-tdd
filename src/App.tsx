import { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState('');
  const [items, setItems] = useState<string[]>([]);

  const handleClick = () => {
    setItems([...items, value]);
    setValue('');
  };

  return (
    <div className="App">
      <input
        data-testid="input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        hidden={!value}
        data-testid="button"
        onClick={handleClick}
        style={{ backgroundColor: 'red' }}
      >
        click
      </button>
      {items.map((item, idx) => (
        <p key={idx} data-testid="list-item">
          {item}
        </p>
      ))}
    </div>
  );
}

export default App;
