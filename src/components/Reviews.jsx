import React from "react"
import Swiper from "swiper"
import "swiper/swiper-bundle.min.css"

class Reviews extends React.Component {
  componentDidMount() {
    new Swiper(".mySwiper", {
      slidesPerView: 1,
      grid: {
        rows: 1,
      },
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    })
  }

  render() {
    return (
      <div className="container mx-auto mt-20 w-full swiper mySwiper">
        <div className="mb-16 swiper-wrapper">
        <div className="swiper-slide w-1/2 md:w-1/4">
            <div className="p-4 text-gray-800 border-l-4 border-gray-600 rounded-l-none rounded-lg shadow-md">
              <div className="mb-2">
                <p className="mb-2 text-center text-green-800 text-lg ">
                  - Mark J. Gage, Richard S. Yoon, Kenneth A. Egol, Frank A.
                  Liporace, Orthopedic Clinics of North America, Vol 46, 2015.
                </p>
                <div className="flex flex-col items-center justify-center">
                  <p className="text-md text-gray-600 text-center">
                    “Since its inception more than 20 years ago, negative
                    pressure wound therapy (NPWT) has had a major impact in the
                    management of orthopedic injuries. NPWT has been widely
                    adopted for use in a variety of clinical scenarios, and has
                    had re- ported success in the setting of high-energy trauma,
                    open fractures, infections, and excessive soft tissue
                    damage. “
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide w-1/2 md:w-1/4">
            <div className="p-4 text-gray-800 border-l-4 border-gray-600 rounded-l-none rounded-lg shadow-md">
              <div className="mb-2">
                <p className="mb-2 text-center text-green-800 text-lg ">
                  - David Brinkert Mazen Ali Magali Naud Nicolas Maire Chloé
                  Trial Luc Téot, International Wound Journal, 2013.
                </p>
                <div className="flex flex-col items-center justify-center">
                  <p className="text-md text-gray-600 text-center">
                    “Investigators from all three test sites observed a common
                    positive effect of the saline instillation after a few days
                    with respect to increased granulation tissue formation and
                    reduced wound volume. The newly formed granulation tissue
                    after NPWTi was more beefy red and moist. Granulation tissue
                    production was enhanced compared to conventional NPWT, in
                    terms of filling the dead space more rapidly and completely.
                    Undermined cavities and exposed bones were also more rapidly
                    covered during NPWTi. The effects of instillation were
                    likely more striking owing to systematic surgical
                    debridement prior to initiating NPWTi and at each dressing
                    change as appropriate.”
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide w-1/2 md:w-1/4">
            <div className="p-4 text-gray-800 border-l-4 border-gray-600 rounded-l-none rounded-lg shadow-md">
              <div className="mb-2">
                <p className="mb-2 text-center text-green-800 text-lg ">
                  - Wound Management & Prevention, Vol 62, Issue 9, 2016 Robert
                  Dettmers, Wouter Brekelmans, Michiel Leijnen, Boudewijn Borger
                  van der Burg, Ewan Ritchie.
                </p>
                <div className="flex flex-col items-center justify-center">
                  <p className="text-md text-gray-600 text-center">
                    “Infection following orthopedic implants for bone fixation
                    or joint replacement is always serious and may require
                    removal of the osteosynthetic material. Negative pressure
                    wound therapy with instillation and dwell time (NPWTi-d) is
                    an emerging therapy for the treatment of complex wounds,
                    including infected wounds with osteosynthetic material.”
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide w-1/2 md:w-1/4">
            <div className="p-4 text-gray-800 border-l-4 border-gray-600 rounded-l-none rounded-lg shadow-md">
              <div className="mb-2">
                <p className="mb-2 text-center text-green-800 text-lg ">
                  - Nanda Kishore Maddineni, Satya Kumar Koduru, Harshavardan
                  Surath, Ananda Rao Venkata Dakshina Murthy, Mettu Rami Reddy,
                  Amarnath Surath Journal of Dr. NTR University of Health
                  Sciences, Vol 4, 2015.
                </p>
                <div className="flex flex-col items-center justify-center">
                  <p className="text-md text-gray-600 text-center">
                    “NPWT has a definite role in eradicating early postoperative
                    infection in the presence of an implant. The greatest
                    advantage is retention of the implant. The use of NPWT in
                    early orthopedic surgical site infection will prevent
                    implant removal and facilitate rapid formation of
                    granulation tissue. It will render the wound environment
                    suitable for soft tissue reconstruction, ultimately leading
                    to fracture union.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    )
  }
}

export default Reviews
