import React from 'react';
import * as Form from '@radix-ui/react-form';
import { useNavigate } from 'react-router-dom';

import { Button } from '../components/Button/Button';

export function SettingsPage() {
  const navigate = useNavigate();

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: save settings
    alert('Settings saved');
  };

  const handleLogout = () => {
    // TODO: perform logout
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-card-bg flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow w-full max-w-md p-6 space-y-6">
        <Form.Root asChild onSubmit={handleConfirm}>
          <form className="space-y-4">
            {/* Name */}
            <Form.Field name="name">
              <Form.Label className="body-1 block mb-1" htmlFor="name">
                Name
              </Form.Label>
              <Form.Control asChild>
                <input
                  id="name"
                  type="text"
                  placeholder="Value"
                  className="w-full border border-card-bg rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-active"
                />
              </Form.Control>
            </Form.Field>

            {/* E-mail */}
            <Form.Field name="email">
              <Form.Label className="body-1 block mb-1" htmlFor="email">
                E-mail
              </Form.Label>
              <Form.Control asChild>
                <input
                  id="email"
                  type="email"
                  placeholder="Value"
                  className="w-full border border-card-bg rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-active"
                />
              </Form.Control>
            </Form.Field>

            {/* Change password */}
            <Form.Field name="password">
              <Form.Label className="body-1 block mb-1" htmlFor="password">
                Change password
              </Form.Label>
              <Form.Control asChild>
                <input
                  id="password"
                  type="password"
                  placeholder="Value"
                  className="w-full border border-card-bg rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-active"
                />
              </Form.Control>
            </Form.Field>

            {/* Confirm button: default state index 1 (pressed style) */}
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

        {/* Logout button: default state index 3 (transparent + text-link) */}
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
