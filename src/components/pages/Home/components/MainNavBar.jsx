"use client";
import Link from "next/link"; // Correct import for Link
import { usePathname } from "next/navigation";
import { RxHamburgerMenu } from "react-icons/rx";
import { TfiClose } from "react-icons/tfi";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../context/AuthContext"; // Ensure this context is set up correctly
import { FaArrowAltCircleRight } from "react-icons/fa";
import Image from "next/image";
import { ChevronDown, History, LogOut, User } from "lucide-react";
import useAxiosWithAuth from "@/config/useAxiosWithAuth";

export const MainNavBar = () => {
  const [toggle, setToggle] = useState(false);
  const [proToggle, setProToggle] = useState(false);
  const { isAuthenticated, logout } = useContext(AuthContext);
  const [user, setUser] = useState(null);
  // const router = useRouter();
  // const pathname = router.pathname;
  const axiosInstance = useAxiosWithAuth();
  const showMenu = () => {
    setToggle(!toggle);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axiosInstance.get("auth/profile", {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/json",
          },
        });
        setUser(data);
        // console.log(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    if (isAuthenticated) {
      fetchData();
    }
  }, [isAuthenticated]);
  const handleToggle = () => {
    setProToggle((prev) => !prev);
  };
  const pathname = usePathname();
  return (
    <>
      <nav className="border-b-[1px] border-gray-100">
        <div className="container border-b-[1px] border-gray-100" style={{ padding: "9px 20px" }}>
          <div className="logo-side py-auto">
            <Link href="/">
              {" "}
              <div className="w-12">
                <Image
                  width={200}
                  height={200}
                  src="/logo.png"
                  sizes="8"
                  className="rounded-full"
                  alt=" IDX on Solana"
                />
              </div>
            </Link>
          </div>
          <div className="burger">
            {toggle ? (
              <TfiClose onClick={showMenu} color="var(--main-color)" />
            ) : (
              <RxHamburgerMenu onClick={showMenu} color="var(--main-color)" />
            )}
          </div>
          <div className={`right-side ${toggle ? "show" : "hide"}`}>
            <ul className="logo-menu">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/documentation">Documentation</Link>
              </li>
              <li>
                <Link href="/documentation/api-documentation">Api</Link>
              </li>
              <li>
                <Link href="/career">Career</Link>
              </li>
              {/* {isAuthenticated && (
                <li>
                  <Link href="/result-history">Results</Link>
                </li>
              )} */}
            </ul>
            <ul className="main-menu">
              <div className="btns-container">
                <Link
                  className="btn2"
                  style={{ fontSize: "14px" }}
                  href="/learning-guide"
                >
                  Learning Guide
                </Link>
              </div>
              {/* <div className="btns-container">
                <Link className="btn2" style={{ fontSize: "14px" }} href="/learning-guide">Connect Your Wallet</Link>
              </div> */}
              {/* Conditionally render the button based on the current pathname */}
              {pathname !== "/mainWizard" && (
                <div className="btns-container">
                  <Link
                    className="btn flex items-center justify-center gap-2 px-4 py-2 rounded-full text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                    style={{ fontSize: "14px" }}
                    href="/mainWizard"
                  >
                    Test Your Idea <FaArrowAltCircleRight />
                  </Link>
                </div>
              )}
              {isAuthenticated ? (
                <li className="relative">
                  {/* Profile Container */}
                  <div
                    className="flex items-center gap-2 p-1 hover:bg-gray-100 rounded-full transition-colors duration-200 cursor-pointer"
                    onClick={handleToggle}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === "Enter" && handleToggle()}
                    aria-haspopup="true"
                    aria-expanded={proToggle}
                  >
                    <Image
                      width={40}
                      height={40}
                      src={`https://ui-avatars.com/api/?name=${
                        user?.name || user?.email
                      }`}
                      className="rounded-full border-2 border-gray-200 hover:border-gray-300 transition-colors duration-200"
                      alt="Profile Picture"
                    />
                    <ChevronDown
                      size={16}
                      className={`text-gray-600 transition-transform duration-200 ${
                        proToggle ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                  {proToggle && (
                    <div
                      className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-xl shadow-xl transform origin-top-right transition-all duration-200 ease-out"
                      role="menu"
                    >
                      {/* User Profile Header */}
                      <div className="px-4 py-3 bg-gray-50/50 border-b border-gray-100">
                        <div className="flex items-center gap-3">
                          <div className="flex-shrink-0">
                            <Image
                              width={40}
                              height={40}
                              src={`https://ui-avatars.com/api/?name=${
                                user?.name || user?.email
                              }`}
                              className="rounded-full ring-2 ring-gray-100"
                              alt="Profile Picture"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold text-gray-900 truncate">
                              {user?.name || user?.email
  .split("@")[0] // Take the part before "@"
  .replace(/[^a-zA-Z\s]/g, "") // Remove numbers and symbols
  .replace(/_/g, " ") // Replace underscores with spaces
  .replace(/\./g, " ") // Replace dots with spaces
  .replace(/\b\w/g, (c) => c.toUpperCase())}
                            </p>
                            <p className="text-xs text-gray-500 truncate">
                              {user?.email}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="p-2 space-y-1">
                        <Link
                          href="/profile"
                          className="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-150 group"
                        >
                          <User
                            size={18}
                            className="text-gray-400 group-hover:text-gray-600"
                          />
                          <span className="group-hover:text-gray-900">
                            Your Profile
                          </span>
                        </Link>

                        <Link
                          href="/result-history"
                          className="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-150 group"
                        >
                          <History
                            size={18}
                            className="text-gray-400 group-hover:text-gray-600"
                          />
                          <span className="group-hover:text-gray-900">
                            Results History
                          </span>
                        </Link>

                        <div className="my-2 border-t border-gray-100" />

                        <button
                          onClick={logout}
                          className="w-full flex items-center gap-3 px-3 py-2 text-sm text-red-600 rounded-lg hover:bg-red-50 transition-colors duration-150 group"
                        >
                          <LogOut
                            size={18}
                            className="text-red-400 group-hover:text-red-600"
                          />
                          <span className="group-hover:text-red-700 font-medium">
                            Logout
                          </span>
                        </button>
                      </div>
                    </div>
                  )}
                </li>
              ) : (
                <li role="menuitem">
                  <Link
                    href="/login"
                    className="px-4 py-2 text-gray-700 font-medium hover:bg-gray-100 rounded-lg 
                  transition-colors duration-200 no-underline inline-block"
                  >
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <div className="clearspace"></div>
    </>
  );
};
