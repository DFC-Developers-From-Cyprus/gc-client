import { useNavigate } from 'react-router-dom';

export const DashboardButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/dashboard');
  };

  return (
    <button
      onClick={handleClick}
      className="w-10 h-10 rounded-md bg-white shadow flex items-center justify-center mt-2 transition cursor-pointer active:scale-95"
      title="Dashboard"
    >
      <img src="src/assets/icons/map/dashboard.svg" alt="Dashboard" className="w-6 h-6" />
    </button>
  );
};
