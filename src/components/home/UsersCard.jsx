import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { ImStatsBars } from "react-icons/im";
import { Link } from "react-router-dom";

const UsersCard = () => {
  const { palette, navigateToLink } = useContext(GlobalContext);

  return (
    <div
      className="w-[47.5%] md:w-[48.6%] lg:w-[24%] shadow xl:w-[21%] p-4 flex justify-start items-start h-auto xl:max-h-48 rounded-md"
      style={{
        background: palette?.dark_contrast_background,
        color: palette?.dark_contrast_color,
        borderBottom: `2px solid ${palette?.dark_contrast_background}`,
      }}
    >
      <div className="w-1/2 flex flex-col justify-start items-start">
        <span className="bg-[#407BA7]/[0.2] text-[#407BA7] rounded-md w-10 h-10 flex justify-center items-center">
          <ImStatsBars className="text-lg font-medium" />
        </span>
        <div className="w-auto flex flex-col justify-center items-start gap-1 mt-2">
          <span className="text-lg font-semibold">Total Users</span>
          <span
            className="text-lg font-semibold flex justify-start items-center gap-1"
            style={{
              color: palette?.light_contrast_color,
            }}
          >
            <span>1.5k</span>
            <span className="text-green-500 text-sm">{"+"}10%</span>
          </span>
          {/* <button
            onClick={() => navigateToLink("/users/", "Users")}
            className="w-full text-white h-8 rounded-md flex items-center justify-center  text-xs font-medium"
            style={{
              background: palette?.brand,
            }}
          >
            View All
          </button> */}
        </div>
      </div>
      <div className="w-1/2 flex flex-col justify-center items-center">
        <img src="/users.png" className="h-32 w-32" />
      </div>
    </div>
  );
};

export default UsersCard;
