import classNames from 'classnames';
import Image from 'next/image';
import MaxWidthWrapper from './MaxWidthWrapper';

const Timeline = () => {
  const timeline = new Array(4).fill('');

  return (
    <MaxWidthWrapper>
      <section className=" my-10 flex flex-col items-center justify-center gap-y-10 text-center child:flex child:items-end child:gap-16 child:m-12 leading-tight child:opacity-30 ">
        {timeline.map((_, index) => (
          <div
            key={index}
            className={classNames(
              'hover:opacity-100 transition-all duration-500 ease-in-out group',
              {
                'self-start': index % 2 === 0,
                'relative left-10': index % 2 !== 0,
              },
            )}
          >
            <h2 className="text-[40px] 2xl:text-[50px] max-w-[400px] 2xl:max-w-[500px]">
              Late Night Maggie Party for the boost
            </h2>
            <div className="w-[300px] 2xl:w-[400px] h-[300px] 2xl:h-[400px] relative ">
              <Image
                src={
                  index % 2 === 0
                    ? '/assets/images/maggie1.webp'
                    : '/assets/images/maggie2.webp'
                }
                objectFit="cover"
                className="rounded-[30px] 2xl:rounded-[40px] transform rotate-[10deg] group-hover:scale-110 group-hover:rotate-[-5deg] tansition-all duration-500 ease-in-out"
                fill
                alt="timeline"
              />
            </div>
          </div>
        ))}
      </section>
    </MaxWidthWrapper>
  );
};
export default Timeline;
