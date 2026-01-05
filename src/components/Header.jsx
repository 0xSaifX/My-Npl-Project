import { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi"; // hamburger icons

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "NPL 경매", path: "/second-page" },
    { name: "시행 · 시공", path: "/third-page" },
    { name: "인테리어", path: "/fourth-page" },
    { name: "NPL학원", path: "/fifth-page" },
    { name: "법률자문", path: "/sixth-page" },
    { name: "사금융", path: "/seventh-page" },
    { name: "법률자문", path: "/eight-page" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-300">
      <div className="flex items-center justify-between max-w-[1920px] mx-auto px-4 md:px-8 h-20">
        {/* Logo */}
        <div className="text-[22px] ml-16 sm:ml-26 font-bold font-['Readex_Pro'] uppercase">
          FULLHOUSE
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-8">
          {links.map((link, idx) => (
            <Link
              key={idx}
              to={link.path}
              className="hover:text-orange-600 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl focus:outline-none"
          >
            {menuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-white border-t border-gray-300 overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-4 p-4">
          {links.map((link, idx) => (
            <Link
              key={idx}
              to={link.path}
              className="hover:text-blue-600 transition-colors"
              onClick={() => setMenuOpen(false)} // close menu on click
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
