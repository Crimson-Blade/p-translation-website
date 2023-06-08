import React from "react"
import { Link } from "gatsby"
import { SocialIcon } from "react-social-icons"
import { motion } from "framer-motion"
import { StaticImage } from 'gatsby-plugin-image'

const Header = () => {
  return (
    <header className="sticky top-0  flex flex-col item-start justify-between mx-auto z-20 xl:items-center">
      <div className="flex w-full bg-green-950 px-2">
        <motion.div
          initial={{
            x: 100,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="flex justify-between w-full  text-gray-300 cursor-pointer"
        >
            <div>
          <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="gray"
            bgColor="transparent"
          />
          <p className="uppercase hidden md:inline-flex my-auto text-sm text-gray-400 hover:underline duration-200">
            Get In Touch!
          </p>
          </div>
          <div>
          <SocialIcon
            className="cursor-pointer"
            network="phone"
            fgColor="gray"
            bgColor="transparent"
            />
            <p className="uppercase hidden md:inline-flex my-auto text-sm text-gray-400 hover:underline duration-200">
            Contact at : +91 9820076435
            </p>
            </div>
        </motion.div>
      </div>
      <div className="flex w-full justify-between bg-white shadow-lg px-2">
      <motion.div
        initial={{
          x: -200,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
      >
        <a href="/">
          <StaticImage src="../images/lifekshell-logo.png" alt="logo" placeholder="blurred" className="h-22 w-16 ml-2" />
        </a>
      </motion.div>
      <motion.div
        initial={{
          y: -300,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          y: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="flex flex-row items-center"
      >
        {/**/}
        <Link
          to="/AboutUs"
          className="uppercase px-4 hidden md:inline-flex my-auto text-sm text-gray-900 hover:underline duration-200"
        >
          About
        </Link>
        <Link
          to="/products"
          className="uppercase px-4 hidden md:inline-flex my-auto text-sm text-gray-900 hover:underline duration-200"
        >
          Products
        </Link>
        <Link
          to="/Testimonials"
          className="uppercase px-4 hidden md:inline-flex my-auto text-sm text-gray-900 hover:underline duration-200"
        >
          Testimonials
        </Link>
        <Link
          to="/Brochures"
          className="uppercase px-4 hidden md:inline-flex my-auto text-sm text-gray-900 hover:underline duration-200"
        >
          Brochures
        </Link>
        <Link
          to="/blog"
          className="uppercase px-4 hidden md:inline-flex my-auto text-sm text-gray-900 hover:underline duration-200"
        >
          Blog
        </Link>
        <Link
          to="/Contact"
          className="uppercase px-4 hidden md:inline-flex my-auto text-sm text-gray-900 hover:underline duration-200"
        >
          Contact
        </Link>
      </motion.div>
      <motion.div>

      </motion.div>
      </div>
    </header>
  )
}

export default Header