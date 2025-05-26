import { Button } from '../components/Button/Button';

export function StartPage() {
  return (
    <section className="flex flex-col items-center justify-center h-full space-y-6 p-4">
      Start
      <Button
        states={[{ label: 'CleanUp' }, { label: 'Press to finish', icon: 'mdi:clock-outline' }]}
      />
      <Button
        states={[
          { label: 'Register' },
          { label: 'Register', icon: 'mdi:account-plus' },
          { label: 'Done' },
        ]}
        className="w-48 h-12"
      />
    </section>
  );
}
