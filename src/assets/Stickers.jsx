import { Link } from 'react-router-dom'
import americanBoyDoll from './imgs/american-boy-doll.png'
import loversLaneSticker from './imgs/lovers-lane-sticker.png'
import honkSticker from './imgs/honk-sticker.png'
import beautifulSticker from './imgs/beautiful-sticker.png'

export default function Stickers() {
  return (
    <div style={{
      minHeight: '100vh',
      color: 'white',
      padding: '2rem 1rem',
      position: 'relative',
    }}>
    
    {/* Nav */}
    <div className="bumper-header" style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',        
      justifyContent: 'space-between',
      width: '100%',
      padding: '0 2rem',
      gap: '1rem',
    }}>
      {/* Back to home icon — left */}
      <Link to="/" style={{ display: 'block', lineHeight: 0 }}>
        <img
          src={americanBoyDoll}
          alt=""
          style={{
            maxHeight: '20vh',
            width: 'auto',          
            objectFit: 'contain',
            display: 'block',
          }}
        />
      </Link>

      {/* Email contact — right */}
      <div className="bumper-header-cta" style={{
        textAlign: 'right',
        fontFamily: "'Ballet', cursive",
        fontSize: 'clamp(1.5rem, 8vw, 70px)',
        color: '#ff3131',
      }}>
        <a
          href="mailto:skylarhooley@gmail.com"
          target="_blank"
          style={{ color: 'inherit', textDecoration: 'none' }}
        >
          get yours now!
        </a>
      </div>
    </div>
  

      {/* Main content - Centered Layout */}
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '2rem',
      width: '100%',
      maxWidth: '800px',
      margin: '0 auto',
      padding: '1rem',
    }}>
      {/* Body */}
      <img
          className="bumper-stickers"
          src={loversLaneSticker}
          alt=""
          style={{
            width: '100%',
            maxWidth: '100%',
            height: 'auto',
            maxHeight: '28vh',
            objectFit: 'contain',
            display: 'block',
          }}
        />
      <img
          className="bumper-stickers"
          src={honkSticker}
          alt=""
          style={{
            width: '100%',
            maxWidth: '100%',
            height: 'auto',
            maxHeight: '28vh',
            objectFit: 'contain',
            display: 'block',
          }}
        />
      <img
          className="bumper-stickers"
          src={beautifulSticker}
          alt=""
          style={{
            width: '100%',
            maxWidth: '100%',
            height: 'auto',
            maxHeight: '28vh',
            objectFit: 'contain',
            display: 'block',
          }}
        />

    </div>

    <style>{`
      @media (max-width: 767px) {
        .bumper-header {
          flex-direction: column !important;
          align-items: center !important;
          padding: 0 1rem !important;
        }
        .bumper-header-cta {
          text-align: center !important;
        }
        .bumper-stickers {
          max-height: 22vh !important;
        }
      }
    `}</style>
  </div>
  );
}