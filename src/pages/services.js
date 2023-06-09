import React from "react"
import SplitSection from "../components/SplitSection"
import SvgCharts from "../svg/SvgCharts"
import Layout from "../components/Layout"

const services = ({ location}) => {
  return (
    <Layout location={location}>
      <div className="flex p-6 w-full justify-center">
        <div className="text-3xl lg:text-5xl font-semibold text-center underline">
          SERVICES
        </div>
      </div>
      <div>
        <SplitSection
          id="services"
          primarySlot={
            <div className="lg:pr-32 xl:pr-48">
              <h3 className="text-3xl font-semibold leading-tight">
              Dressing Services
              </h3>
              <p className="mt-8 text-xl font-light leading-relaxed">
              Delivering personalized dressing services for optimal wound care
              and accelerated healing.
              Delivering personalized dressing services for optimal wound care
              and accelerated healing.
              </p>
            </div>
          }
          secondarySlot={<SvgCharts />}
        />
        <SplitSection
          reverseOrder
          primarySlot={
            <div className="lg:pl-32 xl:pl-48">
              <h3 className="text-3xl font-semibold leading-tight">
              Distribution
              </h3>
              <p className="mt-8 text-xl font-light leading-relaxed">
              Efficiently distributing NPWT products and medical supplies for
              seamless access to critical resources.
              Efficiently distributing NPWT products and medical supplies for
              seamless access to critical resources.
              </p>
            </div>
          }
          secondarySlot={<SvgCharts />}
        />
        <SplitSection
          primarySlot={
            <div className="lg:pr-32 xl:pr-48">
              <h3 className="text-3xl font-semibold leading-tight">
              Hospital Supplies
              </h3>
              <p className="mt-8 text-xl font-light leading-relaxed">
              Supplying a comprehensive range of high-quality hospital supplies
              for exceptional patient care.
              Supplying a comprehensive range of high-quality hospital supplies
              for exceptional patient care.
              </p>
            </div>
          }
          secondarySlot={<SvgCharts />}
        />
      </div>
    </Layout>
  )
}

export default services
