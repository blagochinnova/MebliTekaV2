import { useState } from "react";
import { FaBars } from "react-icons/fa"; // npm install react-icons
import ModalPanel from "./ModalPanel";

export default function SideButton({ isOpen, onOpen, onClose }) {
  return (
    <>
      <div className="fixed-button" onClick={onOpen}>
        <FaBars />
      </div>
      <ModalPanel isOpen={isOpen} onClose={onClose} />
    </>
  );
}