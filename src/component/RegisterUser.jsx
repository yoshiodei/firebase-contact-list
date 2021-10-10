import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import { registerUser } from './../action/action';
import { useHistory } from 'react-router-dom';

const RegisterUser = () => {

    const { replace } = useHistory();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
      e.preventDefault();

      let email = e.target.elements.email.value;
      let password = e.target.elements.password.value;

      dispatch(registerUser(email, password, replace));
    }

    return (
        <section className="blogs">
            <h2>Register User</h2>
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
                    <button className="submit-btn" type="submit">Register</button>
                </form>
                <Link to="/login" className="anchor">I already have an account</Link>

        </section>
    );
}

export default RegisterUser;
