import { Link, useLocation } from "react-router"
import FilterPanel from "./FilterPanel"
export default function Header() {
  const location = useLocation()
  const isApartmentsPage = location.pathname.includes("/apartments")
    return (
<div className="navbar bg-base-100 shadow-sm fixed top-0 z-10">
  <div className="flex-1">
<Link to="/" className="btn btn-ghost text-xl">
<span>
  Apartly<span className="text-neutral font-bold">Space</span>
  </span>
</Link>
  </div>
  <div className="flex gap-2">
    {isApartmentsPage &&  <FilterPanel/>}
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <Link to="*" >
            Profile
                      </Link>
        </li>
        <li><Link to="*">Settings</Link></li>
        <li><Link to="*">Logout</Link></li>
      </ul>
    </div>
  </div>
</div>
    )
    
};
