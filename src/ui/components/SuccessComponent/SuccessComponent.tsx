import successIcon from '../../../assets/Exclude.svg';

interface SuccessComponentProps {
  /** Основной текст сообщения, вокруг которого можно выделить часть */
  message: string;
  /** Подстрока из message, которую нужно обернуть в <strong> */
  highlight?: string;
}

export function SuccessComponent({ message, highlight }: SuccessComponentProps) {
  // Если есть highlight, разбиваем строку на до/сам highlight/после
  let before = message;
  let after = '';
  if (highlight && message.includes(highlight)) {
    const parts = message.split(highlight);
    before = parts.shift() || '';
    after = parts.join(highlight);
  }

  return (
    <div className="flex flex-col justify-center items-center w-full text-center p-4">
      {/* Заголовок (всегда «Success») */}
      <h2 className="heading-1 mb-6 uppercase">Success</h2>

      {/* Иконка */}
      <div className="mb-6 flex items-center justify-center">
        <img src={successIcon} alt="Success Icon" className="w-32 h-32" />
      </div>

      {/* Описание с подсветкой */}
      <p className="body-1">
        {before}
        {highlight ? <strong className="font-semibold">{highlight}</strong> : null}
        {after}
      </p>
    </div>
  );
}
