import Divider from "./Divider";
import Image from "next/image";

export default function CertificatesSection() {
  return (
    <>
      <div className="relative hidden sm:block h-[45rem] dark:text-black bg-white pl-20">
        <div className="h-4/6 w-9/12 left-0 bottom-0 bg-white absolute z-10 px-5 pt-5 sm:w-1/2 sm:px-20 sm:pt-14">
          <p className="font-mono text-base mb-4">WE ARE CERTIFIED</p>
          <Divider />
          <p className="font-mono text-2xl sm:text-4xl mb-4 font-extrabold">
            OUR WORKERS ARE TRAINED UNDER PROFESSIONAL ENGINEERS
          </p>
          <Divider />
          <div className="flex justify-between mt-8">
            <div className="flex items-center justify-center border-[1px] rounded-full border-black w-[150px] h-[150px]">
              <Image
                alt="launch logo"
                width={130}
                height={130}
                src={`/launch.png`}
              />
            </div>

            <div className="flex items-center justify-center border-[1px] rounded-full border-black w-[150px] h-[150px]">
              <Image
                alt="mag1 logo"
                width={130}
                height={130}
                src={`/mag1.png`}
              />
            </div>

            <div className="flex items-center justify-center border-[1px] rounded-full border-black w-[150px] h-[150px]">
            <Image
              alt="rs200 logo"
              width={100}
              height={100}
              src={`/rs200.png`}
            />
            </div>
          </div>
        </div>

        <div className="h-full w-8/12 right-0 absolute bg-[url(/street-rover.jpg)] bg-cover bg-[right_-1rem_bottom_-5rem] bg-no-repeat" />
      </div>

      <div className="flex flex-col sm:hidden dark:text-black bg-white px-5">
        <p className="font-mono text-sm mb-4 ">WE ARE CERTIFIED</p>
        <Divider />
        <p className="font-mono text-2xl mb-4 font-extrabold">
          OUR WORKERS ARE TRAINED UNDER PROFESSIONAL ENGINEERS
        </p>
        <Divider />
        <div className="flex flex-col items-center gap-8 mt-8">
          <div className="flex items-center justify-center border-[1px] rounded-full border-black w-[150px] h-[150px]">
            <Image
              alt="launch logo"
              width={130}
              height={130}
              src={`/launch.png`}
            />
          </div>

          <div className="flex items-center justify-center border-[1px] rounded-full border-black w-[150px] h-[150px]">
            <Image
              alt="mag1 logo"
              width={130}
              height={130}
              src={`/mag1.png`}
            />
          </div>

          <div className="flex items-center justify-center border-[1px] rounded-full border-black w-[150px] h-[150px]">
          <Image
              alt="rs200 logo"
              width={100}
              height={100}
              src={`/rs200.png`}
            />
          </div>
        </div>
      </div>
    </>
  );
}
