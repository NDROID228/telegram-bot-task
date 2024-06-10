import { useTelegram } from "../../hooks/useTelegram";
import Button from "../Button/Button";
import "./Header.css";

export default function Header() {
  const { user, onClose } = useTelegram();
  return (
    <header>
      <Button onClick={onClose}>Close</Button>
      <span className={"username"}>{user?.username}</span>
    </header>
  );
}
