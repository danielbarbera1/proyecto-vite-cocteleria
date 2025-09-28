const navbar = () => {
  return `<nav class="bg-blue-900 p-4 text-white">
        <div class="container mx-auto flex items-center justify-between">
            <a href="#" class="text-2xl font-bold">Cocteleria</a>

            <div class="flex-1 mx-4 search-container">
                <div class="relative">
                    <div class="flex items-center gap-3">
                        <input 
                            type="text" 
                            id="search-input" 
                            placeholder="Buscar Cocteles..." 
                            class="w-full py-2 px-4 rounded-l text-white focus:ring-2 focus:ring-white"
                        >
                        <button id="search-button" class="bg-blue-700 hover:bg-blue-600 py-1 px-3 rounded-2xl">
                            <i class='bx bx-search-alt'></i> 
                        </button>
                    </div>
                    <div id="search-results" class="absolute z-10 w-full bg-white text-gray-800 rounded mt-1"></div>
                </div>
            </div>

            <div class="md:hidden">
                <button id="menu-button" class="text-white focus:outline-none">
                    <svg
                        class="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        ></path>
                    </svg>
                </button>
            </div>

            <div class="hidden md:flex space-x-4">
                <a href="#" class="hover:underline">Inicio</a>
                <a href="#" class="hover:underline">Productos</a>
                <a href="#" class="hover:underline">Servicios</a>
                <a href="#" class="hover:underline">Contacto</a>
            </div>
        </div>

        <div id="mobile-menu" class="hidden md:hidden">
            <a href="#" class="block px-4 py-2 hover:bg-blue-500">Inicio</a>
            <a href="#" class="block px-4 py-2 hover:bg-blue-500">Acerca de</a>
            <a href="#" class="block px-4 py-2 hover:bg-blue-500">Servicios</a>
            <a href="#" class="block px-4 py-2 hover:bg-blue-500">Contacto</a>
        </div>
    </nav>`;
}

export default navbar;