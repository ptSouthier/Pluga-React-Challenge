export function SearchBarIcon({ icon: Icon }) {
  return (
    <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
      {Icon && <Icon />}
    </div>
  )
}
