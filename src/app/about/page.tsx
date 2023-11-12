"use client";
import { FC, useEffect } from "react";
const About: FC = () => {
  let a = [
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
  ];
  useEffect(() => {
    let stickyTop: number = 0;
    let scrollTarget: boolean | number = false;

    const timeline: HTMLElement | null =
      document.querySelector(".timeline__nav");
    const items: NodeListOf<HTMLLIElement> =
      document.querySelectorAll(".timeline__nav li");
    const milestones: NodeListOf<HTMLElement> = document.querySelectorAll(
      ".timeline__section .milestone"
    );
    const offsetTop: number = parseInt(
      window.getComputedStyle(timeline as HTMLElement).top
    );

    const TIMELINE_VALUES: { start: number; step: number } = {
      start: 190,
      step: 30,
    };

    window.addEventListener("resize", () => {
      if (timeline) {
        timeline.classList.remove("fixed");

        stickyTop =
          timeline.getBoundingClientRect().top + window.scrollY - offsetTop;

        window.dispatchEvent(new Event("scroll"));
      }
    });

    window.dispatchEvent(new Event("resize"));

    window.addEventListener("scroll", () => {
      if (timeline) {
        if (window.scrollY > stickyTop) {
          timeline.classList.add("fixed");
        } else {
          timeline.classList.remove("fixed");
        }
      }
    });

    items.forEach((item: HTMLLIElement) => {
      const span: HTMLSpanElement | null = item.querySelector("span");

      if (span) {
        span.addEventListener("click", () => {
          const li: HTMLLIElement = span.parentElement as HTMLLIElement;
          const index: number = Array.from(li.parentNode!.children).indexOf(li);
          const milestone: HTMLElement | undefined = milestones[index];

          if (li && !li.classList.contains("active") && milestone) {
            scrollTarget = index;

            const scrollTargetTop: number =
              milestone.getBoundingClientRect().top + window.scrollY - 80;

            window.scrollTo({
              top: scrollTargetTop,
              behavior: "smooth",
            });

            scrollTarget = false;
          }
        });
      }
    });

    window.addEventListener("scroll", () => {
      const viewLine: number = window.scrollY + window.innerHeight / 3;
      let active: number = -1;

      if (scrollTarget === false) {
        milestones.forEach((milestone: HTMLElement, index: number) => {
          if (
            milestone.getBoundingClientRect().top + window.scrollY - viewLine >
            0
          ) {
            return false;
          }

          active = index;
        });
      } else {
        active = scrollTarget as number;
      }

      if (timeline) {
        timeline.style.top =
          -1 * active * TIMELINE_VALUES.step + TIMELINE_VALUES.start + "px";

        items.forEach((item: HTMLLIElement) => {
          item.classList.remove("active");
        });

        items[active !== -1 ? active : 0].classList.add("active");
      }
    });

    window.dispatchEvent(new Event("scroll"));

    return () => {};
  }, []);

  return (
    <div className="h-auto bg-white">
      <article className="timeline relative max-w-[960px] mx-auto">
        <nav className="timeline__nav fixed z-10 top-0 transition-top duration-300 ease-out">
          <ul className="list-none list-inside my-4">
            {a.map((e, index) => (
              <li
                key={index}
                className="mb-4 pl-0 list-none text-[#bfc1c3] border-b border-dotted border-black-30 cursor-pointer transition-all duration-300 ease-out hover:color-black"
              >
                <span>{e}</span>
              </li>
            ))}
            {/* <li className="mb-4 pl-0 list-none text-[#bfc1c3] border-b border-dotted border-black-30 cursor-pointer transition-all duration-300 ease-out hover:color-black">
              <span>1993</span>
            </li>
            <li>
              <span>1994</span>
            </li>
            <li>
              <span>1995</span>
            </li> */}
            {/* <!-- Add the rest of the years --> */}
          </ul>
        </nav>
        <section className="timeline__section">
          <div className="wrapper mx-auto px-[80px] lg:px-1/6 pb-16.66% w-full">
            {a.map((e, index) => (
              <div key={index}>
                <h2 className="milestone">{e}</h2>
                <p>
                  По сути, стратегия позиционирования определяет рекламный
                  макет. Маркетинговая активность отражает медиаплан, не
                  считаясь с затратами. Общество потребления переворачивает
                  ролевой поведенческий таргетинг.
                </p>
                <p>
                  Рекламный блок, суммируя приведенные примеры, развивает
                  межличностный отраслевой стандарт. Надо сказать, что бюджет на
                  размещение изменяет из ряда вон выходящий креатив, отвоевывая
                  рыночный сегмент. Баланс спроса и предложения интегрирована.
                </p>
                <p>
                  Дело в том, что креатив ускоряет бренд. Бренд, на первый
                  взгляд, многопланово создает имидж. Узнавание бренда, конечно,
                  разнородно отталкивает институциональный клиентский спрос.
                  Стимулирование сбыта, не меняя концепции, изложенной выше,
                  спорадически уравновешивает фирменный рейтинг, повышая
                  конкуренцию. Концепция новой стратегии оправдывает BTL.
                </p>
              </div>
            ))}

            {/* <!-- Add the rest of the years --> */}
          </div>
        </section>
      </article>
    </div>
  );
};

export default About;
