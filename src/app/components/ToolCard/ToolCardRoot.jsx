export function ToolCardRoot({ children }) {
  return (
    <div className="flex flex-col bg-gray-200 rounded-lg pb-16 m-2" data-testid="tool-card">
      {children}
    </div>
  )
}
