import { useEffect } from "react";
import "./App.css";
const tg = window.Telegram.WebApp;

function App() {
  useEffect(() => {
    tg.ready();
  }, []);
  const onClose = () => {
    tg.close;
  };
  return (
    <main>
      <div>Перемога</div>
      <button onClick={onClose}>Close</button>
    </main>
  );
}

export default App;
