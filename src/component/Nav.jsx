import { Link } from 'react-router-dom';
import { logout } from '../action/action';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';

const Nav = () => {

   const dispatch = useDispatch();
   const { replace } = useHistory();

   const handleClick = () => {
       dispatch(logout(replace));
   }

    return (
        <nav className="nav" >
           <Link to='/home'><h1>Yoshi's Blog Page</h1></Link> 
           <div className="nav-div">
                <Link to='/create'><h1>New Post</h1></Link>
                <button onClick={handleClick}>Log Out</button> 
           </div>
        </nav>
    );
}

export default Nav;
