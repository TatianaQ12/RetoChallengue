import React from "react";

export const Navbar = () => {
  return (
    <>
      <div className="header__logo">
        <img
          src="src/img/logo.svg"
          width="73"
          className="select-none"
          alt="logo rimac"
        />
      </div>
      <div className="header__right">
        <button
          type="button"
          className="text-xs tracking-[.2px] font-br-sonoma-medium text-[var(--gray1)] hover:underline active:text-[var(--neutrals6)] hide-for-mobile"
        >
          ¡Compra por este medio!
        </button>
        <a href="tel:+0114116001" className="ml-4">
          <h3>(01) 411 6001</h3>
        </a>
      </div>
    </>
  );
};
