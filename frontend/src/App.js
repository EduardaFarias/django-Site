import logo from './logo.svg';
import './App.css';
import AppBar  from "./components/AppBar"
import Home from "./screens/Home"

function App() {
  return (
    <div className="App">
      <AppBar></AppBar>
      <Home></Home>
    </div>
  );
}

export default App;
