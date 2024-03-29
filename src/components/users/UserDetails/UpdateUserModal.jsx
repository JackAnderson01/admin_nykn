import React, { useContext, useRef } from "react";
import { GlobalContext } from "../../../context/GlobalContext";
import { LuImagePlus } from "react-icons/lu";

const UpdateUserModal = ({ isOpen, setIsOpen }) => {
  const updateUserRef = useRef();
  const { palette, theme } = useContext(GlobalContext);

  const toggleModal = (e) => {
    if (!updateUserRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  const handleImage = () => {
    const elem = document.getElementById("user-image-update");
    elem.click();
  };

  return (
    <div
      onClick={toggleModal}
      id="user-update-modal"
      className={`fixed top-0 left-0 ${
        theme == "dark" ? "bg-[#fff]/[0.2]" : "bg-[#000]/[0.2]"
      }  z-[1000] w-screen h-screen ${
        isOpen ? "flex" : "hidden"
      } items-center justify-center`}
    >
      <div
        ref={updateUserRef}
        className="w-96 h-auto rounded-3xl flex flex-col gap-2 justify-start items-center  p-4"
        style={{ background: palette?.background, color: palette?.color }}
      >
        <span className="text-2xl font-bold">Update User</span>
        <div
          onClick={handleImage}
          className="w-full h-16 cursor-pointer rounded-xl flex flex-col gap-1 justify-center items-center"
          style={{
            background: palette?.dark_contrast_background,
            color: palette?.light_contrast_color,
          }}
        >
          <input
            id="user-image-update"
            className="w-full hidden h-10 rounded-full text-sm  outline-none border-none px-4"
            type="file"
            accept="/*png"
          />
          <LuImagePlus className="text-xl font-medium" />
        </div>
        <div className="w-full h-auto flex flex-col gap-1 justify-start items-start">
          <input
            className="w-full h-10 rounded-full text-sm  outline-none border-none px-4"
            style={{
              background: palette?.dark_contrast_background,
            }}
            type="text"
            placeholder="User Name"
          />
        </div>

        <div className="w-full h-auto flex flex-col gap-1 justify-start items-start">
          <input
            className="w-full h-10 rounded-full text-sm  outline-none border-none px-4"
            style={{
              background: palette?.dark_contrast_background,
            }}
            type="text"
            placeholder="User Email"
          />
        </div>

        <button
          style={{
            background: palette?.brand,
          }}
          className="w-full h-10  transition-all duration-150 hover:opacity-90  outline-none border-none text-white text-md font-medium rounded-full"
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default UpdateUserModal;
