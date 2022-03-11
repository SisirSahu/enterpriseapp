import React, { useEffect, useState } from 'react';
type Person = {
  firstName: string;
  lastName: string;
  age: number;
  address?: string;
  isLegal: boolean;
};

const Customer = (props: Person) => {
  const [title, settitle] = useState('Enterprise app');
  const { firstName, lastName, age, isLegal } = props;
  const handleEvent = () => {
    alert("i'm a button");
  };
  useEffect(() => {
    alert('Welcome to Enterprise app');
  }, []);

  return (
    <div className="App">
      <h1
        onClick={() => settitle('React Enterprise App')}
        style={{ color: 'blue', marginBottom: '5rem' }}
      >
        {title}
      </h1>
      <button
        onClick={handleEvent}
        style={{
          height: '3rem',
          width: '10rem',
          color: 'white',
          backgroundColor: 'tomato',
          borderRadius: '5px',
          fontSize: '18px',
        }}
      >
        Click Me
      </button>
    </div>
  );
};

export default Customer;
