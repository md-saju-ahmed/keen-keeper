import { Link } from "react-router";
import logo from "../../assets/images/logo.svg";
import MyNavLink from "./MyNavLink";
import {
  BsGraphUp,
  BsClock,
  BsHouseDoor,
  BsList
} from "react-icons/bs";

const Navbar = () => {

  const navItems = [
    {
      path: "/",
      text: "Home",
      icon: BsHouseDoor,
    },
    {
      path: "/timeline",
      text: "Timeline",
      icon: BsClock,
    },
    {
      path: "/stats",
      text: "Stats",
      icon: BsGraphUp,
    },
  ];

  return (
    <div className="bg-base-100 border-b border-base-200">
      <div className="navbar w-full max-w-7xl mx-auto px-4 md:px-5 py-3">

        {/* Logo */}
        <div className="flex-1">
          <Link to="/">
            <img src={logo} alt="Keen Keeper" className="w-28 md:w-32" />
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="flex-none lg:hidden">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost">
              <BsList />
            </label>

            <ul className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-base-100 rounded-box w-40">
              {navItems.map((item, index) => (
                <li key={index}>
                  <MyNavLink to={item.path} icon={item.icon}>
                    {item.text}
                  </MyNavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex flex-none">
          <ul className="menu menu-horizontal px-1 gap-2">
            {navItems.map((item, index) => (
              <li key={index}>
                <MyNavLink to={item.path} icon={item.icon}>
                  {item.text}
                </MyNavLink>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Navbar;