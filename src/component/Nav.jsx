import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="nav" >
           <Link to='/'><h1>Yoshi's Blog Page</h1></Link> 
           <Link to='/create'><h1>New Post</h1></Link> 
        </nav>
    );
}

export default Nav;
