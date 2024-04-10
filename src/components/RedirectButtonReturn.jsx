import React from "react";
import { useNavigate } from "react-router-dom";

const RedirectButtonReturn = () => {
  const navigate = useNavigate();

  const returnClick = () => {
    console.log("Esta app corre");
    navigate("/home");
  };

  return (
      <button
      onClick={returnClick}
        type="button"
        class="inline-flex items-center hide-for-mobile hover:underline decoration-[var(--blueberry600)]"
      >
        <div class="border-2 border-[var(--blueberry600)] rounded-full w-[20px] min-w-[20px] h-[20px] grid place-content-center text-[8px] text-[var(--blueberry600)]"></div>
        <div class="text-[var(--blueberry600)] text-lg font-bold ml-[8px]">
          Volver
        </div>
      </button>
  );
};

export default RedirectButtonReturn;
