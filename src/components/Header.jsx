import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { SocialIcon } from "react-social-icons"
import { motion } from "framer-motion"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ pathname = "" }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 flex flex-col item-start justify-between mx-auto z-20 xl:items-center">
      <div className="flex w-full bg-gradient-to-r from-teal-700 to-sky-900 px-3">
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
              fgColor="white"
              bgColor="transparent"
            />
            <p className="uppercase hidden md:inline-flex my-auto text-sm font-semibold text-white hover:underline duration-200">
              Get In Touch!
            </p>
          </div>
          <div>
            <SocialIcon
              className="cursor-pointer"
              network="whatsapp"
              fgColor="white"
              bgColor="transparent"
            />
            <p className="uppercase hidden md:inline-flex my-auto text-sm font-semibold text-white hover:underline duration-200">
              +91 9820076435
            </p>
          </div>
        </motion.div>
      </div>
      <div
        className={`${
          isScrolled || pathname !== "/"
            ? "flex w-full justify-between bg-white text-gray-900 shadow-lg transition duration-300 ease-in-out px-2"
            : "flex w-full md:justify-between bg-transparent border border-gray-600 text-white transition duration-300 ease-in-out px-2"
        }`}
      >
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
          className="max-md:w-1/2"
        >
          <Link to="/">
            <StaticImage
              src="../images/lifekshell-logo1.png"
              alt="logo"
              placeholder="blurred"
              className="h-22 w-16 ml-2 "
            />
          </Link>
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
          className="flex flex-row items-center max-md:w-auto max-md:ml-auto max-md:mr-5"
        >
          <nav className="hidden md:flex">
            <Link
              to="/about"
              className="uppercase px-4 my-auto text-sm hover:underline duration-200"
            >
              About Us
            </Link>
            <Link
              to="/products"
              className="uppercase px-4 my-auto text-sm hover:underline duration-200"
            >
              Products
            </Link>
            <Link
              to="/services"
              className="uppercase px-4 my-auto text-sm hover:underline duration-200"
            >
              Services
            </Link>
            <Link
              to="/Brochures"
              className="uppercase px-4 my-auto text-sm hover:underline duration-200"
            >
              Brochures
            </Link>
            <Link
              to="/blog"
              className="uppercase px-4 my-auto text-sm hover:underline duration-200"
            >
              Blog
            </Link>
            <Link
              to="/Testimonials"
              className="uppercase px-4 my-auto text-sm hover:underline duration-200"
            >
              Testimonials
            </Link>
          </nav>
          <div className="md:hidden right-0 ">
            <button
              className="text-gray-900 focus:outline-none "
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-6 w-6"
              >
                {isMenuOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2 4h16v1H2V4zm0 6h16v1H2v-1zm0 6h16v1H2v-1z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 5h12v1H4V5zm0 4h12v1H4v-1zm0 4h12v1H4v-1z"
                  />
                )}
              </svg>
            </button>
            {isMenuOpen && (
              <div className="bg-white absolute top-12 right-0 w-48 mt-2 py-2 rounded-md shadow-lg z-10">
                <Link
                  to="/about"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  About
                </Link>
                <Link
                  to="/products"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Products
                </Link>
                <Link
                  to="/services"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Services
                </Link>
                <Link
                  to="/Brochures"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Brochures
                </Link>
                <Link
                  to="/blog"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Blog
                </Link>
                <Link
                  to="/Testimonials"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Testimonials
                </Link>
              </div>
            )}
          </div>
        </motion.div>
        <motion.div></motion.div>
      </div>
    </header>
  )
}

export default Header
