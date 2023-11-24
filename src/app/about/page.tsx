"use client";
import { useState, useRef, useEffect, FC } from "react";
import React from "react";

interface TimelineProps {
  year: string;
}

interface ItemProps {
  year: string;
  isLastItem?: boolean;
}

const Year: FC<TimelineProps> = ({ year }) => (
  <li className="timeline-items my-4 px-0 text-gray-500 list-none list-inside border-b border-dotted border-gray-300 cursor-pointer transition-all duration-300 ease-out hover:text-black">
    <span>{year}</span>
  </li>
);

const Item: FC<ItemProps> = ({ year, isLastItem = false }) => (
  <div className={`milestone ${isLastItem ? "mb-[280px]" : ""}`}>
    <h2 className="text-2xl py-4">{year}</h2>
    <p className="text-gray-700">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur.
    </p>
  </div>
);

const About: FC = () => {
  const [stickyTop, setStickyTop] = useState(0);
  const [scrollTarget, setScrollTarget] = useState<number | false>(false);
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const itemsRef = useRef<HTMLLIElement[]>([]);
  


  const TIMELINE_VALUES = {
    start: 280,
    step: 30,
  };

  useEffect(() => {
    const milestoness = document.querySelectorAll('.timeline__section .milestone') as NodeListOf<HTMLDivElement>;


    const timeline = timelineRef.current;
    
    const items = itemsRef.current || [];
    const milestones = Array.from(milestoness) || [];
    console.log(timeline);
    

    const offsetTop = timeline
      ? parseInt(window.getComputedStyle(timeline).top + 130 || "0")
      : 0;

      console.log(offsetTop);
      

    const handleResize = () => {
      if (timeline) {
        console.log('b',timeline.offsetTop);

        console.log('c',offsetTop);
        
        timeline.classList.remove("fixed");
        setStickyTop(timeline.offsetTop - offsetTop);
        window.dispatchEvent(new Event("scroll"));
      }
    };

    const handleScroll = () => {
      setScrollTarget(false);
      console.log(window.scrollY);
      console.log('aaa', stickyTop);
      
      
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

        const scrollTargetTop = milestone.offsetTop + 60;

        console.log(milestone.offsetTop);
        
        console.log('erst:',scrollTargetTop);
        

        window.scrollTo({
          top: scrollTargetTop,
          behavior: "smooth",
        });

      }
    };

    const handleScrollEvent = () => {
      const viewLine = window.scrollY + window.innerHeight / 3 - 130;
      // console.log(viewLine);
      
      let active = -1;

      // console.log(scrollTarget);

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
    <div className="bg-white">
      <article className="timeline box-border relative max-w-[980px] mx-auto text-justify">
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
            <Year year="1993" />
            <Year year="1994" />
            <Year year="1995" />
            <Year year="1996" />
            <Year year="1997" />
            <Year year="1998" />
            <Year year="1999" />
            <Year year="2000" />
            <Year year="2001" />
            {/* ... add the rest of the years */}
          </ul>
        </nav>
        <section className="timeline__section">
          <div className="wrapper mx-auto px-[16.66%] pb-[50px]">
            <Item year="1993" />
            <Item year="1994" />
            <Item year="1995" />
            <Item year="1996" />
            <Item year="1997" />
            <Item year="1998" />
            <Item year="1999" />
            <Item year="2000" />
            <Item year="2001" isLastItem={true} />
            {/* ... add the rest of the items */}
          </div>
        </section>
      </article>
    </div>
  );
};

export default About;
