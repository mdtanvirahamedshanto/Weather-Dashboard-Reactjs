/* eslint-disable no-unused-vars */
import { FavouriteContext } from "../contexts/FavouriteContext";
import useLocalStorage from "../hooks/useLocalStorage";

const FavouriteProvider = (children) => {
  const [favourite, setFavourite] = useLocalStorage("favourites", []);
  const addFavourite = (latitude, longitude, location) => {
    setFavourite(...favourite, {
      latitude: latitude,
      longitude: longitude,
      location: location,
    });
  };

  const removeFavourite = (location) => {
    const restFvt = favourite.filter((fvt) => fvt.location !== location);

    setFavourite(restFvt);
  };

  <FavouriteContext.Provider value={(favourite, addFavourite, removeFavourite)}>
    {children}
  </FavouriteContext.Provider>;
};

export default FavouriteProvider;
