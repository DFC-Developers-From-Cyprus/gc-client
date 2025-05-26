import React, { useState } from 'react';
import * as Form from '@radix-ui/react-form';

import { Button } from '../Button/Button';

interface ForgotComponentProps {
  /** Callback to return to login view */
  onCancel: () => void;
}

export function ForgotComponent({ onCancel }: ForgotComponentProps) {
  // шаги: 'initial' — ввод email и кнопки Cancel/Reset
  // 'confirm' — ввод кода и кнопка Submit
  const [step, setStep] = useState<'initial' | 'confirm'>('initial');

  const handleReset = () => {
    // переходим к шагу подтверждения
    setStep('confirm');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Submit clicked');
  };

  return (
    <div className="bg-white rounded-lg shadow p-6 w-full max-w-sm space-y-4">
      {step === 'initial' && (
        <Form.Root onSubmit={(e) => e.preventDefault()} className="space-y-4">
          {/* Email Field */}
          <Form.Field name="email">
            <div className="flex flex-col">
              <Form.Label className="body-3 mb-1" htmlFor="email">
                Email
              </Form.Label>
              <Form.Control asChild>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="Value"
                  className="w-full border border-card-bg rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-active"
                />
              </Form.Control>
              <Form.Message match="valueMissing" className="text-red-500 text-sm mt-1">
                Please enter your email
              </Form.Message>
              <Form.Message match="typeMismatch" className="text-red-500 text-sm mt-1">
                Invalid email address
              </Form.Message>
            </div>
          </Form.Field>

          {/* Action buttons */}
          <div className="flex items-center justify-between pt-2">
            <button type="button" onClick={onCancel} className="text-link body-1 hover:underline">
              Cancel
            </button>
            <Button
              states={[{ label: 'Reset Password' }, { label: 'Resetting...' }]}
              onClick={handleReset}
            />
          </div>
        </Form.Root>
      )}

      {step === 'confirm' && (
        <Form.Root onSubmit={handleSubmit} className="space-y-4">
          {/* Code Entry Field */}
          <Form.Field name="code">
            <div className="flex flex-col">
              <Form.Label className="body-3 mb-1" htmlFor="code"></Form.Label>
              <Form.Control asChild>
                <input
                  id="code"
                  type="text"
                  required
                  placeholder="ENTER CODE"
                  className="w-full border border-card-bg rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-active"
                />
              </Form.Control>
            </div>
          </Form.Field>

          {/* Submit Button */}
          <div className="pt-2">
            <Button
              states={[{ label: 'Submit' }, { label: 'Submitting...' }]}
              type="submit"
              className="w-full"
            />
          </div>
        </Form.Root>
      )}
    </div>
  );
}
