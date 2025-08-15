export function FormStatusPage() {
  return (
    <div className="flex flex-col items-center w-full h-screen p-4">
      <h1 className="status-title">Please, wait</h1>
      <img
        src="src/assets/img/status.svg"
        alt="Status image"
        className="mt-[73px] w-[176px] h-[176px]"
      />
      <p className="font-opensans mt-[131px] text-center text-[20px] font-semibold">
        Your application is pending
      </p>
    </div>
  );
}
