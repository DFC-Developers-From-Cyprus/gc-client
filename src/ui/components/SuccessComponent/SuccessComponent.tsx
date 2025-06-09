import successIcon from '../../../assets/Exclude.svg';

export function SuccessComponent() {
  return (
    <div className="flex flex-col justify-center w-full text-center">
      {/* Заголовок */}
      <h2 className="heading-1 mb-6 uppercase">Success</h2>

      {/* Иконка */}
      <div className="mb-6 flex items-center justify-center">
        <img src={successIcon} alt="Success Icon" className="w-32 h-32" />
      </div>

      {/* Описание */}
      <p className="body-1">
        You have successfully <strong className="font-semibold">registered.</strong>
      </p>
    </div>
  );
}
