import React from "react"
import {SocialIcon} from "react-social-icons";

const Footer = () => {
  return (
    <section className="bg-green-950 text-gray-50">
      <div className="max-w-screen-xl px-4 py-6 mx-auto space-y-3 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2 pt-4">
          <div className="px-5 py-2">
            <a
              href="#"
              className="text-base leading-6 0  hover:underline text-gray-50"
            >
              About
            </a>
          </div>
          <div className="px-5 py-2">
            <a
              href="#"
              className="text-base leading-6 hover:underline text-gray-50"
            >
              Blog
            </a>
          </div>
          <div className="px-5 py-2">
            <a
              href="#"
              className="text-base leading-6 hover:underline text-gray-50"
            >
              Products
            </a>
          </div>
          <div className="px-5 py-2">
            <a
              href="#"
              className="text-base leading-6 hover:underline text-gray-50"
            >
              Brochures
            </a>
          </div>
          <div className="px-5 py-2">
            <a
              href="#"
              className="text-base leading-6 hover:underline text-gray-50"
            >
              Contact
            </a>
          </div>

        </nav>
        <div className="flex justify-center p-1 space-x-6">
            <SocialIcon 
            className="hover:-translate-y-2 duration-300"
            url="https://twitter.com"
            fgColor='gray'
            bgColor='transparent' />
            <SocialIcon
            className="hover:-translate-y-2 duration-300"
            url="https://www.linkedin.com"
            fgColor='gray'
            bgColor='transparent' /> 
            <SocialIcon
            className="hover:-translate-y-2 duration-300"
            url="https://www.facebook.com"
            fgColor='gray'
            bgColor='transparent' />

        </div>
        <p className="m-auto text-center py-2">
        © {new Date().getFullYear()} LifekShell. All Rights Reserved.  
        </p>
      </div>
    </section>
  )
} 

export default Footer