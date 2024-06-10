import { useEffect } from "react";
import "./App.css";
import { useTelegram } from "./hooks/useTelegram";

function App() {
  const {tg, onClose} = useTelegram();
  
  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <main>
      <div>Перемога</div>
      <button onClick={onClose}>Close</button>
    </main>
  );
}

export default App;
