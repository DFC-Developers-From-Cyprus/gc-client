// src/ui/pages/SettingsPage.tsx
import React, { useState, useEffect } from 'react';
import * as Form from '@radix-ui/react-form';
import { useNavigate } from 'react-router-dom';

import { Button } from '../components/Button/Button';
import { SuccessComponent } from '../components/SuccessComponent/SuccessComponent';

export function SettingsPage() {
  const navigate = useNavigate();
  const [showSuccess, setShowSuccess] = useState(false);

  // Обработчик сабмита формы
  const handleConfirm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Показ уведомления об успехе
    setShowSuccess(true);
  };

  // Редирект на /profile через 5 секунд после успеха
  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => navigate('/profile'), 5000);
      return () => clearTimeout(timer);
    }
  }, [showSuccess, navigate]);

  const handleLogout = () => {
    // TODO: perform logout
    navigate('/');
  };

  if (showSuccess) {
    return (
      <div className="flex items-center justify-center">
        <SuccessComponent message="Your settings have been saved." highlight="saved" />
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md space-y-6">
        <Form.Root asChild onSubmit={handleConfirm}>
          <form className="space-y-4">
            {/* Name */}
            <Form.Field name="name">
              <Form.Label className="body-3 block mb-1" htmlFor="name">
                Name
              </Form.Label>
              <Form.Control asChild>
                <input
                  id="name"
                  type="text"
                  placeholder="Value"
                  className="w-full border border-border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-active"
                  required
                />
              </Form.Control>
              <Form.Message match="valueMissing" className="text-red-500 text-sm mt-1">
                Please enter your name
              </Form.Message>
            </Form.Field>

            {/* E-mail */}
            <Form.Field name="email">
              <Form.Label className="body-3 block mb-1" htmlFor="email">
                E-mail
              </Form.Label>
              <Form.Control asChild>
                <input
                  id="email"
                  type="email"
                  placeholder="Value"
                  className="w-full border border-border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-active"
                  required
                />
              </Form.Control>
              <Form.Message match="valueMissing" className="text-red-500 text-sm mt-1">
                Please enter your email
              </Form.Message>
              <Form.Message match="typeMismatch" className="text-red-500 text-sm mt-1">
                Please enter a valid email address
              </Form.Message>
            </Form.Field>

            {/* Change password */}
            <Form.Field name="password">
              <Form.Label className="body-3 block mb-1" htmlFor="password">
                Change password
              </Form.Label>
              <Form.Control asChild>
                <input
                  id="password"
                  type="password"
                  placeholder="Value"
                  className="w-full border border-border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-active"
                  required
                />
              </Form.Control>
              <Form.Message match="valueMissing" className="text-red-500 text-sm mt-1">
                Please enter a password
              </Form.Message>
            </Form.Field>

            {/* Confirm button */}
            <div className="pt-4">
              <Button
                type="submit"
                initialIndex={0}
                states={[
                  { label: 'Confirm' },
                  { label: 'Confirm' },
                  { label: 'Confirming...' },
                  { label: 'Confirm', textClass: 'text-link' },
                ]}
                transitionMap={{ 0: 0 }}
                className="w-full"
              />
            </div>
          </form>
        </Form.Root>

        {/* Logout button */}
        <div className="pt-2">
          <Button
            onClick={handleLogout}
            initialIndex={3}
            states={[
              { label: 'Log out' },
              { label: 'Logging out...' },
              { label: 'Logging out' },
              { label: 'Log out', textClass: 'text-link' },
            ]}
            transitionMap={{ 3: 1, 1: 3 }}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}
