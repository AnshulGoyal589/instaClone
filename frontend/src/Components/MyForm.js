import React, { useState } from 'react';
import { socket } from '../socket';

const MyForm = () => {
  const [value, setValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function onSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
  
    console.log('Before emitting foo');
    socket.emit('foo', 'affec');
  
    setIsLoading(false);
  }
  
  

  return (
    <form onSubmit={ onSubmit }>
      <input onChange={ e => setValue(e.target.value) } />

      <button type="submit" disabled={ isLoading }>Submit</button>
    </form>
  );
}

export default MyForm