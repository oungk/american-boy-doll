import { Link } from 'react-router-dom'
import americanBoyDoll from './imgs/american-boy-doll.png'

export default function Zine() {
  return (
    <div style={{
      minHeight: '100vh',
      color: 'white',
      padding: '2rem 1rem',
      position: 'relative',
    }}>
    
    {/* Nav */}
    <div className="shop-header" style={{
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
      <div className="zine-header-cta" style={{
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
      <iframe
        className="zine-media"
        src="https://drive.google.com/file/d/1aXfW1RLdSyAcYE2NYXc-bTb2762qf16N/preview"
        title="Zine preview"
        style={{
          width: '100%',
          maxWidth: '100%',
          height: '75vh',
          border: 0,
        }}
      />

    </div>

    <style>{`
      @media (max-width: 767px) {
        .zine-header {
          flex-direction: column !important;
          align-items: center !important;
          padding: 0 1rem !important;
        }
        .zine-header-cta {
          text-align: center !important;
        }
        .zine-media {
          height: 70vh !important;
        }
      }
    `}</style>
  </div>
  );
}