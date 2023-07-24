import React, { useEffect, useState } from "react";
import axios from "axios";
import ImagePreview from "../components/imageList/ImagePreview";
import Images from "../components/imageList/Images";

export const BASE_URL = import.meta.env.VITE_BASE_URL;

const HomePage = () => {
  const [allImages, setAllImages] = useState([]);
  const [imageDetail, setImageDetail] = useState(null);
  const [showImage, setShowImage] = useState(false);
  const [popup, setPopup] = useState("");
  const [upload, setUpload] = useState(null);

  const handleImage = async (event) => {
    setImageDetail(event.target.files[0]);
    postImage(event);
  };

  const postImage = async (event) => {
    const formData = new FormData();
    formData.append("upload_file", event.target.files[0]);

    const response = await axios(`${BASE_URL}/image/upload`, {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: formData,
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
      console.log(response.data);
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
        key={item.id}
      />
    );
  });

  return (
    <div className="flex w-full flex-col items-center justify-center pb-[84px]">
      <div className="flex w-[90%] flex-col items-center sm:w-[80%] lg:w-[946px]">
        <h1 className="mt-[10px] text-[32px] font-[400] md:text-[50px]">
          Photo Gallery
        </h1>
        <form className="flex flex-col items-center justify-center">
          <h3 className="text-[18px] font-[300] text-[#ACACAC] sm:mb-[76px] sm:text-[32px]">
            A picture is worth thousand words.
          </h3>
          {imageDetail && (
            <img
              src={URL.createObjectURL(imageDetail)}
              className="h-[120px] w-[120px] object-cover"
              alt=""
            />
          )}
          <label
            htmlFor="upload_file"
            className="relative mt-[15px] flex h-[35px] w-[35px] cursor-pointer rounded-full border-[1px] border-[#EED8C0] text-center text-[30px] font-[300] text-[#EED8C0]"
          >
            <span className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
              +
            </span>
          </label>
          {imageDetail && (
            <h3 className="text-[22px] font-[400] text-[#ACACAC]">
              {imageDetail?.name}
            </h3>
          )}
          <input
            onChange={handleImage}
            type="file"
            name="upload_file"
            id="upload_file"
            className="invisible"
          />
        </form>
        {upload && (
          <div className="flex w-full items-center gap-[10px]">
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
        <div className="relative grid h-full w-full grid-cols-2 gap-[10px] sm:grid-cols-3 md:gap-[23px]">
          {displayAllImages}{" "}
          {showImage && (
            <ImagePreview popup={popup} setShowImage={setShowImage} />
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
