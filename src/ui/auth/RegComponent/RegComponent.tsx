import { useState, FormEvent, useRef } from 'react';
import * as Form from '@radix-ui/react-form';

import { Button } from '../../components/Button/Button';

export interface RegComponentProps {
  onSuccess: () => void;
}

export function RegComponent({ onSuccess }: RegComponentProps) {
  const [step, setStep] = useState<'initial' | 'confirm'>('initial');
  const formRef = useRef<HTMLFormElement>(null);

  const handleJoinOrg = () => {
    alert('Join as an organization clicked');
  };

  // Обработчик первой формы
  const handleInitialSubmit = (e: FormEvent) => {
    e.preventDefault();
    const form = formRef.current!;
    if (form.checkValidity()) {
      setStep('confirm');
    } else {
      form.reportValidity();
    }
  };

  // Обработчик второго шага
  const handleConfirmSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSuccess();
  };

  return (
    <div className="bg-white rounded-lg shadow p-6 w-full max-w-sm">
      {/* Заголовок */}
      {step === 'initial' && <h2 className="heading-1 mb-4">Registration</h2>}
      {step === 'confirm' && (
        <h2 className="heading-1 mb-4 text-center">
          Verification code is sent to your email address
        </h2>
      )}

      {/* Форма */}
      {step === 'initial' && (
        <Form.Root asChild onSubmit={handleInitialSubmit}>
          <form ref={formRef} className="space-y-4">
            {/* Email */}
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

            {/* Password */}
            <Form.Field name="password">
              <div className="flex flex-col">
                <Form.Label className="body-3 mb-1" htmlFor="password">
                  Password
                </Form.Label>
                <Form.Control asChild>
                  <input
                    id="password"
                    type="password"
                    required
                    placeholder="Value"
                    className="w-full border border-card-bg rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-active"
                  />
                </Form.Control>
                <Form.Message match="valueMissing" className="text-red-500 text-sm mt-1">
                  Please enter your password
                </Form.Message>
              </div>
            </Form.Field>

            {/* Register */}
            <Button
              type="submit"
              initialIndex={0}
              states={[
                { label: 'Register' },
                { label: 'Register' },
                { label: 'Register' },
                { label: 'Register', textClass: 'text-link' },
              ]}
              transitionMap={{ 0: 0 }}
              className="w-full h-10 mt-2"
            />

            {/* Join org */}
            <div className="mt-4">
              <button
                type="button"
                onClick={handleJoinOrg}
                className="text-link body-1 hover:underline"
              >
                Join as an organization
              </button>
            </div>
          </form>
        </Form.Root>
      )}

      {step === 'confirm' && (
        <Form.Root asChild onSubmit={handleConfirmSubmit}>
          <form className="space-y-4">
            {/* Code */}
            <Form.Field name="code">
              <div className="flex flex-col">
                <Form.Label className="body-3 mb-1" htmlFor="code">
                  Enter code
                </Form.Label>
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

            {/* Submit */}
            <Button
              type="submit"
              initialIndex={0}
              states={[
                { label: 'Submit' },
                { label: 'Submit' },
                { label: 'Submit' },
                { label: 'Submit', textClass: 'text-link' },
              ]}
              transitionMap={{ 0: 0 }}
              className="w-full"
            />
          </form>
        </Form.Root>
      )}
    </div>
  );
}
