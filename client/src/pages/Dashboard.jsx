import React, { useState } from 'react';
import Leftbar_Dashboard from '../components/Leftbar_Dashboard';
import Main_Dashboard from '../components/Main_Dashboard';

const Dashboard = () => {
    const [selectedComponent, setSelectedComponent] = useState('');

    const handleNavbarItemClick = (componentName) => {
        setSelectedComponent(componentName);
    };

    return (
        <div>
            <div className='bg-[#252525] p-3 text-white flex items-center justify-between'>
                <div>
                    <span className='logo-font text-3xl'>Metavault</span>
                </div>
                <div className='flex gap-5  items-center'>
                    <div className='border p-2 rounded-full font-mono border-pink-500'>
                        0x8932779...
                    </div>

                    <div className='flex items-center gap-3 border  pe-3 border-blue-500 cursor-pointer  rounded-full'>
                        <img src="https://cdn.vectorstock.com/i/preview-1x/17/61/male-avatar-profile-picture-vector-10211761.jpg" alt="" className='w-[50px] h-[50px] rounded-full' />
                        <span className='font-mono'>mangesh</span>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-12 h-full'>
                <div className='col-span-2 relative'>
                    <Leftbar_Dashboard onItemClick={handleNavbarItemClick} />
                </div>
                <div className='col-span-10 bg-dark '>
                    <Main_Dashboard selectedComponent={selectedComponent} />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
