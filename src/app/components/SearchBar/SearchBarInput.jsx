export function SearchBarInput({ placeholder, onInputChange }) {
  const handleChange = (({ target }) => {
    onInputChange(target.value);
  });

  return (
    <input
      name="search-bar"
      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 ps-12 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 focus:outline-sky-300"
      placeholder={placeholder}
      onChange={handleChange}
      type="search"
      data-testid="search-bar-input"
    />
  )
}
