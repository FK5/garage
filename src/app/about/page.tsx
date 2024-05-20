"use client";
import { useState, useRef, useEffect, FC } from "react";
import React from "react";

interface TimelineProps {
  year: string;
}

interface ItemProps {
  text: string;
  year: string;
  isLastItem?: boolean;
}

const Year: FC<TimelineProps> = ({ year }) => (
  <li className="timeline-items my-4 px-0 text-gray-500 list-none list-inside border-b border-dotted border-gray-300 cursor-pointer transition-all duration-300 ease-out hover:text-black">
    <span>{year}</span>
  </li>
);

const Item: FC<ItemProps> = ({ text, year, isLastItem = false }) => (
  <div className={`milestone mb-8 sm:mb-16 ${isLastItem ? "mb-[270px]" : ""}`}>
    <h2 className="text-black font-extrabold text-lg sm:text-xl py-4">{year}</h2>
    <p className="text-gray-700  text-xl sm:text-3xl ">
      {text}
    </p>
  </div>
);

const About: FC = () => {
  const [stickyTop, setStickyTop] = useState(0);
  const [scrollTarget, setScrollTarget] = useState<number | false>(false);
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const itemsRef = useRef<HTMLLIElement[]>([]);

  const storyItems = [
    {id: 1, year: "1999" , text: 'In Riyadh, Saudi Arabia, our story started in a small garage, but it was just the beginning of something much bigger.'},
    {id: 2, year: "2002" , text: 'Our journey marked its first milestone with the opening of MyCar in Riyadh, Saudi Arabia, where our dedication to quality service and customer satisfaction took root in the heart of the city.'},
    {id: 3, year: "2012" , text: 'In the face of numerous challenges, including regulatory hurdles and economic fluctuations, conflicts emerged, ultimately influencing our difficult decision to depart from KSA.'},
    {id: 4, year: "2013" , text: 'We established our first MyCar branch in Lebanon, located in the area of Jnah. This strategic location allowed us to serve our customers efficiently and effectively, laying the groundwork for our expansion in the Lebanese market.'},
    {id: 5, year: "2017" , text: 'We proudly launched one of Lebanon\'s largest companies in Khaldeh, our second branch spanning an impressive 6500 square meters.'},
    {id: 6, year: "2019" , text: 'Regrettably, due to the economic crisis, we were compelled to cease operations of the company.'},
    {id: 7, year: "2024" , text: 'The dawn of a new era begins with RoadRover. We proudly announce the opening of our first branch dedicated to Land Rover, marking the inception of a vast automotive garage chain. This venture embodies a fresh Lebanese concept in the automotive industry.'}
  ]

  const TIMELINE_VALUES = {
    start: 280,
    step: 30,
  };

  useEffect(() => {
    const milestoness = document.querySelectorAll(
      ".timeline__section .milestone"
    ) as NodeListOf<HTMLDivElement>;

    const timeline = timelineRef.current;

    const items = itemsRef.current || [];
    const milestones = Array.from(milestoness) || [];

    const offsetTop = timeline
      ? parseInt(window.getComputedStyle(timeline).top + 130 || "0")
      : 0;

    const handleResize = () => {
      if (timeline) {

        timeline.classList.remove("fixed");
        setStickyTop(timeline.offsetTop - offsetTop);
        window.dispatchEvent(new Event("scroll"));
      }
    };

    const handleScroll = () => {
      setScrollTarget(false);

      if (window.scrollY > stickyTop) {
        timeline?.classList.add("fixed");
      } else {
        timeline?.classList.remove("fixed");
      }
    };

    const handleItemClick = (index: number) => () => {
      const milestone = milestones && milestones[index];

      if (items && !items[index]?.classList.contains("active") && milestone) {
        setScrollTarget(index);

        const scrollTargetTop = milestone.offsetTop + 10;

        window.scrollTo({
          top: scrollTargetTop,
          behavior: "smooth",
        });
      }
    };

    const handleScrollEvent = () => {
      const viewLine = window.scrollY + window.innerHeight / 3 - 130;
      let active = -1;

      if (scrollTarget === false) {
        milestones.some((milestone, index) => {
          if (milestone.offsetTop - viewLine > 0) {
            return true;
          }

          active = index;
          return false;
        });
      } else {
        active = scrollTarget as number;
      }

      timeline?.style.setProperty(
        "top",
        -1 * active * TIMELINE_VALUES.step + TIMELINE_VALUES.start + "px"
      );

      items.forEach((item) => item.classList.remove("active"));

      items[active !== -1 ? active : 0]?.classList.add("active");
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    items.forEach((item, index) => {
      const span = item.querySelector("span");
      if (span) {
        span.addEventListener("click", handleItemClick(index));
      }
    });

    window.addEventListener("scroll", handleScrollEvent);

    handleResize(); // Initial setup

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      items?.forEach((item, index) => {
        const span = item.querySelector("span");
        if (span) {
          span.removeEventListener("click", handleItemClick(index));
        }
      });
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, [stickyTop, scrollTarget]);

  return (
    <div className="sm:pl-2 pl-8 bg-white">
      <article className="timeline box-border relative max-w-[980px] mx-auto sm:text-justify">
        <nav
          ref={timelineRef}
          className="timeline__nav fixed z-10 transition-top duration-300"
        >
          <ul
            ref={(ref) => {
              if (ref) {
                itemsRef.current = Array.from(ref.children) as HTMLLIElement[];
              }
            }}
            className="list-none list-inside my-[15px]"
          >
            {storyItems.map((e) => <Year key={e.id} year={e.year} />)}
          </ul>
        </nav>
        <section className="timeline__section sm:pb-20">
          <div className="wrapper mx-auto px-[16.66%] pb-[50px]">
            {storyItems.map((e, index) => <Item key={e.id} year={e.year} text={e.text} isLastItem={index == storyItems.length - 1}/>)}
          </div>
        </section>
      </article>
    </div>
  );
};

export default About;
