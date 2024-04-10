import React, { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import RedirectButton from "../components/RedirectButtonReturn";
import RedirectButtonReturn from "../components/RedirectButtonReturn";

export const Principal = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const response = await fetch(
          "https://rimac-front-end-challenge.netlify.app/api/user.json"
        );
        const data = await response.json();
        setUserName(data.name);
      } catch (error) {
        console.error("Error fetching user name:", error);
      }
    };
    fetchUserName();
  }, []);

  return (
    <>
      <div id="root">
      <div className="header">
      <nav className="container">
              <Navbar></Navbar>
            </nav>
      </div>
        <div class="stepperHorizontal">
          <div class="container">
            <div class="flex items-center hide-for-mobile">
              <div class="flex items-center gap-[16px] mr-[16px]">
                <div class="bg-[var(--blueberry600)] rounded-full w-[24px] h-[24px] text-center text-[var(--white)] text-xs grid place-content-center font-bold">
                  1
                </div>
                <div class="text-base font-bold tracking-[.2px] text-[var(--neutrals7)]">
                  Planes y coberturas
                </div>
              </div>
              <img src="src/img/line-progress.svg" class="mr-[16px]" alt="" />
            </div>
            <div class="flex items-center gap-[16px] mr-[16px] hide-for-mobile">
              <div class="border border-[var(--neutrals6)] rounded-full w-[24px] h-[24px] text-center text-[var(--neutrals6)] text-xs grid place-content-center font-bold">
                2
              </div>
              <div class="text-base tracking-[.2px] text-[var(--neutrals6)]">
                Resumen
              </div>
            </div>
          </div>
        </div>

        <div class="plan">
          <div class="container">
            <div class="content">
              <RedirectButtonReturn></RedirectButtonReturn>
              <div class="content__info">
                <div class="w-full max-w-[544px] ml-auto mr-auto">
                  <h2 className="font-bold text-[40px] tracking-[-.6px] leading-[48px]">
                    
                    {userName
                      ? `${userName} ¿Para quién deseas cotizar?`
                      : "Cargando..."}
                  </h2>
                  <h3 class="text-[16px] tracking-[.1px] leading-7 text-[var(--neutrals7)] mt-[8px]">
                    Selecciona la opción que se ajuste más a tus necesidades.
                  </h3>
                </div>
              </div>
              <div class="planInfo mt-[32px]">
                <div class="check__label">
                  <input
                    type="radio"
                    id="pay1"
                    name="price"
                    hidden=""
                    value="para-mi"
                  />
                  <label for="pay1" class="check__label--info">
                    <div class="check__label--box"></div>
                    <img
                      src="src/img/IcProtectionLight.svg"
                      class="select-none"
                      alt=""
                    />
                    <div class="text-xl font-black tracking-[-.2px] text-[var(--neutrals7)] mt-[8px]">
                      Para mí
                    </div>
                    <div class="text-[12px] leading-5 tracking-[.2px] mt-[8px]">
                      Cotiza tu seguro de salud y agrega familiares si así lo
                      deseas.
                    </div>
                  </label>
                </div>
                <div class="check__label">
                  <input
                    type="radio"
                    id="pay2"
                    name="price"
                    hidden=""
                    value="para-alguien-mas"
                  />
                  <label for="pay2" class="check__label--info">
                    <div class="check__label--box"></div>
                    <img
                      src="src/img/IcAddUserLight.svg"
                      class="select-none"
                      alt=""
                    />
                    <div class="text-xl font-black tracking-[-.2px] text-[var(--neutrals7)] mt-[8px]">
                      Para alguien más
                    </div>
                    <div class="text-[12px] leading-5 tracking-[.2px] mt-[8px]">
                      Realiza una cotización para uno de tus familiares o
                      cualquier persona.
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
