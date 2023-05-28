import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import ImagePreview from "./imageList/ImagePreview";
import Images from "./imageList/Images";
import FileBase from "react-file-base64";

export const BASE_URL = import.meta.env.VITE_BASE_URL;

const HomePage = () => {
  const [allImages, setAllImages] = useState([]);
  const [imageDetail, setImageDetail] = useState(null);
  const [showImage, setShowImage] = useState(false);
  const [files, setFiles] = useState(null);
  const [popup, setPopup] = useState("");
  const [upload, setUpload] = useState(null);

  const handleImage = async (base64, file) => {
    setImageDetail(base64);
    setFiles(file);
    postImage(base64);
  };

  const postImage = async (base64) => {
    const response = await axios(`${BASE_URL}/image/new`, {
      method: "POST",
      data: { fileName: base64 },
      onUploadProgress: (data) => {
        setUpload((pre) => (pre = Math.ceil((data.loaded / data.total) * 100)));
      },
    });
    setAllImages(response.data);
  };

  const getAllImages = async () => {
    try {
      const response = await axios(`${BASE_URL}/image`);
      setAllImages(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllImages();
  }, []);

  const displayAllImages = allImages?.map((item) => {
    return (
      <Images
        setPopup={setPopup}
        setShowImage={setShowImage}
        item={item}
        key={item._id}
      />
    );
  });

  return (
    <div className="mb-[84px] flex h-full w-full flex-col items-center justify-center">
      <div className="relative flex h-full w-[90%] flex-col items-center sm:w-[80%] lg:w-[946px]">
        <h1 className="mt-[81px] text-[32px] font-[400] md:mb-[12px] md:text-[50px]">
          Photo Gallery
        </h1>
        <h3 className="text-[18px] font-[300] text-[#ACACAC] sm:mb-[76px] sm:text-[32px]">
          A picture is worth thousand words.
        </h3>
        <div className="flex flex-col items-center justify-center">
          {files && (
            <img
              src={URL.createObjectURL(files)}
              className="h-[120px] w-[120px] object-cover"
              alt=""
            />
          )}
          <div className="input-file my-[10px]">
            <FileBase
              id="fileInput"
              type="file"
              multiple={false}
              onDone={({ base64, file }) => {
                handleImage(base64, file);
              }}
            />
          </div>
        </div>
        {upload && (
          <div className="flex w-full items-center justify-between gap-[10px]">
            <div
              style={{ width: `${upload}%` }}
              className={`mb-[33px] mt-[27px] h-[7px] rounded-[10px] bg-[#EFD9C2] transition-all`}
            ></div>
            <h3 className="text-[16px]">
              {upload}
              {"%"}
            </h3>
          </div>
        )}
        <div className="grid h-full w-full grid-cols-2 gap-[10px] sm:grid-cols-3 md:gap-[23px]">
          {displayAllImages}
        </div>
        {showImage && (
          <ImagePreview popup={popup} setShowImage={setShowImage} />
        )}
      </div>
    </div>
  );
};

export default HomePage;
