import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div id="wrapper">
        <div id="name">
          Rachael Dougherty
        </div>
        <div>
          <ol id="section">
            <li class="sections" id="github"><a href="https://github.com/rdougherty31" id = "githubLink">Github</a></li>
            <li class="sections" id="linkedIn"><a href="https://www.linkedin.com/in/rachael-dougherty-850742109/" id = "linkedInLink">LinkedIn</a></li>
            <li class="sections" id="resume"><a href="" id = "resumeLink">Resume</a></li>
            <li class="sections" id="portfolio"><a href="" id = "portfolioLink">Portfolio</a></li>
          </ol>
        </div>
      </div>
        {/* <img src={logo} className="App-logo" alt="logo" />
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
      </header>
    </div>
  );
}

export default App;
