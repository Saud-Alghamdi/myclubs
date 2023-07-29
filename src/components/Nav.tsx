import { useState } from "react";
import logo from "../assets/logo-icon.png";
import HamburgerIcon from "../assets/HamburgerIcon.tsx";

export default function Nav() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="bg-gray-950 h-fit flex text-gray-200 flex-wrap justify-between sm:justify-normal">
      {/* Flex Child 1 */}
      <div className="flex items-center justify-start w-1/2 sm:w-fit">
        <a href="">
          <img
            src={logo}
            alt=""
            className="h-12"
          />
        </a>
      </div>
      {/* Flex Child 2 */}
      <div className="hidden sm:block grow">
        <ul className="flex items-center justify-center h-full gap-x-10">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">My Clubs</a>
          </li>
          <li>
            <a href="">My Matches</a>
          </li>
          <li>
            <a href="">Sign up</a>
          </li>
          <li>
            <a href="">Login</a>
          </li>
        </ul>
      </div>
      {/* Flex Child 3 */}
      <div className="flex justify-end items-center sm:hidden w-1/2 sm:w-fit">
        <button onClick={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}>
          <HamburgerIcon twStyles="h-8 fill-gray-200" />
        </button>
      </div>
      {/* Flex Child 4 */}
      {isOpen && (
        <div className="block sm:hidden">
          <ul className="flex flex-col items-start justify-center h-full">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">My Clubz</a>
            </li>
            <li>
              <a href="">My Matches</a>
            </li>
            <li>
              <a href="">Sign up</a>
            </li>
            <li>
              <a href="">Log in</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
