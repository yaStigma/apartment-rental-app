import { LayoutDashboard, Building2, HousePlus } from "lucide-react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

const getNavLinkClass = ({ isActive }: { isActive: boolean }) => {
  return clsx("", isActive && "menu-active");
};

export default function SideBar() {
  return (
    <nav className="menu bg-base-200 w-56 h-screen pt-20">
      <ul className="flex flex-col gap-2">
        <li>
          <NavLink to="/" className={getNavLinkClass}>
            <LayoutDashboard className="mr-2" /> Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/apartments" className={getNavLinkClass}>
            <Building2 className="mr-2" /> Apartments
          </NavLink>
        </li>
        <li>
          <NavLink to="/add-apartment" className={getNavLinkClass}>
            <HousePlus className="mr-2" /> Add Apartment
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
