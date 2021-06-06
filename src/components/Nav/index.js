export default function Nav({ children }) {
  return (
    <nav className="p-0">
      <ul className="flex space-x-2 text-right">
        {children}
      </ul>
    </nav>
  )
}