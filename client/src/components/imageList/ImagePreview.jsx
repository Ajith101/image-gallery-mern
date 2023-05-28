import React from "react";

const ImagePreview = ({ popup, setShowImage }) => {
  return (
    <div className="absolute left-[50%] top-[50%] flex w-[90%] -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center rounded-[10px] bg-white p-[5px] shadow-xl md:w-[650px] md:p-[25px]">
      <h1 className="mb-[50px] text-[20px] font-[300] text-slate-600 md:text-[32px]">
        Image Preview
      </h1>
      <img
        src={popup}
        className="h-[190px] w-full bg-[10%] object-cover md:h-[350px]"
        alt=""
      />
      <div
        onClick={() => setShowImage(false)}
        className="absolute right-[15px] top-[15px] flex cursor-pointer items-center justify-center rounded-[5px] bg-black px-[6px] py-[4px] text-center text-[16px] font-[400] text-white hover:opacity-80"
      >
        X
      </div>
      <div
        onClick={() => setShowImage(false)}
        className="mb-[10px] mt-[9px] cursor-pointer rounded-[4px] bg-orange-700 px-[35px] py-[5px] text-center text-[16px] text-white hover:opacity-75 md:mt-[20px] md:px-[60px] md:py-[15px]"
      >
        Close
      </div>
    </div>
  );
};

export default ImagePreview;
