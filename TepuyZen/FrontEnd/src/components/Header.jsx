import Logo from "../assets/img/logo.png"
import Nav from "./nav";

function Header() {
  return (
    <header className="top-0 flex-wrap z-[20] mx-auto flex w-full items-center justify-between border-b border-gray-500 pr-8 pl-8 bg-[#77BFA3]" style={{ backgroundColor: "#77BFA3" }}>
      
      <img src={Logo} className="logo w-40 -mt-4 -mb-2" alt="Logo"/>

      <Nav/>

    </header>
  );
}

export default Header;