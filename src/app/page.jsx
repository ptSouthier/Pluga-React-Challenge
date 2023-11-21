'use client';
import PlugaToolsArray from '@/public/data/pluga_tools_search.json';
import { useEffect, useState } from "react";
import { ToolModal } from "@/app/components/ToolModal";
import { ToolCard } from "@/app/components/ToolCard";

export default function Home() {
  const [toolsArray, setToolsArray] = useState([]);
  const [searchByName, setSearchByName] = useState('');
  const [seenToolsQueue, setSeenToolsQueue] = useState([]);
  const [modalData, setModalData] = useState({
    showModal: false,
    clickedTool: {},
  });

  useEffect(() => {
    setToolsArray([...PlugaToolsArray]);
  }, []);

  const handleCardClick = (toolData) => {
    setModalData({
      showModal: true,
      clickedTool: toolData,
    });
  };

  const isToolAlreadyOnLastSeen = (toolId) => {
    return seenToolsQueue.some((tool) => tool.app_id === toolId);
  };

  const handleModalClosure = (toolData) => {
    if (!isToolAlreadyOnLastSeen(toolData.app_id)) {
      const SEEN_TOOLS_MAXIMUM_LENGTH = 3;
      const updatedQueue = [...seenToolsQueue];

      if (updatedQueue.length >= SEEN_TOOLS_MAXIMUM_LENGTH) {
        updatedQueue.shift();
      }

      updatedQueue.push(toolData);
      setSeenToolsQueue(updatedQueue);
    } else {
      const filteredQueue = seenToolsQueue.filter((tool) => tool.app_id !== toolData.app_id)
      setSeenToolsQueue([...filteredQueue, toolData]);
    }

    setModalData({
      showModal: false,
      clickedTool: {},
    });
  };

  const filteredTools = searchByName.length > 0
    ? toolsArray.filter((tool) => tool.name.includes(searchByName))
    : [];

  return (
    <main className="flex-row place-content-center px-60 py-14">
      { modalData.showModal && (
        <ToolModal.Root isOpen={modalData.showModal} onClose={() => handleModalClosure(modalData.clickedTool)}>
          <ToolModal.Content toolData={modalData.clickedTool} />
          <ToolModal.LastSeenTools seenTools={seenToolsQueue} />
        </ToolModal.Root>
      )}

      {/* <SearchBar.Root>
        <SearchBar.Input placeholder="Buscar ferramenta" dataToSearch={toolsData} />
      </SearchBar.Root> */}

      <div id='cards-container' className="grid xl:grid-cols-4 md:grid-cols-4 grid-cols-1 gap-2 min-w-full">
        { searchByName.length > 0 ? (
          filteredTools.map((toolData) => (
            <ToolCard.Root key={toolData.name}>
              <ToolCard.View toolData={toolData} onButtonClick={handleCardClick} />
            </ToolCard.Root>
          ))
        ) : (
          toolsArray.map((toolData) => (
            <ToolCard.Root key={toolData.name}>
              <ToolCard.View toolData={toolData} onButtonClick={handleCardClick} />
            </ToolCard.Root>
          ))
        )}
      </div>

      {/* <Pagination.Root>
        <Pagination.Content perPage={contentPerPage} />
        <Pagination.Pages totalPages={totalPages} />
      </Pagination.Root> */}
    </main>
  )
}
