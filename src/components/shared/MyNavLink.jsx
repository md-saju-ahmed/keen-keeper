import { NavLink } from "react-router";

const MyNavLink = ({ to, icon: Icon, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-2 font-semibold px-3 py-2 rounded-lg transition ${isActive
          ? "bg-[#244D3F] text-white hover:bg-[#1b3a30]"
          : "hover:bg-base-200"
        }`
      }
    >
      {Icon && <Icon />}
      {children}
    </NavLink>
  );
};

export default MyNavLink;