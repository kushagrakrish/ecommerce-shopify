import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { sliderData } from "../../assets/data/dummyData";
import {
  nextSlide,
  prevSlide,
  dotSlide,
} from "../../app/features/slices/SliderSlice";

const Slider = () => {
  const slideIndex = useSelector((state) => state.slider.value);
  const dispatch = useDispatch();

  return (
    <div className='relative pb-4'>
      <div>
        {sliderData.map((item) => {
          return (
            <div
              key={item.id}
              className={
                parseInt(item.id) === slideIndex
                  ? "opacity-100 duration-700 ease-in-out scale-100"
                  : "opacity-0 duration-700 ease-in-out scale-95"
              }
            >
              <div className=''>
                {parseInt(item.id) === slideIndex && (
                  <img
                    className='h-screen object-cover w-full bg-blend-darken brightness-50'
                    src={item.img}
                    alt='shoes'
                  ></img>
                )}
              </div>
              <div className='absolute top-1/2 w-full mx-auto '>
                <p className='text-white text-xl text-center md:text-5xl lg:w-3/4 font-inter font-bold tracking-normal leading-none px-16 mx-auto'>
                  {parseInt(item.id) === slideIndex && item.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className='flex items-center justify-center mx-auto w-full bottom-8 absolute'>
        {sliderData.map((dot, index) => {
          return (
            <div
              className='mr-4'
              key={dot.id}
              onClick={() => dispatch(dotSlide(index))}
            >
              <div
                className={
                  index === slideIndex
                    ? "bg-green-300 rounded-full p-2 cursor-pointer"
                    : "bg-white rounded-full p-2 cursor-pointer"
                }
              ></div>
            </div>
          );
        })}
      </div>
      <div>
        <button
          className='absolute top-[50%] right-4 bg-white rounded-full p-2 hover:bg-green-300'
          onClick={() => dispatch(nextSlide(slideIndex + 1))}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M8.25 4.5l7.5 7.5-7.5 7.5'
            />
          </svg>
        </button>
        <button
          className='absolute top-[50%] left-4 bg-white rounded-full p-2 hover:bg-green-300'
          onClick={() => dispatch(prevSlide(slideIndex - 1))}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M15.75 19.5L8.25 12l7.5-7.5'
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Slider;
