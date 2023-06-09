import React from 'react';
import { SocialIcon } from 'react-social-icons'
import { StaticImage } from 'gatsby-plugin-image';

const CompanyLandscape = () => {
  return (
    <div className='text-center relative flex flex-col'>
      <div className='flex flex-col bg-white'>
        <h3 className='text-5xl'> Meet Our Connected Ecosystem </h3>
        <p className='text-gray-400 max-w-md self-center px-6'>
          From big cities to small towns, across Colorado, Utah and western Kansas, our associates are proud members of the communities they serve.
        </p>
      </div>
      <div
        className='w-full flex max-md:flex-col bg-white justify-around max-md:space-y-5 pb-20 '
        style={{
          borderRadius: "0% 0% 62% 74% / 61% 58% 28% 30%"
        }}
      >
        <div className='flex flex-col space-y-5'>
          <SocialIcon network="pinterest" style={{ height: 100, width: 100, alignSelf: 'center' }} />
          <p className='text-lg'>25,000+</p>
          <p className='text-gray-400'>Increadible performance lmao</p>
        </div>
        <div className='flex flex-col space-y-5'>
          <SocialIcon network="pinterest" style={{ height: 100, width: 100, alignSelf: 'center' }} />
          <p className='text-lg'>25,000+</p>
          <p className='text-gray-400'>Increadible performance lmao</p>
        </div>
        <div className='flex flex-col space-y-5'>
          <SocialIcon network="pinterest" style={{ height: 100, width: 100, alignSelf: 'center' }} />
          <p className='text-lg'>25,000+</p>
          <p className='text-gray-400'>Increadible performance lmao</p>
        </div>
        <div className='flex flex-col space-y-5'>
          <SocialIcon network="pinterest" style={{ height: 100, width: 100, alignSelf: 'center' }} />
          <p className='text-lg'>25,000+</p>
          <p className='text-gray-400'>Increadible performance lmao</p>
        </div>
      </div>
      <div className='sticky bottom-0 -z-10'>
        <StaticImage
          src='../images/map_temp.jpg'
        />
      </div>

    </div>
  )
}
export default CompanyLandscape;
