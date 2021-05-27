export default function NavItem({ href, isActive, children }) {
    return (
      <li>
        <a href={href} className={`block px-8 pt-2 rounded-md ${isActive ? 'bg-amber-100 text-amber-700' : ''}`}>
          {children}
        </a>
      </li>
    )
  }