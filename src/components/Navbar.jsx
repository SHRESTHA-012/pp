import { NavLink } from 'react-router-dom'

const Navbar = ({ isHome }) => {
  const inactiveClass = isHome ? 'text-white' : 'text-gray-300';

  return (
    <header className="header">
        <NavLink to="/" className="w-10 h-10 rounded-lg bg-white 
        items-center justify-center flex font-bold shadow-md">
            <p className="blue-gradient_text">SD</p>
        </NavLink>
        <nav className="flex text-lg gap-7 font-medium">
            <NavLink to="/about" className={({ isActive}) => isActive ?
            'text-blue-500' : inactiveClass}>
              About
            </NavLink>
             <NavLink to="/projects" className={({ isActive}) => isActive ?
            'text-blue-500' : inactiveClass}>
              Projects
            </NavLink>
        </nav>
    </header> 
  )
}

export default Navbar
