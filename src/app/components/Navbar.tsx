// components/Navbar.js
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-layout p-4">
      <div className="container mx-auto flex justify-between items-center">
        <ul className="flex space-x-6">
          <li>
            <Link
              href="/"
              className="text-white relative group"
            >
              Home
              <span className="absolute left-0 bottom-0 w-0 h-1 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>
          <li>
            <Link
              href="/About"
              className="text-white relative group"
            >
              About
              <span className="absolute left-0 bottom-0 w-0 h-1 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>
          <li>
            <Link
              href="/Contact"
              className="text-white relative group"
            >
              Contact
              <span className="absolute left-0 bottom-0 w-0 h-1 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>
        </ul>
        <div>
          <Link
            href="/Login"
            className="text-white relative group"
          >
            Login
            <span className="absolute left-0 bottom-0 w-0 h-1 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
