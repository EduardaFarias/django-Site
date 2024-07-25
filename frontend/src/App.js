import logo from './logo.svg';
import './App.css';
import AppBar from "./components/AppBar"
import Home from "./screens/Home"
import { Provider } from "react-redux"

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppBar></AppBar>
        <Home></Home>
      </div>
    </Provider>
  );
}

export default App;
