// src/ui/components/ForgotComponent/ForgotComponent.tsx
import React, { useState, useEffect } from 'react';
import * as Form from '@radix-ui/react-form';
import { useNavigate } from 'react-router-dom';

import { Button } from '../../components/Button/Button';
import { SuccessComponent } from '../../components/SuccessComponent/SuccessComponent';

interface ForgotComponentProps {
  /** Callback to return to login view */
  onCancel: () => void;
}

export function ForgotComponent({ onCancel }: ForgotComponentProps) {
  // шаги: 'initial' — ввод email и кнопки Cancel/Reset
  // 'success' — уведомление и редирект
  const [step, setStep] = useState<'initial' | 'success'>('initial');
  const navigate = useNavigate();

  // При reset password, переходим к шагу успеха
  const handleReset = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
  };

  // Редирект через 2 секунды после успеха
  useEffect(() => {
    if (step === 'success') {
      const timer = setTimeout(() => navigate('/'), 200000);
      return () => clearTimeout(timer);
    }
  }, [step, navigate]);

  return (
    <div className="flex flex-col justify-center space-y-4 bg-white h-[544px]">
      {step === 'initial' && (
        <>
          <div className="px-8"> Enter your email address to reset password </div>
          <Form.Root
            onSubmit={(e) => e.preventDefault()}
            className="rounded-lg shadow p-6 w-full max-w-sm space-y-4"
          >
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
        </>
      )}

      {step === 'success' && (
        <div>
          <SuccessComponent message="The link was sent to your email." />
        </div>
      )}
    </div>
  );
}
