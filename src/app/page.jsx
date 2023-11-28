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
  const [modalData, setModalData] = useState({ showModal: false, clickedTool: {} });
  const [pagination, setPagination] = useState({ currentPage: 1, contentPerPage: 12 })


  useEffect(() => {
    setTimeout(() => {
      setToolsArray([...PlugaToolsArray]);
    }, 1500)
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
    setPagination({ currentPage: 1, contentPerPage: 12 });
    setSearchByName(value);
  };

  const filteredTools = searchByName.length > 0
    ? toolsArray.filter((tool) => tool.name.toLowerCase().includes(searchByName.toLowerCase()))
    : [...toolsArray];

  const setCurrentPageContent = () => {
    const tools = [...filteredTools];
    const { currentPage, contentPerPage } = pagination;

    const totalPages = Math.ceil(tools.length / contentPerPage);
    const indexOfFirstElementOnPage = (currentPage - 1) * contentPerPage;
    const indexOfLastElementOnPage = (currentPage * contentPerPage);
    const pageContent = tools.slice(indexOfFirstElementOnPage, indexOfLastElementOnPage);

    return { pageContent, totalPages };
  };

  const { pageContent, totalPages } = setCurrentPageContent();

  const handlePageChange = (paginationData) => {
    setPagination({
      ...pagination,
      currentPage: paginationData
    });
  };

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
          <SearchBar.Input placeholder="Buscar ferramenta" onInputChange={handleSearchInputChange} searchValue={searchByName} />
        </SearchBar.Root>
      </div>

      <div id='cards-container' className="grid xl:grid-cols-4 md:grid-cols-4 grid-cols-1 gap-1 min-w-full px-28 sm:px-12">
        { pageContent.length ? (
          pageContent.map((toolData) => (
            <ToolCard.Root key={toolData.name}>
              <ToolCard.View toolData={toolData} onButtonClick={handleCardClick} />
            </ToolCard.Root>
          ))
        ) : (
          Array.from({ length: 12 }).map((_, index) => (
            <div key={`skeleton-${index}`} className="bg-slate-200 animate-pulse sm:p-4 sm:h-64 rounded-2xl shadow-lg flex flex-col sm:flex-row gap-5 select-none"></div>
          ))
        )
        }
      </div>

      <Pagination.Root>
        <Pagination.Control
          currentPage={pagination.currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </Pagination.Root>
    </main>
  )
}
