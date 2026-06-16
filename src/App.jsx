import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './assets/Home'
import Zine from './assets/Zine'
import homeBackground from './assets/imgs/abd-studio-background.jpg';

function App() {

  return (
    <div style={{
      backgroundImage: `url(${homeBackground})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
    }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-zine" element={<Zine />} />
      </Routes>
    </div>
  )
}

export default App;