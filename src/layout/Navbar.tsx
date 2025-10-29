import { useState } from "react";
import { FaSearch, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import Button from "../components/ui/Button";
import { LOGIN } from "../commons/app.constants";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full border-b bg-white px-4 md:px-8 py-2 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center gap-2">Phynae</div>

      <div className="hidden md:flex flex-1 mx-4">
        <div className="flex items-center w-full border border-gray-300 rounded-full px-4 py-2 hover:shadow-sm">
          <FaSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search for anything"
            className="flex-1 outline-none text-sm"
          />
        </div>
      </div>

      <div className="hidden md:flex items-center gap-6 text-sm font-medium">
        <a href="#" className="hover:text-purple-600">
          Plans & Pricing
        </a>
        <a href="#" className="hover:text-purple-600">
          Teach on Phynae
        </a>
        <FaShoppingCart className="text-xl cursor-pointer" />
        {/* <button className="border px-3 py-1 rounded-md hover:bg-gray-100">
          Log in
        </button> */}
        <Button loading={true}>{LOGIN}</Button>
        <button className="border bg-black text-white px-3 py-1 rounded-md hover:bg-gray-800">
          Sign up
        </button>
      </div>

      {/* Mobile: Hamburger */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
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
            Teach on Udemy
          </a>
          <a href="#" className="py-2 border-b hover:text-purple-600">
            My learning
          </a>
          <div className="py-2 flex items-center gap-2 border-b">
            <FaShoppingCart /> Cart
          </div>
          <button className="border px-3 py-1 mt-3 rounded-md hover:bg-gray-100">
            Log in
          </button>
          <button className="border bg-black text-white px-3 py-1 mt-2 rounded-md hover:bg-gray-800">
            Sign up
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
