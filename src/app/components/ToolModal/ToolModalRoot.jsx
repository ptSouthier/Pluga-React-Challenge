'use client';
import { X } from "../Icons/X";

export function ToolModalRoot({ children, isOpen, onClose }) {
  return (
    <div
      id="backdrop"
      className={`w-screen h-screen fixed inset-0 flex justify-center items-center transition-colors ${isOpen ? "visible bg-black/50" : "invisible"}`}
    >
      <div
        data-testid="tool-modal"
        className={`bg-white rounded-xl shadow p-6 transition-all ${isOpen ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}
      >
        <button onClick={onClose} className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600">
          <X />
        </button>
        {children}
      </div>
    </div>
  )
}
