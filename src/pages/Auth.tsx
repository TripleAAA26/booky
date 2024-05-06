import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Form, Input } from 'antd'

import { User } from '../../types.ts'

import { getUsers } from '../services/authApi.ts'
import useAuth from '../hooks/useAuth.ts'
import { useRegister } from '../hooks/useRegister.ts'


export default function Auth() {
    const [ errorMessage, setErrorMessage ] = useState('')
    const { pathname } = useLocation()
    const navigate = useNavigate()
    const { login } = useAuth()
    const { register } = useRegister()

    async function onFinish(inputData: { username?: string, password: string, phone: string }) {
        if (pathname === '/login') {
            try {
                const data = await getUsers()
                const loggedUser = data?.find((user: User) => inputData.phone === user.phone)
                if (!loggedUser) {
                    setErrorMessage('phone number was not found')
                    return
                }

                if (inputData.password !== loggedUser.password) {
                    setErrorMessage('password was wrong')
                    return
                }

                setErrorMessage('')
                login(loggedUser)
                navigate('/')
            } catch (error) {
                console.log(error)
            }
        }

        if (pathname === '/register') {
            try {
                const data = await getUsers()
                const existingUser = data?.find((user: User) => inputData.phone === user.phone)

                if (existingUser) {
                    setErrorMessage('user exist with this phone number')
                    return
                }

                setErrorMessage('')
                const newUser = {
                    id: (data?.length + 1).toString(),
                    username: inputData.username as string,
                    phone: inputData.phone,
                    password: inputData.password,
                    favorite_books: [],
                    cart: [],
                    my_books: []
                }
                register(newUser)
                login(newUser)
                navigate('/')
            } catch (error) {
                console.log(error)
            }
        }
    }

    return (
        <div className="auth-container">
            <div className="auth-form">
                <h2 className="auth-header">
                    {pathname === '/register' ? 'Dizimnen ótiw' : 'Kiriw'}
                </h2>
                <Form
                    name="register"
                    onFinish={onFinish}
                >
                    <div className="error-message">
                        {errorMessage || ''}
                    </div>

                    {pathname === '/register' &&
                        <Form.Item
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Atıńızdı kiritiń',
                                }
                            ]}
                        >
                            <Input
                                size="large"
                                placeholder="Atıńız"
                            />
                        </Form.Item>
                    }
                    <Form.Item
                        name="phone"
                        rules={[
                            {
                                required: true,
                                message: 'Telefon nomerińizdi kiritiń'
                            },
                        ]}
                    >
                        <Input
                            size="large"
                            inputMode="tel"
                            placeholder="+998 __ ___ __ __"
                            type="text"
                        />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Parolıńızdı kiritiń'
                            }
                        ]}
                    >
                        <Input.Password
                            size="large"
                            placeholder="Parolıńız"
                        />
                    </Form.Item>
                    {pathname === '/login' &&
                        <Form.Item>
                            <p style={{ color: '#a1a1a1' }}>
                                Parolińizdi umıttıńız ba? &nbsp;
                                <span style={{ color: '#2d71ae' }}>Qayta tiklew</span>
                            </p>
                        </Form.Item>
                    }
                    <Form.Item>
                        <button className="auth-btn">
                            {pathname === '/register' ? 'Dizimnen ótiw' : 'Kiriw'}
                        </button>
                    </Form.Item>
                </Form>
                {pathname === '/register' ?
                    <p style={{ fontSize: '1.4rem' }}>
                        Aldinnan akkountingiz barma? &nbsp;
                        <Link to="/login" className="auth-link">Kiriw</Link>
                    </p>
                    :
                    <p style={{ fontSize: '1.4rem' }}>
                        Birinshi marte isletiwingizme? &nbsp;
                        <Link to="/register" className="auth-link">Dizimnen ótiw</Link>
                    </p>
                }
            </div>
        </div>
    )
}

