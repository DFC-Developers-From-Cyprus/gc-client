import { ForgotComponent } from '../components/ForgotComponent/ForgotComponent';
import { LoginComponent } from '../components/LoginComponent/LoginComponent';
import { RegComponent } from '../components/RegComponent/RegComponent';

export function StartPage() {
  return (
    <section className="flex flex-col items-center justify-center h-full space-y-6 p-4">
      Start
      <LoginComponent />
      <RegComponent />
      <ForgotComponent
        onCancel={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    </section>
  );
}
