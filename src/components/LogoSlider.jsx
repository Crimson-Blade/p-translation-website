import React from "react";
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
// import Slider from "react-slick";
const LogoSlider = () => {
  // Width must be 250px, height must be 100px. Bg color must be applied to the image before hand.
  const data = useStaticQuery(graphql`
      query CompanyLogos {
        allFile(filter: {relativeDirectory: {eq: "company-logos"}}) {
          nodes {
            id
            childImageSharp {
              gatsbyImageData( placeholder: BLURRED)
            }
          }
        }
    }
  `)
  const logos=data.allFile.nodes;
  console.log(logos[0]);
  const slides = logos.slice(0,logos.length/2).map((logo, id) => (
    <GatsbyImage
      image={getImage(logo)}
      alt="logo"

      key={id}
      className="p-16 m-16 "
    />
  ));
  const len = `${logos.length/2 * 250}px`;
  return (
    <div className="my-10">
      <div className="container mx-auto my-10 space-y-2 text-center">
        <h2 className="text-4xl md:text-5xl font-bold  tracking-wide">
          Our Onboarded <span className="text-primary">Startups</span>
        </h2>
      </div>
      {/* <div className="slider flex items-center justify-center overflow-hidden h-[280px] w-screen ">
        <div className={`slide-track relative flex `}>
          <div
            className={`slide flex items-center w-[${len}] drag-none animate-scroll-slow `}
          >
            {slides}
          </div>
          <div
            className={`slide flex items-center w-[${len}] drag-none animate-scroll-slow `}
          >
            {slides}
          </div>
        </div>
      </div> */}

    </div>
  );
};

export default LogoSlider;


