<template>
    <!-- Main Navigation -->
    <nav
      class="block w-full max-w-full px-4 px-8 py-4 text-white bg-transparent rounded-none shadow-md shadow-none max-w-screen-2xl rounded-xl"
    >
      <div
        class="container flex items-center justify-between mx-auto text-blue-gray-900"
      >
        <a
          href="#"
          class="block mr-4 font-sans text-base text-lg antialiased font-light font-bold leading-relaxed cursor-pointer text-blue-gray-900"
          >Tutorial hub</a
        >
        <div class="hidden lg:block">
          <ul
            class="flex flex-col gap-3 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-8"
          >
            <a href="#"
              ><li
                class="block p-1 font-sans text-base antialiased font-light font-medium leading-relaxed text-blue-gray-900"
              >
                Programming
              </li></a
            ><a href="#"
              ><li
                class="block p-1 font-sans text-base antialiased font-light font-medium leading-relaxed text-blue-gray-900"
              >
                Web Development
              </li></a
            ><a href="#"
              ><li
                class="block p-1 font-sans text-base antialiased font-light font-medium leading-relaxed text-blue-gray-900"
              >
                Mobile Development
              </li></a
            >
            <a href="#"
              ><li
                class="block p-1 font-sans text-base antialiased font-light font-medium leading-relaxed text-blue-gray-900"
              >
                Data Science
              </li></a
            >
            <a href="#"
              ><li
                class="block p-1 font-sans text-base antialiased font-light font-medium leading-relaxed text-blue-gray-900"
              >
                Artificial Intelligence
              </li></a
            >
          </ul>
        </div>
        <button
          class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none bg-gray-900 hidden lg:inline-block"
          type="button"
          data-ripple-light="true"
        >
          Sign in</button
        ><button
          class="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30 ml-auto inline-block text-blue-gray-900 lg:hidden"
          type="button"
          data-ripple-dark="true"
          data-collapse-target="navbar"
        >
          <span
            class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              aria-hidden="true"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              ></path></svg
          ></span>
        </button>
      </div>
      <div
        data-collapse="navbar"
        class="block w-full h-0 overflow-hidden transition-all duration-300 ease-in basis-full lg:hidden"
      >
        <div class="py-2 mt-2 bg-white rounded-xl">
          <ul
            class="flex flex-col gap-3 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-8"
          >
            <a href="#"
              ><li
                class="block p-1 font-sans text-base antialiased font-light font-medium leading-relaxed text-blue-gray-900"
              >
                About Us
              </li></a
            ><a href="#"
              ><li
                class="block p-1 font-sans text-base antialiased font-light font-medium leading-relaxed text-blue-gray-900"
              >
                Pricing
              </li></a
            ><a href="#"
              ><li
                class="block p-1 font-sans text-base antialiased font-light font-medium leading-relaxed text-blue-gray-900"
              >
                Contact Us
              </li></a
            >
          </ul>
          <button
            class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none bg-gray-900 block w-full mb-2"
            type="button"
            data-ripple-light="true"
          >
            Sign in
          </button>
        </div>
      </div>
    </nav>
  </template>
  