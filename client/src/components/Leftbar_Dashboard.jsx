import React from 'react';
import { Dashboard, FilePresent, ChatBubble, Add, Image, VideoCameraBack } from '@mui/icons-material';


const Leftbar_Dashboard = ({ onItemClick }) => {
  const profileImageUrl = localStorage.getItem("profileImgUrl");
  return (
    <div className='h-[92vh]   p-5 bg-[#252525] text-light'>
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
              <Dashboard />
            </span>
            <span>Dashboard</span>
          </li>
          <li className='flex hover:text-blue-400 items-center gap-5 text-xl font-bold mt-5 cursor-pointer' onClick={() => onItemClick('MyFiles')}>
            <span className=''>
              <FilePresent />
            </span>
            <span>My Files</span>
          </li>
          <li className='flex hover:text-blue-400 items-center gap-5 text-xl font-bold mt-5 cursor-pointer' onClick={() => onItemClick('Images')}>
            <span className=''>
              <Image />
            </span>
            <span>My Images</span>
          </li>
          <li className='flex hover:text-blue-400 items-center gap-5 text-xl font-bold mt-5 cursor-pointer' onClick={() => onItemClick('Videos')}>
            <span className=''>
              <VideoCameraBack />
            </span>
            <span>My Videos</span>
          </li>
          <li className='flex hover:text-blue-400 items-center gap-5 text-xl font-bold mt-5 cursor-pointer' onClick={() => onItemClick('TalkWithAI')}>
            <span className=''>
              <ChatBubble />
            </span>
            <span>Talk With AI</span>
          </li>
          <hr className='mt-5' />
          <li className='flex hover:text-blue-400 items-center gap-5 text-xl font-bold mt-5 w-full cursor-pointer' onClick={() => onItemClick('profile')}>
            <span className=''>
              <img src={profileImageUrl} className='w-[50px] rounded-full ' alt="" />
            </span>
            <span >My Profile</span>
          </li>
          
         
          <li className='flex hover:text-blue-400 items-center gap-5 text-xl font-bold mt-5 w-full cursor-pointer' onClick={() => onItemClick('experiences')}>
            <span className=''>
              <img src="https://cdn-icons-png.flaticon.com/512/11632/11632430.png" className='w-[50px]' alt="" />
            </span>
            <span >Experiences</span>
          </li>

          <hr className='mt-5' />
          
        </ul>

        <div className='flex   items-center gap-5 p-5 rounded-xl  logo-font text-xl white-blur-glass font-bold mt-5 w-full cursor-pointer justify-center' onClick={() => onItemClick('buycoin')}>
    
            <span className='logo-font'>Buy MapCoin</span>
          </div>
      </div>
    </div>
  );
};

export default Leftbar_Dashboard;
// https://preview.redd.it/i-made-a-custom-op-discord-icon-v0-oby6d0ersbs81.png?auto=webp&s=0101218530a2068771a744d6523f09c29df76e90