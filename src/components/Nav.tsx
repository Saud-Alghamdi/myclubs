import { useState } from "react";
import logo from "../assets/logo-icon.png";
import HamburgerIcon from "../assets/HamburgerIcon.tsx";
import { Link } from "react-router-dom";

export default function Nav() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="flex h-fit flex-wrap justify-between bg-gray-950 text-gray-200 sm:justify-normal">
      {/* Flex Child 1 */}
      <div className="flex w-1/2 items-center justify-start sm:w-fit">
        <Link to="/">
          <img src={logo} alt="" className="h-12" />
        </Link>
      </div>
      {/* Flex Child 2 - Nav in bigger screens */}
      <div className="hidden grow sm:block">
        <ul className="flex h-full items-center justify-center gap-x-10">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/myclubs">My Clubs</Link>
          </li>
          <li>
            <Link to="/mymatches">My Matches</Link>
          </li>
          <li>
            <Link to="/signup">Sign up</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
      {/* Flex Child 3 */}
      <div className="flex w-1/2 items-center justify-end sm:hidden sm:w-fit">
        <button onClick={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}>
          <HamburgerIcon twStyles="h-8 fill-gray-200" />
        </button>
      </div>
      {/* Flex Child 4 - Nav in smaller screens  */}
      {isOpen && (
        <div className="block sm:hidden">
          <ul className="flex h-full flex-col items-start justify-center">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/myclubs">My Clubs</Link>
            </li>
            <li>
              <Link to="/mymatches">My Matches</Link>
            </li>
            <li>
              <Link to="/signup">Sign up</Link>
            </li>
            <li>
              <Link to="/login">Log in</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
