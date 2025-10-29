import { useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import Button from "../components/ui/Button";
import { LOGIN, REGISTER } from "../commons/app.constants";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full border-b border-primary-300 bg-white px-4 md:px-8 py-2 flex items-center justify-between">
      <div className="flex items-center gap-2 font-primary font-semibold text-xl text-primary-200">
        Phynae
      </div>

      <div className="hidden md:flex flex-1 mx-4 items-center justify-end">
        <div className="flex items-center w-[50%] border border-gray-300 rounded-full px-4 py-2 hover:shadow-sm">
          <FaSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search for anything"
            className="flex-1 outline-none text-sm"
          />
        </div>
      </div>

      <div className="hidden md:flex items-center gap-6 text-sm font-medium">
        <a href="#" className="hover:text-primary-200 font-secondary">
          Plans & Pricing
        </a>
        <a href="#" className="hover:text-primary-200">
          Teach on Phynae
        </a>
        <div className="flex gap-1">
          <Button className="max-h-8">{LOGIN}</Button>
          <Button variant="outline" className="max-h-8">
            {REGISTER}
          </Button>
        </div>
      </div>

      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t flex flex-col p-4 md:hidden">
          <div className="flex items-center w-full border border-gray-300 rounded-full px-4 py-2 mb-4">
            <FaSearch className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search for anything"
              className="flex-1 outline-none text-sm"
            />
          </div>
          <a href="#" className="py-2 border-b hover:text-purple-600">
            Teach on Phynae
          </a>
          <a href="#" className="py-2 border-b hover:text-purple-600">
            Plans & Pricing
          </a>
          <div className="flex flex-col gap-2 mt-3">
            <Button>Log in</Button>
            <Button variant="outline">Sign up</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
