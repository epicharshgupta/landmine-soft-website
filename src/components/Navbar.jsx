
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white text-black">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

        {/* Logo */}
        <h1 className="text-2xl font-bold">
          <span className="text-blue-500">Landmine</span> Soft
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">

          <Link to="/" className="hover:text-blue-400">Home</Link>
          <Link to="/about" className="hover:text-blue-400">About</Link>
          <Link to="/services" className="hover:text-blue-400">Services</Link>
          <Link to="/careers" className="hover:text-blue-400">Careers</Link>
          <Link to="/contact" className="hover:text-blue-400">Contact</Link>

          <Link
            to="/login"
            className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Login
          </Link>

        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black px-8 pb-4 space-y-3">

          <Link to="/" className="block">Home</Link>
          <Link to="/about" className="block">About</Link>
          <Link to="/services" className="block">Services</Link>
          <Link to="/careers" className="block">Careers</Link>
          <Link to="/contact" className="block">Contact</Link>
          <Link to="/login" className="block text-blue-400">Login</Link>

        </div>
      )}

    </nav>
  );
}

export default Navbar;

