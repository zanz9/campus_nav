import React, { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import axios from 'axios'

import '../App.css'

export default function Register() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        agreed: false
    });

    const handleChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setFormData({ ...formData, [e.target.name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/register', formData); 
            console.log(response.data);
        } catch (error) {
            console.error('Registration error:', error);
        }
    };



    return (
        <div className="text-center m-5-auto">
            <h2>Присоединяйтесь к нам</h2>
            <h5>Создайте свой личный аккаунт</h5>
            <form onSubmit={handleSubmit}>
                <p>
                    <label>Имя пользователя</label><br/>
                    <input type="text" name="username" value={formData.username} onChange={handleChange} required />
                </p>
                <p>
                    <label>Почта</label><br/>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </p>
                <p>
                    <label>Пароль</label><br/>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                </p>
                <p>
                    <input type="checkbox" name="agreed" id="checkbox" checked={formData.agreed} onChange={handleChange} required /> <span>Я согласен со всеми утверждениями в <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                </p>
                <p>
                    <button id="sub_btn" type="submit" className='bg-blue-900'>Регистрация</button>
                </p>
            </form>
            <footer>
                <p><Link to="/">Вернуться на главную страницу</Link>.</p>
            </footer>
        </div>
    )

}