import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Index() {
  return (
    <div>
      <>
        <Header></Header>

        <main></main>

        <main>
          <section class=" bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500  pattern py-3 rounded  pattern py-20"></section>

          <div class="max-h-screen max-w-full bg-gray-100 flex flex-col justify-center p-2">
            <div class="relative  py-4 sm:max-w-xl sm:mx-auto">
              <div class=" animate-pulse absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>

              <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                <div class="max-w-md mx-auto">
                  <div>
                    <h1 class="text-2xl font-semibold">About Me</h1>
                  </div>
                  <h1 className="pl-20 text-gray-500">
                    I'm web designer, and I'm very passionate and dedicated to
                    my work. With 0.6 monts experience as a web developer, I
                    have acquired the skills and knowledge necessary to make
                    your project a success. I enjoy every step of the design
                    process, from discussion and collaboration.
                    {/* <p>
                      My-Self Dharm Joshi, I am An I.T. Engineer. currently I am
                      in 8th semester in Gyanmanjari Institute of Technology
                      Collage which is under GTU (Gujarat Technological
                      University)
                    </p> */}
                  </h1>
                </div>
                <button className="mt-6 px-8 py-4 rounded-full font-normal tracking-wide bg-gradient-to-b from-blue-600 to-blue-700 text-white outline-none focus:outline-none hover:shadow-lg hover:from-blue-700 transition duration-200 ease-in-out">
                  Resume
                </button>
              </div>
            </div>
          </div>
          <section class="bg-gradient-to-r from-red-100 to-purple-500  pattern py-20">
            {" "}
            <div class="mb-3 text-center">
              <h1 class="text-3xl font-bold hover:underline hover:text-blue-200   ">
                Projects
              </h1>
            </div>
          </section>

          {/* beliver */}
          <div class="container mx-auto my-5">
            <div class="relative rounded-lg flex flex-col md:flex-row items-center md:shadow-xl md:h-72 mx-2  ease-in-out transform hover:-translate-y-1 hover:scale-200">
              <img
                class="object-cover  relative rounded-lg flex flex-col md:flex-row items-center md:shadow-xl md:h-72 mx-2  ease-in-out transform hover:-translate-y-1 hover:scale-200"
                src="/proimage/Believer.png"
                alt=""
                width={900}
              ></img>
              <div class="z-0 order-1 md:order-2 relative w-full md:w-2/5 h-80 md:h-full overflow-hidden rounded-lg md:rounded-none md:rounded-r-lg ">
                <div class="absolute inset-0 w-full h-full object-fill object-center bg-blue-400 bg-opacity-30 bg-cover bg-bottom">
                  {" "}
                  <a
                    href="https://believercards.com/"
                    class="block bg-gray-700 mt-5 rounded-md overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                  >
                    <div class="py-2 px-3 text-center text-sm">
                      <p class="text-gray-300"> Believer</p>

                      <span class="block text-gray-500 mt-2">
                        believercards.com
                      </span>
                    </div>
                  </a>
                </div>
                <div class="md:hidden absolute inset-0 h-full p-6 pb-6 flex flex-col-reverse justify-start items-start bg-gradient-to-b from-transparent via-transparent to-gray-900">
                  <h3 class="w-full font-bold text-2xl text-white leading-tight mb-2">
                    Believer
                  </h3>
                  {/* <h4 class="w-full text-xl text-gray-100 leading-tight">
                    Bienvenido a
                  </h4> */}
                </div>
                <svg
                  class="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-white -ml-12"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  <polygon points="50,0 100,0 50,100 0,100" />
                </svg>
              </div>

              <div class="z-10 order-2 md:order-1 w-full h-full md:w-3/5 flex items-center -mt-6 md:mt-0">
                <div class="p-8 md:pr-18 md:pl-14 md:py-12 mx-2 md:mx-0 h-full bg-white rounded-lg md:rounded-none md:rounded-l-lg shadow-xl md:shadow-none">
                  {/* <h4 class="hidden md:block text-xl text-gray-400">
                    Bienvenido a
                  </h4> */}
                  <h3 class="hidden md:block font-bold text-2xl text-gray-700">
                    Believer
                  </h3>
                  <p class="text-gray-600 text-justify">
                    It is Bascially based upon the Html5, Css3, Js are being
                    used and the website is based upon the cryptography.
                    Believer is an Ethereum based cryptocurrency token meant to
                    be an independent digital currency for the utilization as
                    well as widely acceptable payment gateway among several
                    platforms in partnership on the Believer Network.
                  </p>
                  <a
                    class="flex items-baseline mt-3 text-blue-600 hover:text-blue-900 focus:text-blue-900"
                    href="https://believercards.com/"
                  >
                    <span> believercards.com</span>
                    <span class="text-xs ml-1">&#x279c;</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* solar */}
          <div class="container mx-auto my-5">
            <div class="relative rounded-lg flex flex-col md:flex-row items-center md:shadow-xl md:h-72 mx-2  ease-in-out transform hover:-translate-y-1 hover:scale-200">
              <img
                class=" object-cover relative rounded-lg flex flex-col md:flex-row items-center md:shadow-xl md:h-72 mx-2  ease-in transform hover:-translate-y-1"
                src="/proimage/Solar.png"
                width={800}
                alt=""
              ></img>
              <div class="z-0 order-1 md:order-2 relative w-full md:w-2/5 h-80 md:h-full overflow-hidden rounded-lg md:rounded-none md:rounded-r-lg ">
                <div class="absolute inset-0 w-full h-full object-fill object-center bg-blue-400 bg-opacity-30 bg-cover bg-bottom">
                  <a
                    href="https://www.solarwale.co.in/"
                    class="block bg-gray-700 mt-5 rounded-md overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                  >
                    <div class="py-2 px-3 text-center text-sm">
                      <p class="text-gray-300">Solar Wale</p>

                      <span class="block text-gray-500 mt-2">
                        www.solarwale.co.in
                      </span>
                    </div>
                  </a>
                </div>
                <div class="md:hidden absolute inset-0 h-full p-6 pb-6 flex flex-col-reverse justify-start items-start bg-gradient-to-b from-transparent via-transparent to-gray-900">
                  <h3 class="w-full font-bold text-2xl text-white leading-tight mb-2">
                    Solar Wale
                  </h3>
                  {/* <h4 class="w-full text-xl text-gray-100 leading-tight">
                    Bienvenido a
                  </h4> */}
                </div>
                <svg
                  class="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-white -ml-12"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  <polygon points="50,0 100,0 50,100 0,100" />
                </svg>
              </div>

              <div class="z-10 order-2 md:order-1 w-full h-full md:w-3/5 flex items-center -mt-6 md:mt-0">
                <div class="p-8 md:pr-18 md:pl-14 md:py-12 mx-2 md:mx-0 h-full bg-white rounded-lg md:rounded-none md:rounded-l-lg shadow-xl md:shadow-none">
                  {/* <h4 class="hidden md:block text-xl text-gray-400">
                    Bienvenido a
                  </h4> */}
                  <h3 class="hidden md:block font-bold text-2xl text-gray-700">
                    Solar Wale
                  </h3>
                  <p class="text-gray-600 text-justify">
                    It is Bascially based upon the Styled Based Component of the
                    ReactJS , In which the Router, useState , useEffect Concept
                    are being used and the website is based upon the marketing
                    and it is responsive.
                  </p>
                  <a
                    class="flex items-baseline mt-3 text-blue-600 hover:text-blue-900 focus:text-blue-900"
                    href="https://www.solarwale.co.in/"
                  >
                    <span>www.solarwale.co.in</span>
                    <span class="text-xs ml-1">&#x279c;</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Rentetrs */}
          <div class="container mx-auto my-5">
            <div class="relative rounded-lg flex flex-col md:flex-row items-center md:shadow-xl md:h-72 mx-2  ease-in-out transform hover:-translate-y-1 hover:scale-200">
              <img
                class="object-cover object-cover relative rounded-lg flex flex-col md:flex-row items-center md:shadow-xl md:h-72 mx-2  ease-in-out transform hover:-translate-y-1 hover:scale-200"
                src="/proimage/Renters.png"
                width={900}
                alt=""
              ></img>
              <div class="z-0 order-1 md:order-2 relative w-full md:w-2/5 h-80 md:h-full overflow-hidden rounded-lg md:rounded-none md:rounded-r-lg ">
                <div class="absolute inset-0 w-full h-full object-fill object-center bg-blue-400 bg-opacity-30 bg-cover bg-bottom">
                  {" "}
                  <a
                    href="https://renters.vercel.app/"
                    class="block bg-gray-700 mt-5 rounded-md overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                  >
                    <div class="py-2 px-3 text-center text-sm">
                      <p class="text-gray-300">Renters</p>

                      <span class="block text-gray-500 mt-2">
                        renters.vercel.app
                      </span>
                    </div>
                  </a>
                </div>
                <div class="md:hidden absolute inset-0 h-full p-6 pb-6 flex flex-col-reverse justify-start items-start bg-gradient-to-b from-transparent via-transparent to-gray-900">
                  <h3 class="w-full font-bold text-2xl text-white leading-tight mb-2">
                    Renters
                  </h3>
                  {/* <h4 class="w-full text-xl text-gray-100 leading-tight">
                   Renters
                  </h4> */}
                </div>
                <svg
                  class="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-white -ml-12"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  <polygon points="50,0 100,0 50,100 0,100" />
                </svg>
              </div>

              <div class="z-10 order-2 md:order-1 w-full h-full md:w-3/5 flex items-center -mt-6 md:mt-0">
                <div class="p-8 md:pr-18 md:pl-14 md:py-12 mx-2 md:mx-0 h-full bg-white rounded-lg md:rounded-none md:rounded-l-lg shadow-xl md:shadow-none">
                  {/* <h4 class="hidden md:block text-xl text-gray-400">
                    Bienvenido a
                  </h4> */}
                  <h3 class="hidden md:block font-bold text-2xl text-gray-700">
                    Renters
                  </h3>
                  <p class="text-gray-600 text-justify">
                    It is based upon the pure component of the rectJS , In which
                    the hooks, states , Routing,Switch concept are being used,
                    and Sidebar Concept is also used in the project and it is
                    responsive
                  </p>
                  <a
                    class="flex items-baseline mt-3 text-blue-600 hover:text-blue-900 focus:text-blue-900"
                    href="https://renters.vercel.app/"
                  >
                    <span>renters.vercel.app</span>
                    <span class="text-xs ml-1">&#x279c;</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <section class="bg-gradient-to-r from-red-100 to-purple-500  pattern py-20">
            {" "}
            <div class="mb-3 text-center">
              <h1 class="text-3xl font-bold hover:underline hover:text-blue-200   ">
                More to come
              </h1>
            </div>
          </section>
          <div class="max-h-screen max-w-full bg-gray-100 flex flex-col justify-center p-5">
            <div class="relative w-full max-w-full lg:max-w-6xl xl:max-w-screen-2xl mx-auto">
              <div class="absolute animate-pulse inset-0 -mr-3.5 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500   shadow-lg transform -skew-y-6 sm:skew-y-0 sm:rotate-3 sm:rounded-3xl"></div>
              <div class="relative bg-white shadow-lg sm:rounded-3xl">
                <div class=" py-6">
                  <div class="max-w-5xl px-6 mx-auto text-center ">
                    <div class="flex -mx-1 mb-5">
                      <div class="w-1/2 px-1">
                        <a
                          href="#"
                          class="block mb-2 p-5 rounded overflow-hidden transform transition-all duration-300 scale-100 hover:scale-95"
                          style={{
                            "background-image": "url(/proimage/Believer.png); ",

                            "background-size": "cover",
                          }}
                        >
                          <div class="h-24"></div>
                          <h3 class="text-lg font-bold text-white leading-tight"></h3>
                        </a>
                        <a
                          href="#"
                          class="block mb-2 p-5 rounded overflow-hidden transform transition-all duration-300 scale-100 hover:scale-95"
                          style={{
                            "background-image": "url(/proimage/weba.png); ",

                            "background-size": "cover",
                          }}
                        >
                          <div class="h-32"></div>
                          <h3></h3>
                        </a>
                      </div>

                      <div class="w-1/2 px-1">
                        <a
                          href="#"
                          class="block mb-2 p-5 rounded overflow-hidden transform transition-all duration-300 scale-100 hover:scale-95"
                          style={{
                            "background-image": "url(/proimage/d.png); ",

                            "background-size": "cover",
                          }}
                        >
                          <div class="h-32"></div>
                        </a>
                        <a
                          href="#"
                          class="block mb-2 p-5 rounded overflow-hidden transform transition-all duration-300 scale-100 hover:scale-95"
                          style={{
                            "background-image": "url(/proimage/a.png); ",

                            "background-size": "cover",
                          }}
                        >
                          <div class="h-24"></div>
                          {/* <h3 class="text-lg font-bold text-white leading-tight">
                            APT Set To Be A&nbsp;Ripper
                          </h3> */}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section class="bg-gradient-to-r from-blue-300 to-blue-600  pattern py-3 rounded"></section>
        </main>
        <Footer></Footer>
      </>
    </div>
  );
}
