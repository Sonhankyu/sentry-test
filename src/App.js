import logo from './logo.svg';
import './App.css';
import * as Sentry from '@sentry/react';

function App() {

    const onError = () => {
        throw new Error('Error Test');
    }

    const btnStyles = {width: "200px", height: "50px", cursor: "pointer", fontSize: "22px"}

  return (
    <div className="App">
      <header className="App-header">
        <button style={btnStyles} onClick={onError}>Break the world</button>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
