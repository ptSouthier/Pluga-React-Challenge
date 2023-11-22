export function Magnifier({ color = 'black', size = '24' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      fill="none"
      viewBox="0 0 20 20"
      width={size}
      height={size}
    >
      <path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
    </svg>
  )
}
