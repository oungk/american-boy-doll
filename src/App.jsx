import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './assets/Home'
import Zine from './assets/Zine'
import Stickers from './assets/Stickers'
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
        <Route path="/bumper-stickers" element={<Stickers />} />
      </Routes>
    </div>
  )
}

export default App;