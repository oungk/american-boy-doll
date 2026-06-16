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
      <div style={{
        textAlign: 'right',
        fontFamily: "'Ballet', cursive",
        fontSize: '70px',
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
      minHeight: '100vh',
      margin: '0 auto',
    }}>
      {/* Body */}
      <img
          src={loversLaneSticker}
          alt=""
          style={{
            maxHeight: '40vh',
            width: 'auto',          
            objectFit: 'contain',
            display: 'block',
          }}
        />
      <img
          src={honkSticker}
          alt=""
          style={{
            maxHeight: '40vh',
            width: 'auto',          
            objectFit: 'contain',
            display: 'block',
          }}
        />
      <img
          src={beautifulSticker}
          alt=""
          style={{
            maxHeight: '40vh',
            width: 'auto',          
            objectFit: 'contain',
            display: 'block',
          }}
        />

    </div>

    {/* Mobile Responsive Styles */}
    <style>{`
      @media (min-width: 768px) {
        .main-content {
          flex-direction: row !important;
          align-items: flex-start !important;
          gap: 3rem !important;
        }
        .image-container {
          flex-shrink: 0 !important;
        }
        .description {
          text-align: left !important;
          max-width: 400px !important;
        }
        .name {
          top: -4rem !important;
          left: -2rem !important;
          transform: none !important;
        }
      }
      @media (max-width: 767px) {
        nav {
          position: relative !important;
          top: auto !important;
          left: auto !important;
          justify-content: center !important;
          margin-bottom: 2rem !important;
        }
      }
    `}</style>
  </div>
  );
}