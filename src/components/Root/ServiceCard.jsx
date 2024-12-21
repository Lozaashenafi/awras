import React from "react";
import arrow from "../../assets/icons/arrow.png";

function ServiceCard({
  title,
  description,
  bgColor = "bg-white",
  textColor = "text-text",
  titleColor = "text-dark",
  icon,
}) {
  return (
    <div className={`${bgColor} cardBorder rounded-lg p-6 w-80`}>
      {/* Icon and Title */}
      <div className="flex gap-3">
        <div className="w-9 h-9 mt-1 bg-lightBlue rounded-lg">
          <img src={icon} alt="Icon" className="w-5 mt-2 ml-2" />
        </div>
        <h3 className={`text-lg font-semibold pt-2   ${titleColor} `}>
          {title}
        </h3>
      </div>

      {/* Description */}
      <p className={`text-sm py-5 leftAlign ${textColor}`}>{description}</p>

      {/* Learn More Button */}
      <div className="flex gap-3">
        <button className={` ${textColor} hover:text-primaryBlue text-base`}>
          Learn More
        </button>
        <div className="w-3 h-4 my-auto mt-1">
          <img src={arrow} alt="Arrow" />
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
