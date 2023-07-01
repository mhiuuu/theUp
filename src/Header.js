const Header = () => {
  return (
    <nav class="bg-blue-200">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" class="flex items-center">
          <span class="self-center text-2xl font-semibold whitespace-nowrap">Flowbite</span>
        </a>
        <div class="flex items-center md:order-2 mr-4">
          <h1>H</h1>     
        </div>
        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
          <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li>
              <a href="#" class="block py-2 pl-3 pr-4 text-black bg-transparent rounded" aria-current="page">Home</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}


export default Header