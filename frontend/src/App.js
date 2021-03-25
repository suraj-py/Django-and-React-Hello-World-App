import logo from './react_logo.svg';
import d_logo from './django_logo.svg';
import './App.css';

function App() {
  return (
    <>
      <div className='App'>
        <div className="App-header">

          <h1 className="heading">Django + React</h1>
            <h1>Hello World App</h1>

          <div className="row">
            <img src={d_logo} className="D-logo column " alt="logo" />
            <img src={logo} className="App-logo column" alt="logo" />
          </div>
          
          </div>
      </div>
    </>
  );
}

export default App;
