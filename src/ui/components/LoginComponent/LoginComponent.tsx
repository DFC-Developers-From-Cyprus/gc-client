import { useNavigate } from 'react-router-dom';
import * as Form from '@radix-ui/react-form';

import { Button } from '../Button/Button';

export function LoginComponent() {
  const navigate = useNavigate();
  const handleForgot = () => {
    navigate('/reset');
  };
  const handleRegister = () => {
    navigate('/register');
  };

  return (
    <div className="bg-white rounded-lg shadow p-6 w-full max-w-sm">
      <Form.Root onSubmit={(e) => e.preventDefault()} className="space-y-4">
        {/* Email Field */}
        <Form.Field name="email">
          <div className="flex flex-col">
            <Form.Label className="body-1 mb-1" htmlFor="email">
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

        {/* Password Field */}
        <Form.Field name="password">
          <div className="flex flex-col">
            <Form.Label className="body-1 mb-1" htmlFor="password">
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

        {/* Sign In Button */}
        <Form.Submit asChild>
          <Button
            states={[{ label: 'Sign In' }, { label: 'Signing In...' }]}
            className="w-full mt-2"
          />
        </Form.Submit>

        {/* Links */}
        <div className="flex justify-between mt-4">
          <button type="button" onClick={handleForgot} className="text-link body-1 hover:underline">
            Forgot password?
          </button>
          <button
            type="button"
            onClick={handleRegister}
            className="text-link body-1 hover:underline"
          >
            Register
          </button>
        </div>
      </Form.Root>
    </div>
  );
}
