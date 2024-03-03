import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const NavLinks = ({ categories }) => {
  const handleClick = (category) => {
    setCategories(categories.map((cat) => (cat === category ? !cat : cat)));
  };

  return (
    <>
      {categories.map((category, index) => (
        <NavLink
        key={index}
        to={category.to}
        onClick={() => handleClick(category)}
        className={`${category.active ? "text-red-500" : ""} hover:bg-[#98C9A3] hover:text-white hover:shadow-lg hover:rounded-full p-5`}
      >
        {category.name}
      </NavLink>
      ))}
    </>
  );
};

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [categories, setCategories] = useState([
    { name: "Home" , to: "/", active: false },
    { name: "Info", to: "/info", active: false },
    { name: "Guias", to: "/guias", active: false },
    { name: "Opinion", to: "/opinion", active: false },
    { name: "Blog", to: "/blog", active: false },
  ]);

  const toggleNavbar = () => {
    console.log("toggleNavbar");
    setIsOpen(!isOpen);
  };

  const handleClick = (category) => {
    setCategories(categories.map((cat) => (cat === category ? { ...cat, active: !cat.active } : cat)));
  };

  return (
    <>
      <nav className="flex w-1/3 justify-end">
        <div className="hidden w-full justify-between md:flex  text-xl">
          <NavLinks categories={categories} />
        </div>

        <div className="md:hidden">
          <button onClick={toggleNavbar}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="flex basis-full flex-col items-center space-y-4">
          <NavLinks categories={categories} />
        </div>
      )}
    </>
  );
};

export default Nav;