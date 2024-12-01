"use client";

import React, { useState } from "react";
import "../static/styles/Header.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../static/img/Nav logo.png";
import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { setUser } from "@/store/slices/userSlice";
import { IoIosArrowDown } from "react-icons/io";

const NavBar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [openDrowdown, setDropdown] = useState(false);

  const { user, isUserLoggedIn } = useSelector(
    (state: RootState) => state.user
  );
  const dispatch = useDispatch();
  dispatch(setUser({ user: null, isUserLoggedIn: true }));
  console.log(isUserLoggedIn);

  // Function to toggle the menu
  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
        <Link
          href="/auth/login"
          className={
            pathname === "/auth/login" ? "text-prime navlink" : "navlink"
          }
        >
          <div className="flex flex-row items-center gap-x-1 text-lg">
            <span className="text-xl">
              <FaUserCircle />
            </span>
            Login
          </div>
        </Link>
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
              {openDrowdown && (
                <div className="dropdown-content absolute flex flex-col rounded-sm no-underline ">
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

const Navlinks = [
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
      <div className="flex flex-row items-center gap-x-1">
        <FaUserCircle />
        Login
      </div>
    ),
    path: "/auth/login",
    hideFor: "mobile",
  },
];

export default NavBar;
