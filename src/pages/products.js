import React from "react"
import Layout from "../components/Layout"
import Card from "../components/Card"
import { graphql, useStaticQuery } from "gatsby"

const Products = () => {
  const [selected, setSelected] = React.useState("All")

  const handleSelectChange = (event) => {
    setSelected(event.target.value);
  };

  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "products" } }) {
        edges {
          node {
            id
            name
            relativePath
            childMarkdownRemark {
              frontmatter {
                # Include any frontmatter fields you want to retrieve
                title
                date
                description
                type
              }
              excerpt
            }
          }
        }
      }
    }
  `)
  const products = data.allFile.edges

  return (
    <Layout>
      <div className="h-screen ">
        <div className="flex p-4">
          <form className="max-w-sm px-4">
            <div className="relative">
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
              />
            </div>
          </form>
          <div className="relative w-full lg:max-w-sm">
            <select
              className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
              mode="multiple"
              placeholder="Categories"
              allowClear
              maxTagCount={1}
              // defaultValue={['a10', 'c12']}
              onChange={handleSelectChange}
            >
              <option>All</option>
              <option>Threrapy Kits</option>
              <option>Canister</option>
              <option>Suction Pad</option>
            </select>
          </div>
        </div>

        <div className="container mx-auto text-center flex flex-col">
          <h2 className="text-3xl lg:text-5xl font-semibold">{selected}</h2>
          <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
            {products.map(({ node }) => (
              <Card>
                <li key={node.id}>
                  <h3>{node.childMarkdownRemark.frontmatter.title}</h3>
                  <p className="text-base">{node.childMarkdownRemark.frontmatter.description}</p>
                  <h5>{node.childMarkdownRemark.frontmatter.type}</h5>
                </li>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Products
