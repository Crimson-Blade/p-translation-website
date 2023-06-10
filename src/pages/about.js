import React from "react"
import Layout from "../components/Layout"
import image from "../images/lifekshell-about-ppic.png"
import aboutimage from "../images/lifekshell-about-us.png"
import Reviews from "../components/Reviews"

const about = ({ location }) => {
  return (
    <Layout location={location}>
      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
        <p className="font-normal leading-3 cursor-pointer text-green-500">WHO WE ARE</p>
        <div className="flex lg:flex-row flex-col lg:gap-8 sm:gap-10 gap-12">
          <div className="w-full lg:w-1/2">
            <h2 className="w-full font-bold lg:text-4xl text-3xl lg:leading-10 leading-9">
              About LIFE kSHELL
            </h2>
            <p className="font-normal text-base  text-gray-600 mt-6">
              LIFE kSHELL is committed for Excellence by everyway, in everything
              that we do as professionals with a personal trusted relationship.
              We believe, each patients deserve the most advanced & innovative
              treatments available, LIFE kSHELL offers a complete portfolio of
              advanced, safe and effective Negative Pressure Wound Therapy
              (NPWT) solutions delivered by experts. Our products LS NPWT
              Devices (i-WAC & i-WAC Pro) & LS NPWT Dressing Kit have been
              specially designed to benefits patients from the proven outcomes
              of NPWT. We provide high quality products and skilled NPWT
              dressing service facility, supporting patient counseling to full
              wound closure with dedicated service delivery. LIFE kSHELL is for
              Cost effective yet excellence in QUALITY, SERVICE and PERFORMANCE.
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            <img
              className="lg:inline hidden w-3/4"
              src={aboutimage}
              alt="people discussing on board"
            />
            <img
              className="lg:hidden sm:block hidden w-full"
              src={aboutimage}
              alt="people discussing on board"
            />
            <img
              className="sm:hidden block w-full"
              src={aboutimage}
              alt="people discussing on board"
            />
          </div>
        </div>

        <div className="flex lg:flex-row flex-col md:gap-14 gap-16 justify-between lg:mt-20 mt-16">
          <div className="w-full lg:w-6/12 h-full text-center">
            <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 text-center leading-7 text-gray-800 h-1/3">
              Our Mision & Values
            </h2>
            <div className="w-full md:h-2/3">
              <img src={image} alt="logo" className="lg:inline hidden w-3/4" />
              <img
                className="lg:hidden sm:block hidden w-full"
                src={image}
                alt="people discussing on board"
              />
              <img
                className="sm:hidden block w-full"
                src={image}
                alt="people discussing on board"
              />
            </div>
            <p className="text-center">
              To be the FIRST and CONSISTENT choice of Patients, Physicians,
              Purchasers & Investors in practice of wound healing management.
            </p>
          </div>
          <div className="w-full lg:w-6/12">
            <h1 className="font-semibold text-3xl md:text-5xl">
              Why <span className="text-green-400">Lifekshell</span>
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 lg:gap-8 gap-10">
              <div className="flex p-2 shadow-lg border-green-400 border-2 border-b-0 bg-slate-200 rounded-md">
                <div className="">
                  <p className="font-semibold lg:text-2xl text-xl lg: leading-5 text-gray-800">
                    Efficient
                  </p>
                  <p className=" font-normal text-base  text-gray-600">
                    Quick and safe service with high punctuality and accuracy.
                  </p>
                </div>
              </div>
              <div className="flex p-2 shadow-lg border-green-400 border-2 border-b-0 bg-slate-200 rounded-md">
                <div className="">
                  <p className="font-semibold lg:text-2xl text-xl lg: leading-5 text-gray-800">
                    Compassionate
                  </p>
                  <p className=" font-normal text-base  text-gray-600">
                    NPWT dressing service by well-trained, dedicated and caring
                    team of dressing executives
                  </p>
                </div>
              </div>
              <div className="flex p-2 shadow-lg border-green-400 border-2 border-b-0 bg-slate-200 rounded-md">
                <div className="">
                  <p className="font-semibold lg:text-2xl text-xl lg: leading-5 text-gray-800">
                    Supportive
                  </p>
                  <p className=" font-normal text-base  text-gray-600">
                    Guidance and counseling to patients and families about
                    dressing procedures, wound care and hygiene
                  </p>
                </div>
              </div>
              <div className="flex p-2 shadow-lg border-green-400 border-2 border-b-0 bg-slate-200 rounded-md">
                <div className="">
                  <p className="font-semibold lg:text-2xl text-xl lg: leading-5 text-gray-800">
                    Progressive
                  </p>
                  <p className=" font-normal text-base  text-gray-600">
                    An open and transparent feedback system aimed at constant
                    improvement.
                  </p>
                </div>
              </div>

              <div className="flex p-4 shadow-lg border-green-400 border-2 border-b-0 bg-slate-200 rounded-md">
                <div className="">
                  <p className="font-semibold lg:text-2xl text-xl lg: leading-5 text-gray-800">
                    Accessible
                  </p>
                  <p className=" font-normal text-base  text-gray-600">
                    On-call service facility and provide services at hospital &
                    at home.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className="font-normal max-md:text-4xl text-center">
        Reviews of Literature :{" "}
        <span className="font-semibold"> NPWT in Orthopaedic Surgery</span>
      </h1>
      <div className="lg:w-1/2 mx-auto">
      <Reviews />
      </div>
      
    </Layout>
  )
}

export default about
