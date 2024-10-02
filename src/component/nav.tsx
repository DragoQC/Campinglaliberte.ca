import { Link } from "react-router-dom";
import logo from "../img/logo.jpg";
import { useState, useEffect } from "react";
import { Nav_link } from "../interfaces/Nav_links";
function Nav() {
  const [is_open, set_is_open] = useState(false);
  const toggle_menu = () => {
    set_is_open(!is_open);
  };

  const [has_scrolled, set_has_scrolled] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', handle_scroll);

    return () => {
      // Clean up event listener on component unmount
      window.removeEventListener('scroll', handle_scroll);
    };
  }, []);
  function handle_scroll(){
    if (window.scrollY > 0) {
      set_has_scrolled(true); // User has scrolled
    } else {
      set_has_scrolled(false); // At the top of the page
    }
  };


  const nav_links: Nav_link[] = [
    { label: "Accueil", path: "/" },
    { label: "Tarifs", path: "/tarifs" },
    { label: "Nous Joindre", path: "/contact" },
  ]
  function render_menu() {

    return (
      <div className={`top-0 right-0 h-fit p-2 space-y-4 bg-[#E9EFEC]  duration-300 transition-all ${is_open ? "opacity-100" : "opacity-0"} rounded-2xl flex flex-col rounded-tl-2xl overflow-x-hidden overflow-y-visible`}>
        {nav_links.map((link, index) => (
          <Link to={link.path} className="" key={index}>
            <button key={index} className=" w-full p-2 rounded-xl">
              {link.label}
            </button>
          </Link>
        ))}
      </div>
    );


  }
  function render_burger() {
    if (is_open) {
      return (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12" // The X path
          />
        </svg>
      )
    } else {
      return (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7" // The burger menu path
          />
        </svg>
      )
    }
  }
  

  return (
    <nav className={`w-full flex flex-row whitespace-nowrap gap-2 top-0 align-middle bg-opacity-90 transition-all duration-300 z-10 p-4 fixed ${has_scrolled?"bg-[#E9EFEC]":"bg-transparent"}`}>
      <Link to="/">
        <div className="max-w-40 rounded-2xl overflow-hidden max-md:max-w-24">
          <img src={logo} alt="logo" />
        </div>
      </Link>
      <div className="flex flex-row w-full justify-end gap-2 max-md:hidden">
        {nav_links.map((link, index) => (
          <Link to={link.path} className="self-center" key={index}>
            <button key={index} className="h-fit">
              {link.label}
            </button>
          </Link>
        ))}
      </div>
      <div className={`w-full flex flex-row justify-end transform transition-transform duration-500
      ${is_open ? "translate-x-3" : "translate-x-[120px]"} 
       max-h-0 overflow-visible md:hidden gap-2`}>
        <div className="md:hidden h-fit">
          <button onClick={toggle_menu} className="text-white focus:outline-none ">
            {render_burger()}
          </button>
        </div>
        {render_menu()}
      </div>
    </nav>
  )
}
export default Nav;