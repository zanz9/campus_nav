import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios  from 'axios'

import '../App.css'

export default function Login() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    })

    const handleChange = (e) =>{
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/login', formData); 
            console.log(response.data); 
        } catch (error) {
            console.error('Login error:', error);
        }
    };

    return (
        <div className="text-center m-5-auto">
            <h2>Войти в систему </h2>
            <form onSubmit={handleSubmit}>
                <p>
                    <label>Имя пользователя или адрес электронной почты</label><br/>
                    <input type="text" name="username" value={formData.username} onChange={handleChange} required />
                </p>
                <p>
                    <label>Пароль</label>
                    <Link to="/forget-password"><label className="right-label">Забыли пароль?</label></Link>
                    <br/>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                </p>
                <p>
                    <button id="sub_btn" type="submit" className='bg-blue-900'>Логин</button>
                </p>
            </form>
            <footer>
                <p>Первый раз? <Link to="/register">Создать аккаунт</Link>.</p>
                <p><Link to="/">Вернуться на главную страницу</Link>.</p>
            </footer>
        </div>
    )
}