"use client";
import { FC } from "react";

const LiveView: FC = () => {
  const handleDownloadClick = () => {
    window.open("https://www.videolan.org/vlc/", "_blank");
  };
  const handleHelpClick = () => {
    window.open(
      "https://answers.openeye.net/Troubleshooting/Frequently_Asked_Questions/Cameras/Testing_RTSP_Streams_with_VLC",
      "_blank"
    );
  };
  return (
    <div className="sm:min-h-[calc(100vh-8.5rem)] sm:px-20 px-5 py-12 bg-white text-black">
      <div className="flex flex-col">
        <div className="mb-6 sm:mb-8">
          <p className="text-red-500 font-bold text-2xl sm:text-3xl mb-4">
            Watch Your Car Being Serviced - Live!
          </p>
          <p className=" sm:w-2/3 text-lg sm:text-xl">
            Now you can see your car being worked on in real-time with our live
            garage cameras. It&aposs quick and easy to set up—just follow these
            steps:
          </p>
        </div>
        <div>
          <p className="text-lg sm:text-xl mb-4">
            1. Download VLC Media Player -{" "}
            <span
              className="font-semibold text-red-500 hover:font-bold hover:cursor-pointer"
              onClick={handleDownloadClick}
            >
              Click here to download VLC
            </span>
          </p>
          <p className="text-lg sm:text-xl mb-2">
            2. Open VLC and Navigate to the Network Tab
          </p>
          <p className="text-lg sm:text-xl ml-6 mb-2">
            + On Windows: Go to Media → Open Network Stream
          </p>
          <p className="text-lg sm:text-xl ml-6 mb-4">
            + On Mac: Go to File → Open Network
          </p>
          <p className="text-lg sm:text-xl mb-2">3. Request Your RTSP Link</p>
          <p className="text-lg sm:text-xl ml-6 mb-4">
            + Contact us to receive your unique RTSP link.
          </p>
          <p className="text-lg sm:text-xl mb-2">
            4. Enter the RTSP Link in VLC
          </p>
          <p className="text-lg sm:text-xl ml-6 mb-8">
            + Paste the RTSP link in the network URL field and click Play to
            start streaming.
          </p>
          <p className="text-lg sm:text-xl">
            For more detailed instructions, check out this guide:
            <span
              className="font-semibold text-red-500 hover:font-bold hover:cursor-pointer"
              onClick={handleHelpClick}
            >
              Watch RTSP Streams on VLC
            </span>
          </p>
          <p className="text-lg sm:text-xl">
            Need help? Feel free to reach out—we&aposre happy to assist! 🚗🔧🎥
          </p>
        </div>
      </div>
    </div>
  );
};

export default LiveView;
