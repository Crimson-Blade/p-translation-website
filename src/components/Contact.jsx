import React from "react"

const Contact = () => {
  return (
    <div className="container mx-auto pt-16" id="contact">
      <div className="lg:flex">
        <div className="xl:w-2/5 lg:w-2/5 bg-indigo-700 py-16 my-auto xl:rounded-bl rounded-tl rounded-tr xl:rounded-tr-none">
          <div className="xl:w-5/6 xl:px-0 px-8 mx-auto">
            <p className="text-white mb-0">CONTACT US</p>
            <h1 className="xl:text-4xl text-3xl pb-4 text-white font-normal">
              Get in touch <span className="font-semibold">With Us</span>
            </h1>
            <div className="flex pb-2 items-center">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-phone-call"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#ffffff"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M4 4h5l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v5a1 1 0 0 1 -1 1a16 16 0 0 1 -16 -16a1 1 0 0 1 1 -1" />
                  <path d="M15 7a2 2 0 0 1 2 2" />
                  <path d="M15 3a6 6 0 0 1 6 6" />
                </svg>
              </div>
              <p className="pl-4 inline text-white text-base">
              91 9820076435
              </p>
              <div className="ml-14">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  stroke="#ffffff"
                  fill="white"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                </svg>
              </div>
              <p className="pl-4 inline text-white text-base">
                Business Hours: 9am to 7pm
              </p>
            </div>
            <div className="flex items-center">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-mail"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#FFFFFF"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <rect x={3} y={5} width={18} height={14} rx={2} />
                  <polyline points="3 7 12 13 21 7" />
                </svg>
              </div>
              <p className="pl-4 text-white text-base">ptranslation.sales@gmail.com</p>
            </div>
            {/* <p className="text-lg text-white pt-10 tracking-wide">
              <span className="underline leading-5">Our Location </span>
              <br />
              <br />
              Platinum Venecia, 06, 1st Floor, Plot: 22 & 23, Sector: 29, Nerul,
              Navi Mumbai 400706, Maharashtra, India.
            </p> */}
          </div>
        </div>
        <div className=" shadow-lg border-4 border-gray-300 h-full pt-3 pb-3  rounded-tr rounded-br">
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSddgxXLnFvIHMmnHRZO_ZsIYbFkeRbHmVi7FUHbtj4SG7bYvg/viewform?embedded=true" width="640" height="1002" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
          
          {/* <form
            id="contact"
            className="bg-white py-4 px-8 rounded-tr rounded-br"
          >
            <h1 className="text-4xl text-gray-800 font-extrabold mb-6">
              Enter Details
            </h1>
            <div className="block xl:flex w-full flex-wrap justify-between mb-6">
              <div className="w-2/4 max-w-xs mb-6 xl:mb-0">
                <div className="flex flex-col">
                  <label
                    htmlFor="full_name"
                    className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    required
                    id="full_name"
                    name="full_name"
                    type="text"
                    className="focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                    placeholder
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="full_name"
                    className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2"
                  >
                    Company Name
                  </label>
                  <input
                    required
                    id="full_name"
                    name="full_name"
                    type="text"
                    className="focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                    placeholder
                  />
                </div>
              </div>
              <div className="w-2/4 max-w-xs xl:flex xl:justify-end">
                <div className="flex flex-col">
                  <label
                    htmlFor="email"
                    className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2"
                  >
                    Email
                  </label>
                  <input
                    required
                    id="email"
                    name="email"
                    type="email"
                    className="focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                    placeholder
                  />
                </div>
              </div>
            </div>
            <div className="flex w-full flex-wrap">
              <div className="w-2/4 max-w-xs">
                <div className="flex flex-col">
                  <label
                    htmlFor="phone"
                    className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2"
                  >
                    Phone
                  </label>
                  <input
                    required
                    id="phone"
                    name="phone"
                    type="tel"
                    className="focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                    placeholder
                  />
                </div>
              </div>
            </div>
            <div className="w-full mt-6">
              <div className="flex flex-col">
                <label
                  className="text-sm font-semibold text-gray-800 mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  placeholder
                  name="message"
                  className="border-gray-300 border mb-4 rounded py-2 text-sm outline-none resize-none px-3 focus:border focus:border-indigo-700"
                  rows={8}
                  id="message"
                  defaultValue={""}
                />
              </div>
              <button
                type="submit"
                className="focus:outline-none bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-3 text-sm leading-6"
              >
                Submit
              </button>
            </div>
          </form> */}
        </div>
      </div>
    </div>
  )
}

export default Contact
