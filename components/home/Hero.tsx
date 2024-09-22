'use client';

import { motion } from 'framer-motion';
import { memo, useEffect, useRef, useState } from 'react';

const Hero = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const scrollTop =
      sectionRef.current?.scrollTop || document.documentElement.scrollTop;
    scrollTop < 10000 && setScrollPosition(scrollTop);
  };

  useEffect(() => {
    document?.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getImageOnScroll = () => {
    if (scrollPosition < 2250) {
      return '/assets/images/nora.jpg';
    } else if (scrollPosition < 4500) {
      return '/assets/images/hero1.jpg';
    } else if (scrollPosition < 6750) {
      return '/assets/images/hero2.jpg';
    } else {
      return '/assets/images/samay.jpg';
    }
  };

  return (
    <section>
      <div ref={sectionRef} className="w-full h-[9000px] my-20 relative ">
        <div className="w-full max-w-[85vw] mx-auto flex sticky top-10 2xl:top-20 items-center h-screen  justify-center gap-24">
          {/* rotating text */}
          {/* <div>
            <motion.p
              initial={{ opacity: 1, rotate: 0, y: 0 }}
              animate={{ opacity: 0, rotate: -90, y: -100 }}
              transition={{ duration: 2 }}
              className="animate-text absolute xl:-left-2 2xl:-left-36
               top-96 text-[80px] font-normal z-40"
            >
              Dancer
            </motion.p>
            <p
              className=" absolute xl:-left-2 2xl:-left-36
               top-96  text-[80px] font-normal z-40"
            >
              Anchor
            </p>
            <p
              className=" absolute xl:-left-2 2xl:-left-36
               top-96  text-[80px] font-normal z-40"
            >
              Live Band
            </p>
            <p
              className=" absolute xl:-left-2 2xl:-left-36
               top-96  text-[80px] font-normal z-40"
            >
              Comedian
            </p>
          </div> */}

          {/* left circular image */}
          <div className="bg-red-400 w-[450px] 2xl:w-[650px] h-[450px] 2xl:h-[650px] rounded-full p-1.5 2xl:p-2.5 overflow-hidden">
            <div className="rounded-full w-full h-full overflow-hidden">
              {/* dynamically change path */}
              <HeroImageProvider
                key={getImageOnScroll()}
                img={getImageOnScroll()}
              />

              {/* TODO:add circle overlay */}
            </div>
          </div>

          {/* explore text */}
          <div className="w-1/3">
            <p className="text-[50px] 2xl:text-[65px] leading-tight mb-5 2xl:mb-8 ">
              <span className="text-gray-400">
                Choose <br /> from{' '}
              </span>
              10+ <br /> categories
            </p>
            <span className="text-[30px] bg-gradient-to-r from-[#ad7289] to-[#fc561f] to-100% bg-clip-text text-transparent">
              Explore all categories -&gt;
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;

const HeroImageProvider = memo(({ img }: { img: string }) => {
  return (
    <motion.img
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      src={img}
      alt="artist image"
      className="w-full h-full object-cover  "
    />
  );
});

HeroImageProvider.displayName = 'HeroImageProvider';
