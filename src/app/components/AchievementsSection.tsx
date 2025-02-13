
"use client";
import React from "react";

// const AnimatedNumbers = dynamic(
//   () => import("react-animated-numbers"),
//   { ssr: false }
// );

const achievementsList = [
  {
    metric: "Projects",
    value: "100",
    postfix: "+",
  },
  {
    prefix: "~",
    metric: "Users",
    value: "100000", 
  },
  {
    metric: "Awards",
    value: "7",
  },
  {
    metric: "Years",
    value: "5",
  },
];

const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => {
          const { prefix = "", postfix = "", metric } = achievement;
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              <h2 className="text-white text-4xl font-bold flex flex-row">
                {prefix}
                {/* <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(value.replace(/,/g, ""))}
                  locale="en-US"
                  className="text-white text-4xl font-bold"
                  configs={(_:any, index:number) => ({
                    mass: 1,
                    friction: 100,
                    tension: 140 * (index + 1),
                  })}
                /> */}
                {postfix}
              </h2>
              <p className="text-[#ADB7BE] text-base">{metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
