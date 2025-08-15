import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Form from '@radix-ui/react-form';
import { useDispatch } from 'react-redux';

import { Button } from '../../components/Button/Button';

import { setUser } from '@/core/store/authSlice';
import { login } from '@/api/auth';

export function LoginComponent() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Простая проверка учётки
    //     if (email === 'test' && password === 'test1234') {
    //       navigate('/home');
    //     } else {
    //       setError('Invalid credentials');
    //     }

    try {
      console.log(username, password);
      const response = await login({ username: username, password: password });
      dispatch(setUser(response));
      navigate('/home');
    } catch (err) {
      setError('Invalid data');
      console.error('Login failed: ', err);
    }
  };

  const handleForgot = () => navigate('/reset');
  const handleRegister = () => navigate('/register');

  return (
    <div>
      <Form.Root asChild onSubmit={handleSubmit} className="space-y-4">
        <form>
          {/* Username Field */}
          <Form.Field name="username">
            <div className="flex flex-col">
              <Form.Label className="body-1 mb-1" htmlFor="username">
                Username
              </Form.Label>
              <Form.Control asChild>
                <input
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  type="text"
                  required
                  placeholder="Enter your username"
                  className="w-full bg-white border border-border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-active"
                />
              </Form.Control>
            </div>
          </Form.Field>

          {/* Password Field */}
          <Form.Field name="password">
            <div className="flex flex-col">
              <Form.Label className="body-1 mb-1" htmlFor="password">
                Password
              </Form.Label>
              <Form.Control asChild>
                <input
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  required
                  placeholder="Enter your password"
                  className="w-full bg-white border border-border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-active"
                />
              </Form.Control>
            </div>
          </Form.Field>

          {/* Ошибка */}
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}

          {/* Sign In Button */}
          <Button
            type="submit"
            initialIndex={0}
            states={[
              { label: 'Sign in' },
              { label: 'Sign in' },
              { label: 'Sign in' },
              { label: 'Sign in', textClass: 'text-link' },
            ]}
            transitionMap={{ 0: 0 }}
            className="w-full mt-2"
          />
        </form>
      </Form.Root>

      {/* Ссылки */}
      <div className="flex justify-between mt-4">
        <button type="button" onClick={handleForgot} className="text-link body-1 hover:underline">
          Forgot password?
        </button>
        <button type="button" onClick={handleRegister} className="text-link body-1 hover:underline">
          Register
        </button>
      </div>
    </div>
  );
}
