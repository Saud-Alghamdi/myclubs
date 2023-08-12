import { useState } from "react";
import logo from "../assets/logo-icon.png";
import HamburgerIcon from "./HamburgerIcon";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Spinner from "../components/Spinner";

export default function Nav() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);

  const authContext = useAuth();
  const { logout } = authContext;

  const handleLogout = async () => {
    setIsLoading(true);
    await logout();
    setIsLoading(false);
  };

  return (
    <nav className="flex h-fit flex-wrap justify-between bg-gray-950 text-gray-200 sm:justify-normal">
      {isLoading && <Spinner />}
      {/* Flex Child 1 - Logo */}
      <div className="flex w-1/2 items-center justify-start sm:w-fit">
        <Link to="/">
          <img src={logo} alt="" className="h-12" />
        </Link>
      </div>
      {/* Flex Child 2 - Nav links in bigger screens */}
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
          {authContext?.currentUser ? (
            <>
              <li>
                <Link to="/" onClick={() => handleLogout()}>
                  Logout
                </Link>
              </li>
              <li>{authContext.currentUser.displayName}</li>
            </>
          ) : (
            <>
              <li>
                <Link to="/signup">Sign up</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </>
          )}
        </ul>
      </div>
      {/* Flex Child 3 - Hamburger Icon */}
      <div className="flex w-1/2 items-center justify-end sm:hidden sm:w-fit">
        <button onClick={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}>
          <HamburgerIcon tailwindClasses="h-8 fill-gray-200" />
        </button>
      </div>
      {/* Flex Child 4 - Nav links in smaller screens  */}
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
            {authContext?.currentUser ? (
              <>
                <li>
                  <Link to="/">Logout</Link>
                </li>
                <li>{authContext.currentUser.displayName}</li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/signup">Sign up</Link>
                </li>
                <li>
                  <Link to="/login">Log in</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
}
