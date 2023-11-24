import {FC} from 'react';


const LiveView: FC = () => {

    const a = [0,0,0,0,0,0];
    // const defaultImageURL: string = 'https://images.pexels.com/photos/1637859/pexels-photo-1637859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    return (
        <div className='flex flex-col bg-white px-5 sm:px-20 sm:pt-20 pb-20'>

            <div className='flex flex-wrap gap-10'>
                {/* { a.map((e, index) => (<div key={index}> 
                    <a rel="nofollow" href="http://50.248.1.46:8000/" target="new" className='w-full'>
                    <img id="image0" src="http://50.248.1.46:8000/mjpg/video.mjpg" className="img-responsive img-rounded detailimage" alt="" title="Click here to enter the camera located in United States, region Florida, Банч Парк"/>
                    </a>
                </div>)  )} */}
            </div>

        </div>
    )
}

export default LiveView