'use client';
import useDebounce from "@/src/utils/useDebounce";

export function SearchBarInput({ placeholder, onInputChange, searchValue }) {
  const handleChange = useDebounce(({ target }) => {
    onInputChange(target.value);
  }, 500);

  return (
    <input
      name="search-bar"
      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 ps-12 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 focus:outline-sky-300"
      placeholder={placeholder}
      defaultValue={searchValue}
      onChange={handleChange}
      type="search"
      data-testid="search-bar-input"
    />
  )
}
