import Image from "next/image";

export function ToolModalContent({ toolData }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 md:gap-10 lg:gap-20">
      <div className="text-center w-56 mx-auto my-4">
        <div className="flex h-full place-content-center rounded-full py-2" style={{backgroundColor: `${toolData.color}`}}>
          <Image
            src={toolData.icon}
            alt={`Ícone da ferramenta ${toolData.name}`}
            width={130}
            height={130}
            className="my-10 rounded-full shadow-lg"
            priority
            data-testid="tool-modal-icon"
          />
        </div>
      </div>
      <div className="flex place-content-center place-items-center">
        <div className="mx-auto md:mx-0 text-center pr-10">
          <h3 className="text-4xl font-bold mb-10" style={{color: `${toolData.color}`}} data-testid="tool-modal-name">
            {toolData.name}
          </h3>

          <a
            href={toolData.link}
            target="_blank"
            className="mt-4 w-full max-w-[14rem] rounded-full bg-blue-500 hover:bg-blue-700 px-20 py-2 text-center text-white"
            data-testid="tool-modal-link"
          >
            Acessar
          </a>
        </div>
      </div>
    </div>
  )
}
