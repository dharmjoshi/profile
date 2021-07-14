export default function Header(props) {
  let { page } = props;
  return (
    <div class="min-h-screen min-w-full bg-gray-100 flex flex-col justify-center ">
      <div class="relative w-full max-w-full lg:max-w-6xl xl:max-w-screen-xl mx-auto">
        <div class=" animate-pulse absolute inset-0 -mr-3.5 bg-gradient-to-r from-red-100 to-purple-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:rotate-3 sm:rounded-3xl"></div>
        <div class="relative bg-white shadow-lg sm:rounded-3xl">
          <div class="px-10 py-5">
            <div class="lg:2/6 xl:w-2/4 mt-20 lg:mt-40 lg:ml-16 ">
              <div class="text-5xl font-semibold text-gray-900 leading-none">
                Hi, My Name is <span className="">Dharm Joshi </span>
                and I am IT Engineer
              </div>
              <div className="mt-6 text-xl font-light text-true-gray-500 antialiased"></div>
              <button className="mt-6 px-8 py-4 rounded-full font-normal tracking-wide bg-gradient-to-b from-blue-600 to-blue-700 text-white outline-none focus:outline-none hover:shadow-lg hover:from-blue-700 transition duration-200 ease-in-out">
                Konw More
              </button>
            </div>
            <div class="mt-12 lg:mt-32 lg:ml-20 text-left">
              <bottom
                type="button"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-cool-gray-100 text-gray-800 animate-bounce hover:text-gray-900 hover:bg-cool-gray-50 transition duration-300 ease-in-out cursor-pointer"
              >
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  ></path>
                </svg>
              </bottom>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
