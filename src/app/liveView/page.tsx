import {FC} from 'react';

const LiveView: FC = () => {

    return (
        <div className='flex flex-col items-center justify-center bg-white py-[27rem] px-5 sm:px-20 h-[37rem]'>

            <p className='text-red-500 font-extrabold text-5xl mb-4 text-center'> Coming Soon!</p>
            <p className='text-black font-bold text-2xl text-center'> You will be able to see your car being worked on LIVE</p>


            {/* <div className='flex flex-wrap gap-10'>
                { a.map((e, index) => (<div key={index}> 
                    <a rel="nofollow" href="http://50.248.1.46:8000/" target="new" className='w-full'>
                    <img id="image0" src="http://50.248.1.46:8000/mjpg/video.mjpg" className="img-responsive img-rounded detailimage" alt="" title="Click here to enter the camera located in United States, region Florida, Банч Парк"/>
                    </a>
                </div>)  )}
            </div> */}

        </div>
    )
}

export default LiveView