import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Form from '@radix-ui/react-form';

import { Button } from '../../components/Button/Button';

export function LoginComponent() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Простая проверка учётки
    if (email === 'test' && password === 'test1234') {
      navigate('/home');
    } else {
      setError('Invalid credentials');
    }
  };

  const handleForgot = () => navigate('/reset');
  const handleRegister = () => navigate('/register');

  return (
    <div>
      <Form.Root asChild onSubmit={handleSubmit} className="space-y-4">
        <form>
          {/* Email Field */}
          <Form.Field name="email">
            <div className="flex flex-col">
              <Form.Label className="body-1 mb-1" htmlFor="email">
                Email
              </Form.Label>
              <Form.Control asChild>
                <input
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  required
                  placeholder="test"
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
                  placeholder="test1234"
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
