/* eslint-disable react/prop-types */
const FavList = ({ onFvt }) => {
  return (
    <div
      className="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all"
      onClick={onFvt}
    >
      <img src="./assets/heart.svg" alt="" />
      <button>Favourite Locations</button>
    </div>
  );
};

export default FavList;
