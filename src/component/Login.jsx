import React from 'react';
import { Link } from 'react-router-dom';
import { login } from './../action/action';
import { useHistory } from 'react-router-dom';
import { useDispatch} from 'react-redux';

const Login = () => {

    const dispatch = useDispatch();
    const { replace } = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        let email = e.target.elements.email.value;
        let password = e.target.elements.password.value;
        
        dispatch(login(email, password, replace));  

    }

    return (
        <section className="blogs">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                    <label>Email</label>
                    <input 
                    type="email"
                    name="email"
                    placeholder="Please enter email"
                    />
                    <label>Password</label>
                    <input 
                    type="password"
                    name="password"
                    placeholder="Please enter password"
                    />
                    <button className="submit-btn" type="submit">Login</button>
                </form>
                <Link to="/" className="anchor">I do not ave an account yet</Link>
        </section>
    );
}

export default Login;
