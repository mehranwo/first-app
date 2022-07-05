import { useRef } from "react";
import { login } from "../../repository/auth";
import { Link } from 'react-router-dom';

function Login() {
    const formRef = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            password: e.target.password.value
        };

        login(data);


    }

    return (
        <form onSubmit={handleSubmit} ref={formRef} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
            <label htmlFor="email">email</label>
            <input name="email" type="email" />
            <label htmlFor="password">password</label>
            <input name='password' type="text" />
            <button>login</button>
            <Link to={'/login2'}>login2</Link>
        </form>
    );
}

export default Login;