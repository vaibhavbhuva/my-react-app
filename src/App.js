import logo from './logo.svg';
import './App.css';
import Welcome from './components/welcome/Welcome';
import Page from './components/page/Page';
import Registration from './components/registration/Registration';
function App() {
  const numbers = [1, 2, 3, 4, 5];
  const listItems = numbers.map((number) =>
    <li key={number.toString()} >{number}</li>
  );
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React 
        </a>
        <Registration />
        <Welcome name="Vaibhav Bhuva" />;
        <Page />
        <ul>{listItems}</ul>
      </header>
    </div>
  );
}

export default App;
