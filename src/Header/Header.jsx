import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <NavLink to="/posts">Posts</NavLink>                
                <NavLink to="/users">Users</NavLink>                
                <Link to="/contact">Contact Us</Link>
            </nav>
        </div>
    );
};

export default Header;