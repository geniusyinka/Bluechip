import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

function App() {
  return (
    <div className="App flex">
      <div id="sidebar" className=" w-1/4  ">
        <Sidebar/>
      </div>
      <div id="homepage" className=" w-full pl-4 pr-4">
        <Home/>
      </div>
    </div>
  );
}

export default App;
