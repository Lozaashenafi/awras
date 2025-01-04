import React from "react";
import hero from "../../assets/images/hero.png";
import { useTranslation } from "react-i18next";

function Hero() {
  const { t } = useTranslation();

  return (
    <>
      <div className="container mx-auto mt-10 items-center justify-around px-6 py-12 relative initial flex md:mt-20">
        <div className="w-2"></div>
        <div className="max-w-xl">
          <div className="absolute opacity-25 w-72 h-72 border border-primaryBlue rounded-full customTopLeftUper left-6">
            <div className="absolute w-60 h-60 border border-primaryBlue rounded-full customTopLeftUnder left-6">
              <div className="absolute w-48 h-48 border border-primaryBlue rounded-full customTopLeftUnder left-6">
                <div className="absolute w-36 h-36 border border-primaryBlue rounded-full customTopLeftUnder left-6"></div>
              </div>
            </div>
          </div>
          <h1 className="text-5xl font-bold fontFam text-primaryBlue">
            {t("hero.title1")}
            <span className="text-orange">{t("hero.title2")}</span> <br />
            {t("hero.title3")}{" "}
            <span className="text-orange">{t("hero.title4")}</span> <br />
            {t("hero.title5")}
            <span className="text-orange"> {t("hero.title6")}</span>
          </h1>
        </div>
        <div className="relative ">
          <div className="sm:w-80 sm:mx-auto">
            {/* Outer Circle with border */}
            <div className="absolute hidden w-40 h-40 opacity-25 border border-primaryBlue rounded-full customTop left-6 md:w-80 md:h-80 md:block"></div>

            {/* Inner Circle with image */}
            <div className="relative w-40 h-40 bg-primaryBlue  rounded-full flex items-center justify-center overflow-hidden md:w-80 md:h-80 ">
              <div className="w-48 h-48 md:w-72 md:h-72">
                <img
                  src={hero}
                  alt="Student"
                  className="w-full h-full object-contain mt-3"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-8 relative">
          <div className="absolute opacity-25 w-72 h-72 border border-primaryBlue rounded-full customTopRightUpper left-6">
            <div className="absolute w-60 h-60 border border-primaryBlue rounded-full customTopRightUnder left-6">
              <div className="absolute w-48 h-48 border border-primaryBlue rounded-full customTopRightUnder left-6">
                <div className="absolute w-36 h-36 border border-primaryBlue rounded-full customTopRightUnder left-6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
