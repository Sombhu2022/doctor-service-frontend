import { Link, NavLink } from "react-router-dom";
import dp from '../../../assets/profile.jpg'
import { CgDetailsMore } from "react-icons/cg";
import { useState } from "react";
const Navbar = () => {
 
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    
    <header className=" p-3 w-[100vw] flex justify-between lg:pl-20 lg:pr-20 md:pl-3 md:pr-3  bg-[#083b3b0f] border  border-[#8090c038] ">
      <div className="text-3xl font-serif"> DOCTOMEET </div>
      <nav className="flex items-center justify-center gap-2">
      <NavLink to={"/doctors"} className={"border rounded-[5px] p-3 pt-1 pb-1 border-[#8090c038]"}>
      Login 
      </NavLink>
      <Link className="overflow-hidden"> <img className="h-7 w-7 border rounded-[50%] " src={dp} alt="" /> </Link>
      <CgDetailsMore className="size-7 cursor-pointer" onClick={toggleMenu} />
      </nav>
      {menuOpen && (
        <div className="absolute top-16 right-3 w-40  shadow-lg flex gap-2 flex-col">
          <NavLink to="/link1" className="navlink">Link 1</NavLink>
          <NavLink to="/link2" className="navlink ">Link 2</NavLink>
          <NavLink to="/link3" className="navlink">Link 3</NavLink>
        </div>
      )}
      </header>
  );
};

export default Navbar;
