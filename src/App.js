
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Music from './components/Music/Music';

function App() {
  return (
    <div className="">
      <Nav/>
      <div className=''>
        <Music/>
        {/* <Home/> */}
      </div>
      
    </div>
  );
}

export default App;
