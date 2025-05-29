import { memo } from 'react'
import { Link } from 'react-router-dom'

const Header = ({ firstname }: { firstname: string }) => (
  <header className="flex justify-between items-center p-4 border-b">
    <nav className="space-x-4">
      <Link to="/" className="hover:underline">Home</Link>
      <Link to="/blog" className="hover:underline">Blog</Link>
    </nav>
    <span className="text-sm italic">{firstname}</span>
  </header>
)

export default memo(Header)
