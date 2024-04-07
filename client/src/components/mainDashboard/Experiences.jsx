import React from 'react';
import { Link } from 'react-router-dom';

const Experiences = () => {
    return (
        <div className='h-[90vh]'>
            <div className="text-2xl h-[600px] rounded-[20px] m-5 " style={{ backgroundImage: "url('https://static.stambol.com/wordpress/wp-content/uploads/2022/01/nfts-provide-immersive-exclusive-experiences-in-metaverse-oasis.jpg')", backgroundPosition: "center" }}>
                <div className='flex justify-center items-center h-full flex-col'>
                    <span className='text-6xl font-bold logo-font'>
                        Let's Experience Metaverse
                    </span>
                    <span>
                        (wear VR headset and start)
                    </span>
                    <Link to="/metaverse" className="btn neon-bg  font-bold logo-font rounded-full mt-5">
                        Let's Start
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Experiences;
