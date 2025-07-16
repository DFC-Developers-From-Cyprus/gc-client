export function FormStatusPage() {
  return (
    <div className="flex flex-col items-center w-full h-screen p-4">
      <h1 className="mt-[40px] font-normal text-[42px] leading-[120%] text-center font-yeseva">Please, wait</h1>
      <img
        src="src/assets/img/status.svg"
        alt="Status image"
        className="mt-[73px] w-[176px] h-[176px]"/>
      <p className="mt-[131px] text-center text-[20px] font-semibold font-opensans">Your application is pending</p>
    </div>
  );
}
