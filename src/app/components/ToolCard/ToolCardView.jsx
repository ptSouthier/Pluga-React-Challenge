'use client';
import Image from "next/image";

export function ToolCardView({ toolData, onButtonClick }) {
  const handleClick = () => {
    onButtonClick(toolData);
  };

  return (
    <div className="h-40 rounded-t-lg" style={{backgroundColor: `${toolData.color}`}}>
      <div className="flex flex-col items-center pt-7 pb-10">
        <Image
          src={toolData.icon}
          alt={`Ícone da ferramenta ${toolData.name}`}
          width={100}
          height={100}
          className="mb-12 w-24 h-24 rounded-full shadow-lg"
          priority
          data-testid="tool-card-icon"
        />
        
        <button onClick={handleClick} className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br text-white font-bold py-2 px-4 rounded mx-2" data-testid="tool-card-button">
          <span data-testid="tool-card-name">
            {toolData.name}
          </span>
        </button>
      </div>
    </div>
  )
}
