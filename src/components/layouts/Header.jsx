import { useState } from "react"
import { Link, NavLink } from "react-router-dom"

function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);
    const hiddenMenu = ()=>{
      setToggleMenu(false)
    }
    return (
      <header className="sticky top-0 z-[10] py-6 bg-[--bg-color]">
        <div className="container relative flex justify-between items-center">
          <Link to="/" className="logo text-[clamp(22px,_5vw,_26px)] font-semibold text-[--white-color] ">Dark Weather</Link>
          <nav className="flex items-center gap-5  text-[--white-color]">
            <ul className={`${toggleMenu ? "active" : "hidden"} lg:flex items-center gap-5 text-lg text-[--hover-color]`}>
              <li>
                <NavLink onClick={hiddenMenu} to="/" >Home</NavLink>
              </li>
              <li>
                <NavLink onClick={hiddenMenu} to="/download" >Download App</NavLink>
              </li>
              <li>
                <NavLink onClick={hiddenMenu} to="/contact" >Contact us</NavLink>
              </li>
            </ul>
            <div className="flex items-center gap-4">
              <Link to="/signup" className="p-[8px_16px] rounded-[6px] text-base bg-[--menu-color] text-[--white-color]">Sign up</Link>
              <button onClick={()=> setToggleMenu(!toggleMenu)} className={`lg:hidden ${toggleMenu ? "fa-xmark" : "fa-bars"}  text-[--white-color] text-xl`}>
                <i className="fa-solid"></i>
              </button>
            </div>
          </nav>
        </div>
      </header>
    )
  }
  
  export default Header