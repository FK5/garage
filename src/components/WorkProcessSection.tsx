'use client'

import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import { VideoCameraIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

import { useRouter } from "next/navigation";

export default function WorkProcessSection() {
  const { push } = useRouter();

  const lineBreak = (
    <>
      <div className="h-[1px]" />
      <div className="bg-black h-[1px] m-0 p-0 border-0 border-white" />
      <div className="h-[2px]" />
    </>
  );
  const processes = [
    {
      title: "01. REQUEST YOUR QUOTE",
      description: "We will be there when you most need us",
      icon: <QuestionMarkCircleIcon height="30px" />,
      isRed: false,
    },
    {
      title: "02. BRING YOUR VEHICLE",
      description: "We are car guys at heart",
      icon: <DirectionsCarIcon style={{ height: '30px', width: '30px' }} />,
      isRed: false,
    },
    {
      title: "03. GET IT REPAIRED",
      description: "High quality, low cost car servicing",
      icon: <CheckCircleIcon height="30px" />,
      isRed: false,
    },
    {
      title: "04. VIEW IT LIVE",
      description: "View our progress with our 24/7 live feed",
      icon: <VideoCameraIcon height="30px" />,
      isRed: true,
    },
  ];
  return (
    <>
      <div className="hidden sm:block bg-white dark:text-black pt-4 pr-5 sm:pr-20">
        <div className="bg-black h-[1px] m-0 p-0 border-0 border-white w-2/3" />
        <div className="flex h-[40rem]">
          <div className="w-1/2 bg-[url(https://images.pexels.com/photos/9784143/pexels-photo-9784143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)] bg-cover bg-[center_bottom] bg-no-repeat" />

          <div className="w-1/2 pl-14">
            <p className="py-6 text-xs">WORK PROCESS</p>
            {lineBreak}
            <p className="text-5xl font-bold py-6">
              {" "}
              OUR WORK PROCESS IS FAST AND EASY
            </p>
            {lineBreak}

            {processes.map((process, index) => {
              return (
                <div >
                  <div
                    className={`flex flex-start items-center py-6 ${process.isRed
                        ? "text-red-500 hover:font-bold hover:cursor-pointer"
                        : ""
                      }`}
                    onClick={() => {
                      if (process.isRed) {
                        push("/liveView");
                      }
                    }}
                  >
                    <div className="mr-4">{process.icon}</div>
                    <div className="flex flex-col">
                      <p className="text-xl">{process.title}</p>
                      <p className="text-sm text-black">
                        {process.description}
                      </p>
                    </div>
                  </div>
                  {index <= processes.length - 2 ? lineBreak : <></>}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="bg-white h-[45rem] dark:text-black px-5 pt-16 sm:px-20 sm:pr-20 block sm:hidden">
        <p className="py-6 text-sm">WORK PROCESS</p>
        {lineBreak}
        <p className="text-4xl font-bold py-6">
          {" "}
          OUR WORK PROCESS IS FAST AND EASY
        </p>
        {lineBreak}

        {processes.map((process, index) => {
          return (
            <>
              <div
                key={index}
                className={`flex flex-start items-center py-6 ${process.isRed ? "text-red-500" : ""
                  }`}
                onClick={() => {
                  if (process.isRed) {
                    push("/liveView");
                  }
                }}
              >
                <div className="mr-4">{process.icon}</div>
                <div className="flex flex-col">
                  <p className="text-xl">{process.title}</p>
                  <p className="text-sm text-black">{process.description}</p>
                </div>
              </div>
              {index <= processes.length - 2 ? lineBreak : <></>}
            </>
          );
        })}
      </div>
    </>
  );
}
