import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Layout from "../components/Layout"
import { Card } from "antd"
import { graphql } from "gatsby"
import { Link } from "gatsby"
const { Meta } = Card

const Products = ({ data, location }) => {
  const [selectedOption, setSelectedOption] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredProducts, setFilteredProducts] = useState([])

  const handleSelectChange = event => {
    setSelectedOption(event.target.value)
  }

  useEffect(() => {
    filterProducts()
  }, [selectedOption, searchTerm])

  const filterProducts = () => {
    const products = data.allMarkdownRemark.nodes

    let filtered =
      selectedOption === "All"
        ? products
        : products.filter(
            product => product.frontmatter.type === selectedOption
          )

    if (searchTerm) {
      const search = searchTerm.toLowerCase()
      filtered = filtered.filter(
        product =>
          product.frontmatter.title.toLowerCase().includes(search) ||
          product.frontmatter.description.toLowerCase().includes(search)
      )
    }

    setFilteredProducts(filtered)
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
    enter: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <Layout location={location}>
      <div className="p-20">
      <div className="flex flex-col lg:flex-row p-4">
          <form className="lg:max-w-sm w-full max-lg:flex max-lg:justify-center px-4">
            <div className="max-w-sm relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search"
                className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
                value={searchTerm}
                onChange={event => setSearchTerm(event.target.value)}
              />
            </div>
          </form>
          <div className="relative lg:max-w-sm max-lg:w-auto max-lg:flex max-lg:justify-center flex-grow">
            <select
              className="w-full md:w-2/3 p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
              mode="multiple"
              placeholder="Categories"
              allowClear
              maxTagCount={1}
              onChange={handleSelectChange}
            >
              <option>All</option>
              <option>Kit</option>
              <option>Canister</option>
              <option>Pad</option>
            </select>
          </div>
        </div>

        <div className="flex justify-center px-5 w-full">
          <div className="text-3xl lg:text-5xl font-semibold text-center text-green-600">
            PRODUCTS
          </div>
        </div>

        <div className="container mx-auto text-center flex flex-col h-full w-full">
          <h2 className="text-3xl lg:text-5xl font-semibold p-4">
            {selectedOption}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.li
                key={product.id}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                custom={index}
              >
                <Card
                  hoverable
                  style={{
                    width: "100%",
                    maxWidth: "400px",
                  }}
                  cover={
                    <img
                      {...product.frontmatter.thumb.childImageSharp.fluid}
                      alt={product.frontmatter.title}
                      className="h-52 w-full object-cover"
                    />
                  }
                >
                  <Meta
                    title={product.frontmatter.title}
                    description={product.frontmatter.description}
                  />
                  <div className="pt-6">
                    <Link
                      href="/products"
                      className="p-2 text-green-900 border-2 rounded-lg"
                    >
                      View More
                    </Link>
                  </div>
                </Card>
              </motion.li>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Products

export const query = graphql`
query MyQuery {
  allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/products/"}}) {
    nodes {
      frontmatter {
        description
        thumb {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        type
        title
      }
      id
    }
  }
}
`
