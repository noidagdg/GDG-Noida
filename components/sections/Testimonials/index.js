// components/Testimonial.js
import React from 'react';
import TestimonialCard from './TestimonialCard';
import { testimonials } from '../../../lib/content';

const Testimonial = () => {
  return (
    <section className="w-full font-sans bg-white py-14">
      <h2 className="text-3xl text-center text-gray-800 mb-12">
        <strong className="font-semibold">Success Stories </strong>
        that Define Our Community
      </h2>

      <div className="container mx-auto px-4">
        <div
          className="
            hide-scrollbar
            flex flex-nowrap items-stretch overflow-x-auto space-x-8 pb-4 lg:grid lg:grid-cols-3 lg:gap-8 lg:overflow-x-visible lg:space-x-0 lg:items-stretch"
        >
          {/* Column 1 */}
          <div className="flex-none w-80 sm:w-96 flex flex-col space-y-8 lg:w-auto h-full">
            <TestimonialCard
              bgColor={testimonials.card1.bgColor}
              content={testimonials.card1.content}
              author={testimonials.card1.author}
            />
            <TestimonialCard
              bgColor={testimonials.card3.bgColor}
              content={testimonials.card3.content}
              author={testimonials.card3.author}
            />
          </div>

          {/* Column 2 */}
          <div className="flex-none w-80 sm:w-96 flex flex-col space-y-8 lg:w-auto h-full">
            <TestimonialCard
              bgColor={testimonials.card2.bgColor}
              content={testimonials.card2.content}
              author={testimonials.card2.author}
            />
            <TestimonialCard
              bgColor={testimonials.card4.bgColor}
              content={testimonials.card4.content}
              author={testimonials.card4.author}
            />
          </div>

          {/* Column 3 */}
          <div className="flex-none w-80 sm:w-96 flex flex-col space-y-8 lg:w-auto h-full">
            <TestimonialCard
              bgColor={testimonials.card5.bgColor}
              content={testimonials.card5.content}
              author={testimonials.card5.author}
            />
            <TestimonialCard
              bgColor={testimonials.card6.bgColor}
              content={testimonials.card6.content}
              author={testimonials.card6.author}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
