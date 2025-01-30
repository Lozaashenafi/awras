import React from "react";
import { useTranslation } from "react-i18next";
import ServiceCard from "./ServiceCard";
import icon1 from "../../assets/icons/Icon.png";
import icon2 from "../../assets/icons/Icon2.png";
import icon3 from "../../assets/icons/Icon3.png";


function OurService() {
  const { t } = useTranslation();
  return (
    <section className="section-container bg-white">
      {/* Title Section */}
      <div className="text-center mb-10">
        <p className="text-orange text-base font-semibold">
          {t("service.title")}
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold text-dark mb-6 mt-8">
          Fostering a playful & engaging learning
          <br className="hidden md:block" /> environment
        </h2>
        <button className="px-6 py-3 text-white bg-primaryBlue rounded-lg hover:bg-primaryBlue transition duration-300">
          Get Started
        </button>
      </div>

      {/* Cards Section */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        <ServiceCard
          title="Certification Programs"
          description="Earn recognized certifications to boost your resume and ..."
          bgColor="bg-primaryBlue"
          textColor="text-white"
          titleColor="text-white"
          icon={icon1}
        />
        <ServiceCard
          title="Interactive Courses"
          description="Engage with dynamic content that includes videos, quizzes, and ..."
          icon={icon2}
        />
        <ServiceCard
          title="Flexible Learning"
          description="Study at your own pace with our on-demand courses, accessible anytime ..."
          icon={icon3}
        />
      </div>
    </section>
  );
}

export default OurService;
