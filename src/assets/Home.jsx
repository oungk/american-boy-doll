import { Link } from 'react-router-dom'
import starSticker from './imgs/star-sticker.png'
import americanBoyDoll from './imgs/american-boy-doll.png'
import calicoCritter from './imgs/calico-critter.png'

export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      color: 'white',
      padding: '2rem 1rem',
      position: 'relative',
    }}>
    
    {/* Nav */}
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',        
      justifyContent: 'space-between',
      width: '100%',
      padding: '0 2rem',
      gap: '1rem',
    }}>
      {/* Back to home icon — left */}
      <a
        href="https://oungk.github.io/sky-hooley-portfolio/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: 'block', lineHeight: 0 }}
      >
        <img
          src={starSticker}
          alt="Back to portfolio"
          style={{
            maxHeight: '10vh',
            width: 'auto',
            objectFit: 'contain',
            display: 'block',
          }}
        />
      </a>
    </div>
  

    {/* Main content - Centered Layout */}
    <div className="home-main" style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      maxWidth: '800px',
      minHeight: '100vh',
      margin: '0 auto',
      marginTop: '-5rem',
    }}>
      <h1>
        choose your destiny
      </h1>
      <div className="abd-icons" style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',        
      justifyContent: 'center',
      width: '100%',
      padding: '0 2rem',
      gap: '1rem',
    }}>
      {/* Zine — left */}
      <Link to="/my-zine" style={{ display: 'block', lineHeight: 0 }}>
        <img
          src={americanBoyDoll}
          alt=""
          style={{
            maxHeight: '70vh',
            width: 'auto',          
            objectFit: 'contain',
            display: 'block',
          }}
        />
      </Link>

      {/* Bumper stickers — right */}
      <Link to="/bumper-stickers" style={{ display: 'block', lineHeight: 0 }}>
        <img
          src={calicoCritter}
          alt=""
          style={{
            maxHeight: '50vh',
            width: 'auto',          
            objectFit: 'contain',
            display: 'block',
          }}
        />
      </Link>

    </div>

    </div>

    <style>{`
      @media (max-width: 767px) {
        .home-main {
          margin-top: 0 !important;
          min-height: auto !important;
        }
        .home-main h1 {
          font-size: 2.5rem !important;
          text-align: center;
        }
        .abd-icons {
          flex-direction: column !important;
          gap: 2rem !important;
          padding: 0 1rem !important;
        }
        .abd-icons img {
          max-height: 35vh !important;
          width: auto !important;
          max-width: 100% !important;
        }
      }
    `}</style>
  </div>
  );
}