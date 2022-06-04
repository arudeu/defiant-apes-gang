import React from "react";
import Image from "next/image";
import Link from "next/link";

function toggleMenu() {
  const menu = document.querySelector(".dag-main-menu");
  menu.classList.toggle("hidden");
}

const Navbars = () => {
  return (
    <nav>
      <div className="container flex flex-wrap justify-between items-center mx-auto mt-5">
        <div
          className="logo navbar-brand text-center"
          style={{ width: "150px", height: "50px", position: "relative" }}
        >
          <Link href="/">
            <a className="flex items-center">
              <Image
                src="/images/DAG_logo.png"
                objectFit="center"
                layout="fill"
                alt="DAG"
              />
            </a>
          </Link>
        </div>
        <div className="dag-nav-line md:order-2"></div>
        <div className="flex md:order-4">
          <ul className="dag-social-list flex flex-row mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <Link href="https://twitter.com/DefiantApesGang">
                <a
                  target="_blank"
                  className="dag-social-item transition-colors block py-2 pr-4 pl3 hover:text-red-700"
                >
                  <svg
                    className="fill-current w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                  </svg>
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://discord.gg/Hh6TvkGs">
                <a
                  target="_blank"
                  className="dag-social-item transition-colors block py-2 pr-4 pl3 hover:text-red-700"
                >
                  <svg
                    className="fill-current w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                  >
                    <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z" />
                  </svg>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/" disabled="disabled">
                <a
                  className="dag-social-item block py-2 pr-4 pl3 cursor-not-allowed text-gray-400"
                  // target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className=" fill-current w-5 h-5"
                    viewBox="0 0 40 40"
                  >
                    <path d="M27.524 1.79c3.334.17 5.899 1.11 7.694 2.992 1.796 1.88 2.822 4.36 2.993 7.694 0 1.314.078 3.651.085 7.089v2.108c-.002 2.768-.014 4.702-.085 5.85-.171 3.335-1.112 5.9-2.993 7.695-1.88 1.796-4.36 2.822-7.694 2.993-1.15.071-3.143.083-5.88.085h-3.317c-2.768-.002-4.702-.014-5.85-.085-3.335-.171-5.9-1.112-7.695-2.993-1.796-1.795-2.822-4.36-2.993-7.694-.065-1.04-.08-2.771-.084-5.118v-4.812c.004-2.347.02-4.078.084-5.118.171-3.334 1.112-5.899 2.993-7.694 1.795-1.796 4.36-2.822 7.694-2.993 1.04-.065 2.771-.08 5.118-.084h4.847c2.361.004 4.043.02 5.083.084Zm-7.61 8.805c-2.65 0-4.873.94-6.668 2.736C11.45 15.212 10.51 17.35 10.51 20c0 2.65.94 4.873 2.736 6.669 1.88 1.795 4.018 2.736 6.668 2.736 2.65 0 4.874-.94 6.67-2.736 1.795-1.881 2.735-4.019 2.735-6.669 0-2.65-.94-4.873-2.736-6.669-1.795-1.88-4.018-2.736-6.669-2.736Zm0 3.25c1.71 0 3.164.598 4.36 1.795A6.076 6.076 0 0 1 26.07 20c0 1.624-.598 3.078-1.795 4.275-1.197 1.197-2.65 1.795-4.36 1.795-1.71 0-3.164-.598-4.36-1.795-1.198-1.112-1.796-2.565-1.796-4.275 0-1.71.598-3.163 1.795-4.36 1.197-1.197 2.65-1.796 4.36-1.796Zm9.833-5.9c-.599 0-1.112.257-1.54.684-.427.427-.683.94-.683 1.539 0 .598.256 1.111.684 1.539.427.427.94.684 1.539.684.598 0 1.111-.257 1.538-.684.428-.428.684-.94.684-1.54 0-.598-.256-1.11-.684-1.538-.427-.427-.94-.684-1.538-.684Z"></path>
                  </svg>
                </a>
              </Link>
            </li>
          </ul>
          <button
            className="dag-menu-toggle inline-flex items-center p-2 text-md"
            type="button"
            onClick={() => toggleMenu()}
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-9 h-9"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              className="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div className="dag-nav-line"></div>
        <div className="dag-main-menu z-80 justify-between justify items-center w-full lg:flex lg:w-auto md:order-1">
          <ul className="flex flex-col mt-4 md:space-x-1 md:mt-0 md:text-sm md:font-medium lg:flex-row border-solid md:left-0 md:top-0 w-full">
            <li className="dag-nav-block active md:my-0">
              <Link href="/">
                <a className="dag-nav-item block py-2 pr-4 pl-3 text-lg">
                  HOME
                </a>
              </Link>
            </li>
            <li className="dag-nav-block dag-nav-item-disabled">
              <Link href="/">
                <a
                  className="dag-nav-item dag-nav-item-disabled block py-2 pr-4 pl-3 text-lg"
                  disabled="disabled"
                >
                  THE JUNGLE
                </a>
              </Link>
            </li>
            <li className="dag-nav-block dag-nav-item-disabled">
              <Link href="/">
                <a
                  className="dag-nav-item dag-nav-item-disabled block py-2 pr-4 pl-3 text-lg"
                  disabled="disabled"
                >
                  MANIFESTO
                </a>
              </Link>
            </li>
            <li className="dag-nav-block dag-nav-item-disabled">
              <Link href="/">
                <a className="dag-nav-item dag-nav-item-disabled block py-2 pr-4 pl-3 text-lg">
                  WORLD TREE
                </a>
              </Link>
            </li>
            <li className="dag-nav-block dag-nav-item-disabled">
              <Link href="/">
                <a
                  className="dag-nav-item dag-nav-item-disabled block py-2 pr-4 pl-3 text-lg"
                  disabled="disabled"
                >
                  LORE
                </a>
              </Link>
            </li>
            <li className="dag-nav-block dag-nav-item-disabled">
              <Link href="/">
                <a
                  className="dag-nav-item dag-nav-item-disabled block py-2 pr-4 pl-3 text-lg"
                  disabled="disabled"
                >
                  GAMES
                </a>
              </Link>
            </li>
            <li className="dag-nav-block dag-nav-item-disabled">
              <Link href="/">
                <a
                  className="dag-nav-item dag-nav-item-disabled block py-2 pr-4 pl-3 text-lg"
                  disabled="disabled"
                >
                  STORE
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbars;
