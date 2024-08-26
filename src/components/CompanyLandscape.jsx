import React, {useState, useEffect} from 'react';
import { SocialIcon } from 'react-social-icons'
import { StaticImage } from 'gatsby-plugin-image';
const CompanyLandscape = () => {
  const [text1, setText1] = useState(0);
  const [text2, setText2] = useState(0);
  const [text3, setText3] = useState(100);
  
  useEffect(() => {
    const duration = 4000;
    const initVal1 = 0;
    const lastVal1 = 20000;
    const initVal2 = 0;
    const lastVal2 = 232;
    const initVal3 = 100;
    const lastVal3 = 25;
    let startTime = null;
    const easeOut = (t) => {
      return 1 - Math.pow(1 - t, 3);
    };
    const step = (currentTime) => {
      if (!startTime) {
        startTime = currentTime;
      }
  
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easedProgress = easeOut(progress);
      setText1(Math.floor(easedProgress * (lastVal1 - initVal1) + initVal1));
      setText2(Math.floor(easedProgress * (lastVal2 - initVal2) + initVal2));
      setText3(Math.floor(easedProgress * (lastVal3 - initVal3) + initVal3));
  
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
  
    window.requestAnimationFrame(step);
  }, []);
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
          <p className='text-lg'>{text1}</p>
          <p className='text-gray-400'>Increadible performance</p>
        </div>
        <div className='flex flex-col space-y-5'>
          <SocialIcon network="pinterest" style={{ height: 100, width: 100, alignSelf: 'center' }} />
          <p className='text-lg'>{text2}</p>
          <p className='text-gray-400'>Increadible performance</p>
        </div>
        <div className='flex flex-col space-y-5'>
          <SocialIcon network="pinterest" style={{ height: 100, width: 100, alignSelf: 'center' }} />
          <p className='text-lg'>{text3}</p>
          <p className='text-gray-400'>Increadible performance</p>
        </div>
        <div className='flex flex-col space-y-5'>
          <SocialIcon network="pinterest" style={{ height: 100, width: 100, alignSelf: 'center' }} />
          <p className='text-lg'>{text1}</p>
          <p className='text-gray-400'>Increadible performance</p>
        </div>
      </div>
      <div className='max-md:hidden md:sticky bottom-0 -z-10'>
        <StaticImage
          src='../images/map_temp.jpg'
        />
      </div>

    </div>
  )
}
export default CompanyLandscape;
