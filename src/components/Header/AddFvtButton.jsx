import { useContext, useState } from "react";
import { FavouriteContext, WeatherContext } from "../../contexts";
import RedHeartIcon from "/assets/heart-red.svg";
import HeartIcon from "/assets/heart.svg";

const AddFvtButton = () => {
  const [isFavourite, setIsFaourite] = useState(false);
  const { favourite, addFavourite, removeFavourite } =
    useContext(FavouriteContext);
  const { weatherData } = useContext(WeatherContext);
  const { latitude, longitude, location } = weatherData;
  const foundFvt = favourite.find((fvt) => fvt.location === location);
  const handleFav = () => {
    const found = favourite.find((fvt) => fvt.location === location);

    if (!found) {
      addFavourite(latitude, longitude, location);
    } else {
      removeFavourite(location);
    }
    setIsFaourite(!isFavourite);
  };
  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
          onClick={handleFav}
        >
          <span>Add to Favourite</span>
          <img src={foundFvt ? RedHeartIcon : HeartIcon} alt="setfvt" />
        </button>
      </div>
    </div>
  );
};

export default AddFvtButton;
