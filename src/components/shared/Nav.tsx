import { useState } from "react";
import logo from "../../assets/myclubs-nav-logo.png";
import HamburgerIcon from "../svg/HamburgerIcon";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { motion, AnimatePresence } from "framer-motion";

export default function Nav() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { currentUser, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <nav className="flex min-h-[50px] flex-wrap justify-between bg-neutral-900 px-1 text-gray-200 sm:min-h-[70px] sm:justify-normal">
      {/* Flex Child 1 - Logo */}
      <div className="flex min-h-[50px] w-1/2 items-center justify-start sm:w-fit">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-12 md:h-16" />
        </Link>
      </div>
      {/* Flex Child 2 - Nav links in bigger screens */}
      <div className="hidden grow sm:block">
        <ul className="flex h-full items-center justify-center gap-x-10">
          <li className=" hover:text-red-500 focus:text-red-500 active:text-red-600">
            <Link to="/">Home</Link>
          </li>
          <li className=" hover:text-red-500 focus:text-red-500 active:text-red-600">
            <Link to="/myclubs">My Clubs</Link>
          </li>
          <li className=" hover:text-red-500 focus:text-red-500 active:text-red-600">
            <Link to="/mymatches">My Matches</Link>
          </li>
          {currentUser ? (
            <>
              <li className=" hover:text-red-500 focus:text-red-500 active:text-red-600">
                <Link to="/" onClick={() => handleLogout()}>
                  Logout
                </Link>
              </li>
              <li className=" hover:text-red-500 focus:text-red-500 active:text-red-600">
                <Link to="/">{currentUser.displayName}</Link>
              </li>
            </>
          ) : (
            <>
              <li className=" hover:text-red-500 focus:text-red-500 active:text-red-600">
                <Link to="/signup">Sign up</Link>
              </li>
              <li className=" hover:text-red-500 focus:text-red-500 active:text-red-600">
                <Link to="/login">Login</Link>
              </li>
            </>
          )}
        </ul>
      </div>
      {/* Flex Child 3 - Hamburger Icon */}
      <div className="flex min-h-[50px] w-1/2 items-center justify-end sm:hidden sm:w-fit">
        <button onClick={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}>
          <HamburgerIcon twStyles="h-8 fill-gray-200" />
        </button>
      </div>
      {/* Flex Child 4 - Nav links in smaller screens  */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, maxHeight: 0 }}
            animate={{ opacity: 1, maxHeight: "300px" }}
            exit={{ opacity: 0, maxHeight: 0 }}
            transition={{
              opacity: { duration: 0.2 },
              maxHeight: { duration: 0.2 },
            }}
            className="block overflow-hidden sm:hidden"
          >
            <ul className="flex h-full flex-col items-start justify-center gap-y-3 px-1 py-3">
              <li className=" hover:text-red-500 focus:text-red-500 active:text-red-600">
                <Link to="/">Home</Link>
              </li>
              <li className=" hover:text-red-500 focus:text-red-500 active:text-red-600">
                <Link to="/myclubs">My Clubs</Link>
              </li>
              <li className=" hover:text-red-500 focus:text-red-500 active:text-red-600">
                <Link to="/mymatches">My Matches</Link>
              </li>
              {currentUser ? (
                <>
                  <li className=" hover:text-red-500 focus:text-red-500 active:text-red-600">
                    <Link to="/" onClick={() => handleLogout()}>
                      Logout
                    </Link>
                  </li>

                  <li className=" hover:text-red-500 focus:text-red-500 active:text-red-600">
                    <Link to="/">{currentUser.displayName}</Link>
                  </li>
                </>
              ) : (
                <>
                  <li className=" hover:text-red-500 focus:text-red-500 active:text-red-600">
                    <Link to="/signup">Sign up</Link>
                  </li>
                  <li className=" hover:text-red-500 focus:text-red-500 active:text-red-600">
                    <Link to="/login">Log in</Link>
                  </li>
                </>
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
