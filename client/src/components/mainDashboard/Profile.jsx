import React from 'react'
import Spline from '@splinetool/react-spline';

const Profile = ({ contract }) => {
  const profileImageUrl = localStorage.getItem("profileImgUrl");
  return (
    <div className='h-[92vh] bg-black'>
      <div className='grid grid-cols-2 h-[100%]'>
        <div className='flex justify-center flex-col items-center'>
        <span className="text-4xl logo-font mb-6">Metavault Profile</span>
          <div className='flex flex-col justify-center items-center gap-5'>

            <span>
              <img src={profileImageUrl} alt=""  className='w-[300px] h-[300px] rounded-full  border-[8px]'/>
            </span>
            <span className='text-3xl logo-font'>
              mangesh chate
            </span>
            <span className='w-[50%] font-mono text-justify'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia reiciendis illo laboriosam.
            </span>
            <span className='flex justify-start w-[50%]'>

            <button className='btn font-bold blue-blur-glass'>Update Profile</button>
            </span>
          </div>
        </div>
        <div className='h-[100%] overflow-hidden'>
          <Spline scene="https://prod.spline.design/mALQA6fxMO-AOUVJ/scene.splinecode" />
        </div>
      </div>
    </div>
  )
}

export default Profile
