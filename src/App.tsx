import React from 'react';
import { Button } from './components/Button';

const App = () => {
  return <Button text="Test Button" onClick={() => alert('Clicked!')} />;
};

export default App;
