import { Button } from '../components/Button/Button';

export function ProfilePage() {
  return (
    <div className="flex flex-col h-screen px-[19px]">
      <div className="flex space-x-[13px]">
        test
        <Button
          states={[
            { label: 'One', icon: 'mdi:plus' },
            { label: 'In progress', icon: 'mdi:check' },
            { label: 'Three', icon: 'mdi:check' },
            { label: 'In progress', icon: 'mdi:...', textClass: 'text-link' },
          ]}
          initialIndex={3} // стартуем в 4-м (индекс 3)
          transitionMap={{
            3: 1, // из 4-го сразу в 2-й (индекс 1)
            1: 3, // из 2-го — обратно в 4-й
          }}
          className="w-[165px]"
        />
        <Button
          states={[
            { label: 'One', icon: 'mdi:plus' },
            { label: 'Passed', icon: 'mdi:check' },
            { label: 'Three', icon: 'mdi:check' },
            { label: 'Passed', icon: 'mdi:...', textClass: 'text-link' },
          ]}
          initialIndex={3} // стартуем в 4-м (индекс 3)
          transitionMap={{
            3: 1, // из 4-го сразу в 2-й (индекс 1)
            1: 3, // из 2-го — обратно в 4-й
          }}
          className="w-[165px]"
        />
      </div>
    </div>
  );
}
