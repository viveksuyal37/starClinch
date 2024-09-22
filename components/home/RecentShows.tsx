'use client';

import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import MaxWidthWrapper from './MaxWidthWrapper';

const RecentShows = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.intersectionRatio > 0.1);
      },
      {
        threshold: [0.1],
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      sectionRef.current && observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-14 w-full flex min-h-screen">
      <div className="relative  w-[180px] text-2xl overflow-hidden">
        <div className="rotate-[-45deg] w-full absolute left-0 top-[5%]">
          <motion.div
            initial={{ x: '50%' }}
            animate={{ x: '-50%' }}
            transition={{
              repeat: Infinity,
              repeatType: 'reverse',
              duration: 30,
              ease: 'linear',
            }}
            className=" flex gap-5 bg-gradient-to-b from-transparent via-[#FFFFFF20] to-transparent border-2 border-black py-2 w-max"
          >
            {Array(20)
              .fill(0)
              .map((_, i) => (
                <p key={i}>HEADLIGHTS OF TODAY</p>
              ))}
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0.5, x: -100 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 2 }}
      >
        <MaxWidthWrapper className="flex text-center flex-col items-center justify-center gap-14">
          <h1 className="leading-tight  font-light text-[40px] 2xl:text-[64px] max-w-[50vw]">
            Recent shows made star-studded via StarClinch
          </h1>
          <RecentShowsSlider />
        </MaxWidthWrapper>
      </motion.div>
      <div className="relative w-[180px] text-2xl overflow-hidden ">
        <div className="rotate-[-45deg] w-full absolute right-0 bottom-[5%]">
          <motion.div
            initial={{ x: '-50%' }}
            animate={{ x: '50%' }}
            transition={{
              repeat: Infinity,
              repeatType: 'reverse',
              duration: 30,
              ease: 'linear',
            }}
            className=" flex gap-5 bg-gradient-to-b from-transparent via-[#FFFFFF20] to-transparent border-2 border-black py-2 w-max"
          >
            {Array(20)
              .fill(0)
              .map((_, i) => (
                <p key={i}>HEADLIGHTS OF TODAY</p>
              ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default RecentShows;

const RecentShowsSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const isLastSlide = currentSlideIndex === 2;
  const isFirstSlide = currentSlideIndex === 0;
  const clientWidth = typeof window !== 'undefined' ? window.innerWidth : 1366;

  const isFHD = clientWidth > 1366;

  console.log({ currentSlideIndex, isFirstSlide, isLastSlide });

  const handleClick = (btn: 'prev' | 'next') => {
    if (sliderRef.current) {
      switch (btn) {
        case 'prev':
          // eslint-disable-next-line no-unused-expressions
          !isFirstSlide && setCurrentSlideIndex(prev => prev - 1);
          sliderRef.current.scrollLeft -= isFHD ? 700 : 500;
          break;
        case 'next':
          // eslint-disable-next-line no-unused-expressions
          !isLastSlide && setCurrentSlideIndex(prev => prev + 1);
          sliderRef.current.scrollLeft += isFHD ? 700 : 500;
          break;
      }
    }
  };

  return (
    <div className="flex items-center justify-center gap-10 w-[80vw]">
      <button
        disabled={isFirstSlide}
        onClick={() => handleClick('prev')}
        className="p-1 disabled:opacity-30 rounded-full border border-gray-500"
      >
        <svg
          className="w-10 h-10"
          viewBox="0 0 77 77"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.6136 35.834L47.1637 25.4674C47.7535 25.2281 48.3132 25.8688 47.9969 26.4211L41.7464 37.3347C41.6357 37.5279 41.6283 37.7636 41.7267 37.9634L47.9969 50.7028C48.2884 51.2952 47.6378 51.9075 47.0642 51.5807L21.5339 37.0368C21.0478 36.7599 21.0952 36.0444 21.6136 35.834Z"
            fill="#DBDEE9"
          ></path>
        </svg>
      </button>
      <div className="flex items-center gap-10 justify-center">
        <div
          ref={sliderRef}
          className="scroll-smooth w-[500px] 2xl:w-[700px] xl:h-[500px] 2xl:h-[700px] rounded-t-full relative overflow-hidden flex child:flex-shrink-0"
        >
          <Image
            src="/assets/images/nora.jpg"
            alt="nora"
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
          <Image
            src="/assets/images/samay.jpg"
            width={500}
            alt="samay"
            height={500}
            className="w-full h-full object-cover"
          />
          <Image
            src="/assets/images/zakir.png"
            width={500}
            alt="zakir"
            height={500}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-[300px] text-2xl 2xl:text-3xl text-left flex flex-col gap-5 items-start">
          {/* forceful re-render to start animation */}
          <motion.p
            key={currentSlideIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2 }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam illum
            itaque rerum modi.
          </motion.p>
          <div className="text-gray-500 flex items-center gap-2">
            <Calendar />
            <p className="text-gray-500 text-[1.3rem]">12 sep 2024</p>
          </div>
        </div>
      </div>
      <button
        disabled={isLastSlide}
        onClick={() => handleClick('next')}
        className="p-1 disabled:opacity-30 rounded-full border border-gray-500"
      >
        <svg
          className="w-10 h-10"
          viewBox="0 0 77 77"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M55.1888 35.834L29.6387 25.4674C29.049 25.2281 28.4893 25.8688 28.8056 26.4211L35.0561 37.3347C35.1668 37.5279 35.1742 37.7636 35.0758 37.9634L28.8056 50.7028C28.5141 51.2952 29.1646 51.9075 29.7383 51.5807L55.2686 37.0368C55.7547 36.7599 55.7073 36.0444 55.1888 35.834Z"
            fill="#DBDEE9"
          ></path>
        </svg>
      </button>
    </div>
  );
};
