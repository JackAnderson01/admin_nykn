import React, { useContext, useState } from "react";
import { GlobalContext } from "../../../context/GlobalContext";
import UpdateCategoryModal from "./UpdateCategoryModal";
import ConfirmCategoryDeleteModal from "./ConfirmCategoryDeleteModal";

const CategoryDetailHeader = () => {
  const { palette } = useContext(GlobalContext);
  const [isCategoryUpdateOpen, setIsCategoryUpdateOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  return (
    <div
      className="w-full h-auto flex flex-col justify-start items-center p-3 rounded-xl gap-3 "
      style={{
        background: palette?.dark_contrast_background,
      }}
    >
      <div className="w-full h-auto flex justify-start items-center gap-3">
        <span
          className="rounded-full w-16 h-16 p-1 flex justify-center items-center"
          style={{
            background: palette?.brand,
          }}
        >
          <img
            className="h-full w-full rounded-full"
            src={
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
            }
            alt=""
          />
        </span>

        <div className="w-auto flex flex-col justify-start items-start">
          <h1
            className="text-xl  font-extrabold "
            style={{
              color: palette?.color,
            }}
          >
            Category Name
          </h1>
          <span className="text-[#9b9c9b] text-wrap text-sm font-medium">
            Category Description goes here
          </span>
        </div>

        <div className="w-auto flex flex-col ml-auto justify-start items-start gap-2">
          <button
            onClick={() => setIsDeleteOpen(true)}
            className="w-20 h-7 text-xs  font-medium rounded-full flex items-center justify-center bg-red-500 text-white"
          >
            Delete
          </button>
          <button
            onClick={() => setIsCategoryUpdateOpen(true)}
            className="w-20 h-7 text-xs font-medium rounded-full flex items-center justify-center text-white"
            style={{
              background: palette?.brand,
            }}
          >
            Edit
          </button>
        </div>

        <UpdateCategoryModal
          isOpen={isCategoryUpdateOpen}
          setIsOpen={setIsCategoryUpdateOpen}
        />
        <ConfirmCategoryDeleteModal
          isOpen={isDeleteOpen}
          setIsOpen={setIsDeleteOpen}
        />
      </div>
    </div>
  );
};

export default CategoryDetailHeader;