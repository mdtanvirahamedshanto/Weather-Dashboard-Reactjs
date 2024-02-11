import { useContext } from "react";
import { FavouriteContext } from "../../contexts";

const FavListModel = () => {
  const { favourite } = useContext(FavouriteContext);
  console.log(favourite);

  return (
    <div className="max-w-xs py-4 bg-white rounded-md border-gray-500 absolute right-0 top-16 text-black shadow-lg ">
      <h3 className="text-lg font-bold px-4">Favourite Locations</h3>
      {/* {favourite.length() <= 0 && <p>n</p>} */}
      <ul className="space-y-2 mt-4 *:py-2 *:px-4 *:cursor-pointer">
        {favourite.length > 0 ? (
          favourite.map((fvt) => (
            <li key={fvt.location} className="hover:bg-gray-200">
              {fvt.location}
            </li>
          ))
        ) : (
          <span>Not Found...</span>
        )}
        {/* <li className="hover:bg-gray-200">Dhaka</li>
        <li className="hover:bg-gray-200">Rangpur</li>
        <li className="hover:bg-gray-200">Europe</li> */}
      </ul>
    </div>
  );
};

export default FavListModel;
