import { useNavigate } from 'react-router-dom';

import footerImage from '../../../public/assets/images/Footer.svg';
import { ForgotComponent } from '../components/ForgotComponent/ForgotComponent';

export function ForgotPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-card-bg flex items-center justify-center p-4 relative">
      {/* Основной контейнер */}
      <div className="bg-white rounded-3xl overflow-hidden w-full max-w-sm relative">
        {/* Форма регистрации */}
        <div className="p-6 mb-[150px]">
          <ForgotComponent onCancel={() => navigate(-1)} />
        </div>

        {/* Логотип поверх футера */}
        <img src={footerImage} alt="Logo" className="w-full" />
      </div>
    </div>
  );
}
