"use client";

import React, { useEffect, useRef, useState } from "react";
import "../static/styles/Header.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../static/img/Nav logo.png";
import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { IoIosArrowDown } from "react-icons/io";
import { setAuthModal } from "@/store/slices/userSlice";

interface Navlink {
  title: string | React.JSX.Element;
  path: string;
  hideFor?: "desktop" | "mobile" | undefined;
}

const NavBar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [openDropdown, setDropdown] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const dispatch = useDispatch();

  const { user, isUserLoggedIn } = useSelector(
    (state: RootState) => state.user
  );

  // Function to toggle the menu
  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdown(false);
      }
    };

    if (openDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openDropdown]);

  const Navlinks: Navlink[] = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Courses",
      path: "/courses",
    },
    {
      title: "Tutors",
      path: "/tutors",
    },
    {
      title: "Schools & Coaching Centers",
      path: "/schools",
    },
    {
      title: "About Us",
      path: "/about",
    },
    {
      title: "Contact Us",
      path: "/contact",
    },
    {
      title: (
        <button
          onClick={() => dispatch(setAuthModal(true))}
          className="navlink"
        >
          <div className="flex flex-row items-center gap-x-1 text-lg">
            <span className="text-xl">
              <FaUserCircle />
            </span>
            Login
          </div>
        </button>
      ),
      path: "#",
      hideFor: "mobile",
    },
  ];

  return (
    <div className="navbar px-3">
      <div className="">
        <Link
          href="/"
          className={`flex items-center gap-x-3 logo ${
            isOpen ? "z-auto" : "z-[99999]"
          }`}
        >
          <Image src={logo} alt="Logo" width={150} height={150} />
        </Link>
      </div>
      <div></div>
      <div className="desktop:hidden flex gap-x-6 items-center">
        <button
          onClick={() => dispatch(setAuthModal(true))}
          className="navlink z-[999]"
        >
          <div className="flex flex-row items-center gap-x-1 text-lg">
            <span className="text-xl">
              <FaUserCircle />
            </span>
            Login
          </div>
        </button>
        <div
          className={`hamburger ${isOpen ? "open" : ""} flex desktop:hidden`}
          onClick={() => handleToggleMenu()}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className="desktop:flex flex-row gap-x-6 items-center leading-tight hidden text-lg">
        {Navlinks.map((nav) =>
          nav.path === "/auth/login" && isUserLoggedIn ? (
            <div key={nav.path} className="dropdown ">
              <div
                onClick={() => setDropdown((curr) => !curr)}
                className="flex flex-row items-center text-xl gap-x-2 p-2 rounded cursor-pointer dropBtn"
              >
                <FaUserCircle />
                <span className="text-base flex flex-row items-center">
                  Hi {user?.name}
                  <IoIosArrowDown />
                </span>
              </div>
              {openDropdown && (
                <div
                  ref={dropdownRef}
                  className="dropdown-content absolute flex flex-col rounded-sm no-underline "
                >
                  <Link href={"/"}>Profile</Link>
                  <Link href={"/"}>Logout</Link>
                </div>
              )}
            </div>
          ) : (
            <Link
              key={nav.path}
              href={nav.path}
              className={
                pathname === nav.path ? "text-prime navlink" : " navlink"
              }
            >
              {nav.title}
            </Link>
          )
        )}
      </div>

      <div className={`menu-overlay ${isOpen ? "open" : ""}`}>
        <ul className="menu navlink font-light text-xl">
          {Navlinks.map((nav) => (
            <li
              key={nav.path}
              className={`${nav.hideFor === "mobile" ? "hidden" : ""}`}
            >
              <Link
                href={nav.path}
                className={
                  pathname === nav.path ? "text-prime navlink" : " navlink"
                }
              >
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
