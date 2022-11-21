<template>
    <div>
      <div class="bg-white">
        <nav
          class="
            container
            px-6
            py-8
            mx-auto
            md:flex md:justify-between md:items-center
          "
        >
          <div class="flex items-center justify-between">
            
            <!-- Mobile menu button -->
            <div @click="showMenu = !showMenu" class="flex md:hidden">
              <button
                type="button"
                class="
                  text-gray-800
                  hover:text-gray-400
                  focus:outline-none focus:text-gray-400
                "
              >
                <svg viewBox="0 0 24 24" class="text-mainColor w-6 h-6 fill-current">
                  <path
                    fill-rule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  ></path>
                </svg>
              </button>
            </div>
            <img class="-mr-1 ml-2 h-24" src="../assets/firmlogo-removebg-preview.png">

          </div>
  
  
          <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
          <ul
            :class="showMenu ? 'flex' : 'hidden'"
            class="
              flex-col
              mt-0
              space-y-4
              md:flex
              md:space-y-0
              md:flex-row
              md:items-center
              md:space-x-10
              md:mt-0
            "
          >
            <li class="font-bold text-gray-800 hover:text-mainColor cursor-pointer">
                <router-link to="/">Home</router-link>
            </li>
            <li class="font-bold text-gray-800 hover:text-mainColor cursor-pointer">
                <router-link to="/about">About</router-link>
            </li>
            <li class="font-bold text-gray-800 hover:text-mainColor cursor-pointer">
                <router-link to="/services">Services</router-link>
            </li>
            <li class="font-bold text-gray-800 hover:text-mainColor cursor-pointer">
                <router-link to="/contact">Contact</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
        showMenu: false,
      };
    },
  };
  </script>