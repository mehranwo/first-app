import { useState } from "react";
import { Link, useNavigate, useParams } from 'react-router-dom';

function Login2() {
    const [data, setData] = useState({
        username: '',
        password: ''
    });

    const navigate = useNavigate();
    const { userId, name } = useParams();
    console.log(userId, name);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value })
    };

    const handleClick = () => {
        navigate('/login');
    }

    // console.log('render');

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <input name='username' value={data.username} onChange={handleChange} type='text' />
            <input name='password' value={data.password} onChange={handleChange} type='text' />
            <button onClick={handleClick}>add</button>
            <Link to={'/login'}>login</Link>
        </div>

    )
}

export default Login2;