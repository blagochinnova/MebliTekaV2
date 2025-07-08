import { useState } from "react";
import { FaBars } from "react-icons/fa"; // Іконка для кнопки (встановіть react-icons: npm install react-icons)
import ModalPanel from "./ModalPanel"; // Компонент для панелі (створимо нижче)

export default function SideButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed-button" onClick={() => setIsOpen(true)}>
        <FaBars />
      </div>
      <ModalPanel isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}