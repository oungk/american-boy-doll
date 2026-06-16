const NAV_STYLE = {
	display: 'flex',
	justifyContent: 'center',
	flexWrap: 'wrap',
	gap: '1.5rem',
	fontSize: '16px',
	zIndex: 10,
	width: '100%',
	marginBottom: '2rem',
  }
  
  import { NavLink } from 'react-router-dom'

export const NAV_LINKS = [
  { to: '/', label: 'home' },
  { to: '/my-zine', label: 'my zine' },
]

export default function SiteNav({ links = NAV_LINKS, linkColor }) {
  return (
    <nav className="site-nav" style={NAV_STYLE}>
      {links.map(({ to, label }) => (
        <NavLink
          key={to}
          to={to}
          end={to === '/'}  
          className={({ isActive }) => (isActive ? 'active' : undefined)}
          style={{
            textDecoration: 'none',
            fontWeight: 'normal',
            ...(linkColor !== undefined ? { color: linkColor } : {}),
          }}
        >
          {label}
        </NavLink>
      ))}
    </nav>
  )
}