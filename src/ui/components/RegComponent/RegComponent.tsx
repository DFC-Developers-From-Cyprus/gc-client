import * as Form from '@radix-ui/react-form';

import { Button } from '../Button/Button';

export function RegComponent() {
  const handleJoinOrg = () => alert('Join as an organization clicked');

  return (
    <div className="bg-white rounded-lg shadow p-6 w-full max-w-sm">
      <Form.Root onSubmit={(event) => event.preventDefault()} className="space-y-4">
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

        {/* Password Field */}
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

        {/* Register Button */}
        <Form.Submit asChild>
          <Button
            states={[{ label: 'Register' }, { label: 'Registering...' }]}
            className="w-full h-10 mt-2"
          />
        </Form.Submit>

        {/* Join as organisation link */}
        <div className="mt-4">
          <button
            type="button"
            onClick={handleJoinOrg}
            className="text-link body-1 hover:underline"
          >
            Join as an organization
          </button>
        </div>
      </Form.Root>
    </div>
  );
}
