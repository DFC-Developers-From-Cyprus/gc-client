import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { RegComponent } from '../auth/RegComponent/RegComponent';
import footerImage from '../../../public/assets/images/Footer.svg';
import { SuccessComponent } from '../components/SuccessComponent/SuccessComponent';

export function RegisterPage() {
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();

  // Переход на /home через 2 секунды после успеха
  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => navigate('/home'), 2000);
      return () => clearTimeout(timer);
    }
  }, [showSuccess, navigate]);

  return (
    <div className="min-h-screen bg-card-bg flex items-center justify-center p-4 relative">
      {/* Основной контейнер */}
      <div className="bg-white rounded-3xl overflow-hidden w-full max-w-sm relative">
        {/* Форма регистрации */}
        <div className="p-6 mb-[150px]">
          {showSuccess ? (
            <SuccessComponent message="You have successfully registered." highlight="registered" />
          ) : (
            <RegComponent onSuccess={() => setShowSuccess(true)} />
          )}
        </div>

        {/* Логотип поверх футера */}
        <img src={footerImage} alt="Logo" className="w-full" />
      </div>
    </div>
  );
}
