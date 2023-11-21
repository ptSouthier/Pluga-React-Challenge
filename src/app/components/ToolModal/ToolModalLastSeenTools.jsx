'use client';
import { ToolCard } from "../ToolCard";

export function ToolModalLastSeenTools({ seenTools }) {
  const handleLastSeenCardClick = (toolData) => {
    window.open(toolData.link, '_blank');
  };

  return (
    <div>
      <h3 className="font-bold text-gray-800 text-lg ml-5 mt-6 mb-1">Últimas Ferramentas Visualizadas</h3>
      { seenTools.length > 0
        ? 
          <div className="grid grid-cols-1 gap-2 md:grid-cols-3 md:px-12 xl:grid-cols-3 xl:px-12" data-testid="last-seen-tools">
            { seenTools.map((toolData) => (
              <ToolCard.Root key={toolData.name}>
                <ToolCard.View toolData={toolData} onButtonClick={handleLastSeenCardClick} data-testid="recently-seen-tool" />
              </ToolCard.Root>
            ))}
          </div>
        : 
        <div className="text-center text-gray-800 font-light my-12">
          <span>Explore nossas ferramentas disponíveis para integração! =D</span>
        </div>
      }
    </div>
  )
}
