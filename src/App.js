
import './App.css';

import Header from './Header';
import AboutMe from './AboutMe';
import Education from './Education';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      {/* </header> */}

      <div className='content'>
        <div className='wrapper'>
          <Header />
          <AboutMe />
          <Education />

        </div>
        
        

      </div>




    </div>
  );
}

export default App;
