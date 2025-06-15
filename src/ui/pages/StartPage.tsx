import { useState } from 'react';

import topImage from '../../../public/assets/images/welcomeFrame.png';
import footerImage from '../../../public/assets/images/Footer.svg';
import { LoginComponent } from '../auth/LoginComponent/LoginComponent';
import { Button } from '../components/Button/Button';

export function StartPage() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="min-h-screen bg-card-bg flex flex-col items-center justify-center relative">
      {/* Основной белый контейнер */}
      <div className="bg-white rounded-3xl overflow-hidden w-full max-w-sm">
        {/* Верхняя картинка с кнопкой */}
        <div className="relative">
          <img src={topImage} alt="Welcome" className="w-full object-cover px-4 pt-4" />
          <Button
            states={[{ label: 'Sign In' }, { label: 'Sign In' }]}
            onClick={() => setShowLogin(true)}
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-[160px]"
          />
        </div>
        {/* Нижняя желтая часть с логотипом */}
        <img src={footerImage} alt="Logo" className="w-full mt-[-42px]" />
      </div>

      {/* Модальное окно Login при showLogin */}
      {showLogin && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Полупрозрачный фоновый слой */}
          <div
            className="absolute inset-0 bg-hint bg-opacity-50"
            onClick={() => setShowLogin(false)}
          />
          {/* Модальное окно */}
          <div className="relative bg-white rounded-xl shadow-lg w-full max-w-sm p-6 z-10">
            <LoginComponent />
          </div>
        </div>
      )}
    </div>
  );
}
