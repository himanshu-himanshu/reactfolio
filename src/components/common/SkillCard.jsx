import React from "react";

const SkillCard = ({ src, title }) => {
  return (
    <div class="shadow-lg duartion-150 p-8">
      <img src={src} alt={title} className="w-12 md:w-20 mx-auto" />
      <p class="my-4 text-sm md:text-lg font-bold tracking-wider">{title}</p>
    </div>
  );
};

export default SkillCard;
