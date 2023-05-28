import React from "react";
import { BASE_URL } from "../HomePage";

const Images = ({ item, setShowImage, setPopup }) => {
  const handlePopUp = () => {
    setShowImage(true);
    setPopup(item.fileName);
  };

  return (
    <div className="h-[230px] cursor-pointer shadow-xl sm:h-[300px]">
      <img
        onClick={handlePopUp}
        src={item.fileName}
        alt=""
        className="h-full w-full object-cover"
      />
    </div>
  );
};

export default Images;
