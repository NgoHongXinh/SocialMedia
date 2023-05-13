
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Music from './components/Music/Music';
import Video from './components/Video/Video';
import Contact from './components/Contact';
import { Route, Routes, BrowserRouter} from 'react-router-dom'  

function App() {
  return (
    <div  className="w-full h-full bg-gray-800 transition duration-300 p-5">
        
                    <BrowserRouter>
                        <Nav/>
                       <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/music" element={<Music />} />
                        <Route path="/video" element={<Video />} />
                        <Route path="/contact" element={<Contact />} />
                       </Routes>
                    </BrowserRouter>
    </div>
  );
}

export default App;
