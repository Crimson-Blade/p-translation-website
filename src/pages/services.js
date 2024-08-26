import React from "react"
import SplitSection from "../components/SplitSection"
import SvgCharts from "../svg/SvgCharts"
import Layout from "../components/Layout"
import Contact from "../components/Contact"
import Seo from "../components/Seo"
import image1 from "../images/oil-cooler.jpeg"
import image2 from "../images/charge-air-cooler.jpeg"
import image3 from "../images/after-cooler.jpeg"

const services = ({ location }) => {
  return (
    <Layout location={location}>

      <div className="flex p-6 w-full justify-center">
        <div className="text-3xl lg:text-5xl font-semibold text-center tracking-wider text-amber-500">
          SERVICES
        </div>
      </div>
      <div>
        <SplitSection
          id="services"
          primarySlot={
            <div className="lg:pr-32 xl:pr-48">
              <h3 className="text-3xl font-semibold leading-tight">
                Oil Coolers
              </h3>
              <p className="mt-8 text-xl font-light leading-relaxed">
                It is safe to say that Oil Coolers are definitely our forte.
                Our Oil Coolers have a record of performing above expectations within the most severest of conditions. We manufacture Oil Coolers of all the latest technologies viz, plate-bar type, multi-port type, brazed plate type and the dual plate cross flow dimpled type.
                Whatever be
                your performance
                requirement and
                however severe be your constraints, we are sure of giving you a solution you can be satisfied with.
              </p>
            </div>
          }
          secondarySlot={<img src={image1} alt="oil cooler" />}
        />
        <SplitSection
          reverseOrder
          primarySlot={
            <div className="lg:pl-32 xl:pl-48">
              <h3 className="text-3xl font-semibold leading-tight">
                Charge Air Cooler
              </h3>
              <p className="mt-8 text-xl font-light leading-relaxed">
                We manufacture high quality, high performance custom Intercoolers,
                Charge Air Coolers and After coolers for
                any application and project you might have in mind.
                Our Intercoolers, after coolers and Charge Air Coolers are designed to ensure smooth flow of fluid inside the flow channels and headers so that there is minimal pressure drop across the
              </p>
            </div>
          }
          secondarySlot={<img src={image2} alt="charge " />}
        />
        <SplitSection
          primarySlot={
            <div className="lg:pr-32 xl:pr-48">
              <h3 className="text-3xl font-semibold leading-tight">
                After Cooler
              </h3>
              <p className="mt-8 text-xl font-light leading-relaxed">
                We offer specialized and custom built solutions for all your cooling needs.
                Be
                it compact and high
                performance solution for automotive and aerospace applications or
                for highly
                reliable and durable
                applications for industrial, marine or agricultural applications.
                Get in touch with our sales team and we are sure we will be able to provide you the best
              </p>
            </div>
          }
          secondarySlot={<img src={image3} alt="oil cooler" />}
        />
      </div>

      <Contact />


    </Layout>
  )
}

export default services
export const Head = () => <Seo title="Services" />

