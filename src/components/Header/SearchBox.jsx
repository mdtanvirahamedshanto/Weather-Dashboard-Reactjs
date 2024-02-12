import { useContext } from "react";
import { LocationContext } from "../../contexts";
import { getLocationByName } from "../../data/location-data";
import useDebounce from "../../hooks/useDebounce";

const SearchBox = () => {
  const { setSelectedLocation } = useContext(LocationContext);
  // console.log(selectedLocation);

  const onSearch = useDebounce((text) => {
    const fetchLocation = getLocationByName(text);
    setSelectedLocation({ ...fetchLocation });
  }, 500);

  const handleChange = (e) => {
    const value = e.target.value;
    onSearch(value);
  };
  return (
    <form>
      <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
        <input
          className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
          type="search"
          placeholder="Search Location"
          onChange={handleChange}
          required
        />
        <button type="submit">
          <img src="./assets/search.svg" />
        </button>
      </div>
    </form>
  );
};

export default SearchBox;
