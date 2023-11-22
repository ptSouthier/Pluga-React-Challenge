'use client';
import { useEffect, useState } from "react";
import PlugaToolsArray from '@/public/data/pluga_tools_search.json';
import { ToolModal } from "@/app/components/ToolModal";
import { ToolCard } from "@/app/components/ToolCard";
import { SearchBar } from "@/app/components/SearchBar";
import { Magnifier } from '@/app/components/Icons/Magnifier';
import { Pagination } from '@/app/components/Pagination';
import { PlugaLogo } from '@/app/components/Icons/PlugaLogo';

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

  const handleSearchInputChange = (value) => {
    setSearchByName(value);
  };

  const filteredTools = searchByName.length > 0
    ? toolsArray.filter((tool) => tool.name.toLowerCase().includes(searchByName.toLowerCase()))
    : [];

  return (
    <main className="flex-row place-content-center px-60 py-14 bg-gradient-to-t from-neutral-50 to-blue-600">
      { modalData.showModal && (
        <ToolModal.Root isOpen={modalData.showModal} onClose={() => handleModalClosure(modalData.clickedTool)}>
          <ToolModal.Content toolData={modalData.clickedTool} />
          <ToolModal.LastSeenTools seenTools={seenToolsQueue} />
        </ToolModal.Root>
      )}

      <div className="flex place-content-center h-1/2 -mt-20">
        <PlugaLogo size="400" />
      </div>

      <div className="pb-8">
        <SearchBar.Root>
          <SearchBar.Icon icon={Magnifier} iconProps={{color: '#A9A9A9'}} />
          <SearchBar.Input placeholder="Buscar ferramenta" onInputChange={handleSearchInputChange} />
        </SearchBar.Root>
      </div>

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
