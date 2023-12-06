export function ToolCardRoot({ children, order = '' }) {
  return (
    <div className={`flex flex-col bg-slate-200 rounded-lg pb-16 m-2 hover:shadow-lg ${order}`} data-testid="tool-card">
      {children}
    </div>
  )
}
