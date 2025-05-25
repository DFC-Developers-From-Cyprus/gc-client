// src/App.tsx
export function App() {
  return (
    <div className="h-screen flex items-center justify-center bg-primary">
      <h1 className="text-4xl font-heading text-white">Привет, Tailwind с переменными!</h1>
      <button className="mt-4 bg-accent hover:bg-accent/80 text-white font-sans rounded px-4 py-2">
        Нажми меня
      </button>
    </div>
  );
}
