import React from 'react';
import { Dashboard, FilePresent, ChatBubble, Add } from '@mui/icons-material';

const Leftbar_Dashboard = ({ onItemClick }) => {
  return (
    <div className='h-[100vh]   p-5 bg-[#252525] text-light'>
      <div className='flex mt-5'>
        <div className='btn  p-3 px-8 flex rounded-full border-2 border-white' onClick={() => onItemClick('New')}>
          <span className='font-bold'> <Add /></span>
          <span className='text-xl ms-5 font-bold'>New</span>
        </div>
      </div>
      <div className='mt-5'>
        <ul className='p-5 flex flex-col gap-5'>
          <li className='flex hover:text-blue-400 items-center gap-5 text-xl font-bold mt-5 cursor-pointer' onClick={() => onItemClick('')}>
            <span className=''>
              <Dashboard/>
            </span>
            <span>Dashboard</span>
          </li>
          <li className='flex hover:text-blue-400 items-center gap-5 text-xl font-bold mt-5 cursor-pointer' onClick={() => onItemClick('MyFiles')}>
            <span className=''>
              <FilePresent/>
            </span>
            <span>My Files</span>
          </li>
          <li className='flex hover:text-blue-400 items-center gap-5 text-xl font-bold mt-5 cursor-pointer' onClick={() => onItemClick('TalkWithAI')}>
            <span className=''>
              <ChatBubble/>
            </span>
            <span>Talk With AI</span>
          </li>
          <hr className='mt-5'/>
                    <li className='flex hover:text-blue-400 items-center gap-5 text-xl font-bold mt-5 w-full cursor-pointer'>
                        <span className=''>
                            <img src="https://cdn-icons-png.flaticon.com/512/11632/11632430.png" className='w-[50px]' alt="" />
                        </span>
                        <span>Experiences</span>
                    </li>
                    <hr className='mt-5'/>
        </ul>
      </div>
    </div>
  );
};

export default Leftbar_Dashboard;
