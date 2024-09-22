import { dancingScript } from '@/app/fonts/fonts';
import { ArrowRight } from 'lucide-react';
import MaxWidthWrapper from './MaxWidthWrapper';

const TeamInfo = () => {
  return (
    <div className="relative my-20 flex items-center h-[80vh] overflow-clip">
      {/* Circles in the background */}
      <div className="absolute z-0 -top-0 -right-[20%] w-[500px] 2xl:w-[700px] rounded-full bg-gradient-to-b from-red-400 to-black h-[500px] 2xl:h-[700px]"></div>
      <div className="absolute z-0 -top-0 -left-[20%] w-[500px] 2xl:w-[700px] rounded-full bg-gradient-to-t from-red-400  to-black h-[500px] 2xl:h-[700px]"></div>

      <MaxWidthWrapper className="min-h-[450px] 2xl:h-[600px] relative z-10 overflow-clip">
        <div className=" bg-gradient-to-r from-[rgb(24,24,41)] to-red-100 rounded-full p-0.5 w-full h-full">
          <section className=" rounded-full  w-full backdrop-blur-[20px]  h-full inner-shadow-3 drop-shadow-2xl   bg-gradient-to-t from-[rgba(24,24,41,0.7)] to-[#000000ED] p-14">
            <div className="flex flex-col gap-5 items-center">
              <div className="relative">
                <div className=" rotate-[-15deg] w-max relative -left-20 text-2xl text-pink-400 italic font-semibold  ">
                  <span className={`${dancingScript.className}`}>
                    We are the team of
                  </span>
                  <svg
                    className="absolute -right-8 top-5 w-max h-[70px] 2xl:h-[100px]"
                    viewBox="0 0 288 124"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M278.506 61.9861L277.543 61.7189L278.506 61.9861ZM239.704 91.8332L251.11 93.6294L246.962 82.8531L239.704 91.8332ZM261.227 22.8405C268.013 25.6262 273.581 29.8457 276.717 36.0421C279.851 42.2332 280.637 50.5576 277.543 61.7189L279.47 62.2532C282.655 50.7637 281.922 41.8978 278.502 35.1389C275.083 28.3852 269.062 23.8948 261.987 20.9903L261.227 22.8405ZM277.543 61.7189C275.812 67.9598 270.983 73.3278 265.194 77.7298C259.421 82.1192 252.809 85.4611 247.706 87.6827L248.504 89.5164C253.682 87.2623 260.454 83.846 266.404 79.3218C272.338 74.8102 277.569 69.1093 279.47 62.2532L277.543 61.7189Z"
                      fill="#FF7970"
                    ></path>
                  </svg>
                </div>
                <div className="absolute rotate-[-10deg] -left-20 2xl:-left-14 bottom-0 rounded-full p-[10px_40px] bg-gradient-to-br from-black via-gray-800 to-gray-900 border border-gray-500 ">
                  Fun
                </div>
                <div className="absolute rotate-[10deg] -right-10 top-4  rounded-full p-[10px_40px] bg-gradient-to-br from-black via-gray-800 to-gray-900 border border-gray-500">
                  Inclusive
                </div>
                <h1 className="text-[60px] 2xl:text-[100px]">
                  20+ Talented Folks
                </h1>
              </div>
              <div className="max-w-[35vw] font-light text-center text-[1rem] 2xl:text-[1.5rem] leading-tight">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
                modi facere ducimus, quidem dolores illum . Non modi facere
                ducimus.
              </div>
              <button className="bg-gradient-to-b font-[300] from-[#F16633CC] to-[#FD2D7DCC]  transition-all duration-300 text-[24px] group rounded-full p-[10px_20px] text-center flex items-center justify-center gap-4 mb-10">
                <span>Join our team</span>
                <ArrowRight />
                <div className="child:absolute child:bottom-0 child:rounded-full child:p-[10px_40px] child:bg-gradient-to-br child:from-black child:via-gray-800 child:to-gray-900 child:border child:border-gray-500 child:backdrop-blur-md child:transform child:transition-all child:duration-500 child:ease-in child:opacity-30">
                  <div className="left-[25%] transform rotate-[15deg] group-hover:scale-125 group-hover:!bottom-4 group-hover:!opacity-80">
                    Focused
                  </div>
                  <div className="left-[33%] transform rotate-[-15deg] z-10  group-hover:scale-125 group-hover:!bottom-2 group-hover:!opacity-80">
                    Collaborative
                  </div>
                  <div className="left-[45%] transform rotate-[15deg] group-hover:scale-125 group-hover:!bottom-4 group-hover:!opacity-80">
                    United
                  </div>
                  <div className="left-[53%] transform rotate-[-15deg] group-hover:scale-125 group-hover:!bottom-4 group-hover:!opacity-80">
                    Vibrant
                  </div>
                  <div className="left-[59%] transform rotate-[18deg] group-hover:scale-125 group-hover:!bottom-4 group-hover:!opacity-80">
                    Innovative
                  </div>
                  <div className="left-[67%] transform rotate-[-15deg] group-hover:scale-125 group-hover:!bottom-4 group-hover:!opacity-80">
                    Motivated
                  </div>
                </div>
              </button>
            </div>
          </section>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};
export default TeamInfo;
