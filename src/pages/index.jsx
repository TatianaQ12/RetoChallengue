import React from "react";
import Title from "../components/Title";
import RedirectButton from "../components/RedirectButton";
import { Navbar } from "../components/Navbar";

function LoginIndex() {
  return (
    <>
      <div id="root">
        <div className="header-login">
          <div className="header">
            <img
              src="src/img/blur-asset-left.png"
              className="absolute left-0 bottom-0 select-none hide-for-mobile"
            ></img>
            <img
              src="src/img/blur-asset.png"
              className="absolute right-0 top-0 select-none hide-for-mobile"
            />
            <nav className="container">
              <Navbar></Navbar>
            </nav>
          </div>
        </div>
        <section className="login">
          <div className="container">
            <div className="login__left select-none hide-for-mobile">
              <img src="src/img/portada-login.jpeg" alt="portada rimac" />
            </div>
            <div className="login__right">
              <div className="login__right--mobil">
                <div>
                  <div className="tag-promo">Seguro Salud Flexible</div>
                  <div className="info">
                    <h1 className="font-br-sonoma-bold text-[32px] leading-[40px] text-[var(--gray1)]">
                      Creado para ti y tu familia
                    </h1>

                    <Title
                      text={
                        "Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría. 100% online"
                      }
                    ></Title>
                  </div>
                </div>
                <div className="hide-for-desktop login__right--mobil--img">
                  <img
                    src="./RIMAC Seguros _ Seguro Vehicular, EPS, Seguro de Salud, SOAT, SCTR_files/portada-login.png"
                    alt=""
                  />
                </div>
              </div>

              <form className="mt-6">
                <div className="inputSelect">
                  <div className="inputSelect--select">
                    <select id="documentType" name="documentType">
                      <option value="DNI">DNI</option>
                      <option value="RUC">RUC</option>
                    </select>
                  </div>
                  <div className="input__login w-full">
                    <input
                      type="text"
                      id="document"
                      name="documentNumber"
                      placeholder=" "
                      value=""
                    />
                  </div>
                </div>
                <div className="input__login mt-4 ">
                  <input type="number" id="cel" name="phoneNumber" value="" />
                  <label className="before">
                    <div className="paragraph font-br-sonoma-regular">
                      Celular
                    </div>
                  </label>
                </div>
                <div className="mt-6">
                  <label className="check__label ">
                    <input type="checkbox" name="acceptPrivacyPolicy" />
                    <div className="paragraph font-br-sonoma-regular text-[12px] leading-[20px] tracking-[.1px] text-[#0A051E]">
                      Acepto la Política de Privacidad
                    </div>
                  </label>
                  <label className="check__label mt-4 ">
                    <input
                      type="checkbox"
                      name="acceptCommercialCommunications"
                    />

                    <div className="paragraph font-br-sonoma-regular text-[12px] leading-[20px] tracking-[.1px] text-[#0A051E]">
                      Acepto la Política Comunicaciones Comerciales
                    </div>
                  </label>
                </div>
                <br />
                <u>
                  <b>Aplican Términos y Condiciones.</b>
                </u>
              </form>
              <br />
              <RedirectButton />
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="contenidofooter">
            <div className="footer__left">
              <img
                src="src/img/logo.svg"
                className="hide-for-desktop m-auto"
                width="138"
                alt="logo rimac"
              />
            </div>
            <div className="footer__right">
              <div className="font-br-sonoma-regular text-[14px] leading-[18px] text-[var(--gray10)]">
                © 2024 RIMAC Seguros y Reaseguros.
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default LoginIndex;
