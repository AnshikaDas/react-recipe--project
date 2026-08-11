import { NavLink } from "react-router-dom";



const Navbar = () => {
    return (
    <div className="flex items-centjustify-center gap-x-10 text-sm mb-10">
        <NavLink className={(e) => e.isActive ? 'text-red-300' : ""} to="/">
            Home
        </NavLink>
        <NavLink className={(e) => e.isActive ? 'text-red-300' : ""} to="/recipies">
            Recipies
        </NavLink>
        <NavLink className={(e) => e.isActive ? 'text-red-300' :""} to="/About">
            About
        </NavLink>
        <NavLink className={`px-4 py-2 bg-gray-900 rounded ${(e) => e.isActive && 'text-red-300'}`}to="/Create-recipie">
            Create Recipie
        </NavLink>
    </div>
    );
};
export default Navbar