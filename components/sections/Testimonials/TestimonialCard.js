import React from 'react';

const TestimonialCard = ({ bgColor, content, author }) => {
  return (
    <div
      className={`${bgColor} p-8 rounded-lg shadow-sm w-full font-sans flex flex-col justify-between flex-grow`}
    >
      <div>{content}</div>
      <div className="flex items-center mt-6">
        <img
          src={author.imgSrc}
          alt={author.name}
          className="w-10 h-10 rounded-full mr-3"
        />
        <div>
          <p className="text-sm font-semibold text-[#333]">{author.name}</p>
          <p className="text-xs text-[#555]">{author.title}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
