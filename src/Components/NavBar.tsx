
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#e9f1e1] p-4 rounded-lg shadow flex items-center justify-between relative">
      {/* Logo / Brand */}
      <div className="text-2xl font-serif text-leaf">Enligt Marina</div>

      {/* Hamburger Toggle (always visible) */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="text-gray-700"
        aria-label="Toggle menu"
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Always Hamburger Menu */}
      {menuOpen && (
        <ul className="absolute top-16 left-0 right-0 bg-[#e9f1e1] rounded-lg shadow px-6 py-4 flex flex-col space-y-4 text-gray-700 z-50">
          <li onClick={() => setMenuOpen(false)} ><a href="#" className="hover:text-leaf transition-colors">Home</a></li>
          <li onClick={() => setMenuOpen(false)} ><a href="#" className="hover:text-leaf transition-colors">About</a></li>
          <li onClick={() => setMenuOpen(false)} ><a href="#" className="hover:text-leaf transition-colors">Services</a></li>
          <li onClick={() => setMenuOpen(false)} ><a href="#" className="hover:text-leaf transition-colors">Contact</a></li>
        </ul>
      )}
    </nav>
  );
}





