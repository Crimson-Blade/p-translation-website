import React, {useState, useEffect} from "react"
import { Link } from "gatsby"
import { SocialIcon } from "react-social-icons"
import { motion } from "framer-motion"
import { StaticImage } from 'gatsby-plugin-image'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className="sticky top-0  flex flex-col item-start justify-between mx-auto z-20 xl:items-center">
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
      <div className={`${isScrolled ? "flex w-full justify-between bg-white text-gray-900 shadow-lg transition duration-300 ease-in-out px-2" : "flex w-full justify-between bg-transparent border border-gray-600 text-white transition duration-300 ease-in-out px-2"}`}>
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
<<<<<<< HEAD
          About
        </Link>
        <Link
          to="/products"
          className="uppercase px-4 hidden md:inline-flex my-auto text-sm text-gray-900 hover:underline duration-200"
=======
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
>>>>>>> dda2658f92741b1dfcf1f9f453a8b5d8bc1f1be6
        >
          {/**/}
          <Link
            to="/AboutUs"
            className="uppercase px-4 hidden md:inline-flex my-auto text-sm hover:underline duration-200"
          >
            About
          </Link>
          <Link
            to="/Products"
            className="uppercase px-4 hidden md:inline-flex my-auto text-sm hover:underline duration-200"
          >
            Products
          </Link>
          <Link
            to="/Testimonials"
            className="uppercase px-4 hidden md:inline-flex my-auto text-sm hover:underline duration-200"
          >
            Testimonials
          </Link>
          <Link
            to="/Brochures"
            className="uppercase px-4 hidden md:inline-flex my-auto text-sm hover:underline duration-200"
          >
            Brochures
          </Link>
          <Link
            to="/blog"
            className="uppercase px-4 hidden md:inline-flex my-auto text-sm hover:underline duration-200"
          >
            Blog
          </Link>
          <Link
            to="/Contact"
            className="uppercase px-4 hidden md:inline-flex my-auto text-sm hover:underline duration-200"
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