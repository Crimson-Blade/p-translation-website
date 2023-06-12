import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { SocialIcon } from "react-social-icons"
import { motion } from "framer-motion"
import { StaticImage } from "gatsby-plugin-image"
import { Dropdown, Space } from "antd"

const Header = ({ pathname = "" }) => {
  const items = [
    {
      label: (
        <Link
          to="/about"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          About
        </Link>
      ),
      key: "0",
    },
    {
      label: (
        <Link
          to="/products"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          Products
        </Link>
      ),
      key: "1",
    },
    {
      label: (
        <Link
          to="/services"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          Services
        </Link>
      ),
      key: "2",
    },
    {
      label: (
        <Link
          to="/blogs"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          Blog
        </Link>
      ),
      key: "3",
    },
    {
      label: (
        <Link
          to="/testimonialspage"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          Testimonials
        </Link>
      ),
      key: "4",
    },
  ]
  const [isScrolled, setIsScrolled] = useState(false)

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


  return (
    <header className="sticky top-0 flex flex-col item-start justify-between mx-auto z-20 xl:items-center">
      <Link to='/services/#contact' className="flex w-full bg-gradient-to-r from-teal-700 to-sky-900 px-3">
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

      </Link>
      <div
        className={`${isScrolled || pathname !== "/"
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
            y: -30,
            opacity: 0,
            scale: 0.75,
          }}
          animate={{
            y: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.5,
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
              to="/blogs"
              className="uppercase px-4 my-auto text-sm hover:underline duration-200"
            >
              Blog
            </Link>
            <Link
              to="/testimonialspage"
              className="uppercase px-4 my-auto text-sm hover:underline duration-200"
            >
              Testimonials
            </Link>
          </nav>
          <div className="md:hidden right-0 ">
            <Dropdown
              menu={{
                items,
              }}
              trigger={["click"]}
            >
              <a onClick={e => e.preventDefault()}>
                <Space>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2 4h16v1H2V4zm0 6h16v1H2v-1zm0 6h16v1H2v-1z"
                    />
                  </svg>
                </Space>
              </a>
            </Dropdown>
          </div>
        </motion.div>
        <motion.div></motion.div>
      </div>
    </header>
  )
}

export default Header
