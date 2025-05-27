export function SuccessComponent() {
  return (
    <div className="min-h-screen bg-card-bg flex items-center justify-center p-4">
      <div className="flex flex-col justify-center bg-white rounded-3xl shadow p-6 w-full h-[535px] max-w-sm text-center">
        {/* Заголовок */}
        <h2 className="heading-1 mb-6 uppercase">Success</h2>

        {/* Иконка */}
        <div className="mb-6 flex items-center justify-center">
          <img src="/assets/icons/Exclude.svg" alt="Success Icon" className="w-32 h-32" />
        </div>

        {/* Описание */}
        <p className="body-1">
          You have successfully <strong className="font-semibold">registered.</strong>
        </p>
      </div>
    </div>
  );
}
