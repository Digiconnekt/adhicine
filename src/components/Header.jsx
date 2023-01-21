import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../provider";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const user = useContext(AppContext);

  return (
    <>
      <MobileMenu />

      <div className="top-bar-boxed h-[70px] md:h-[65px] z-[51] border-b border-white/[0.08] mt-12 md:mt-0 -mx-3 sm:-mx-8 md:-mx-0 px-3 md:border-b-0 relative md:fixed md:inset-x-0 md:top-0 sm:px-8 md:px-10 md:pt-10 md:bg-gradient-to-b md:from-slate-100 md:to-transparent dark:md:from-darkmode-700">
        <div className="h-full flex items-center">
          <NavLink
            to="/"
            className="logo -intro-x hidden md:flex xl:w-[180px] block mr-auto"
          >
            <img
              alt="Midone - HTML Admin Template"
              className="logo__image w-6"
              src="../dist/images/logo.svg"
            />
            <span className="logo__text text-white text-lg ml-3">Adhicine</span>
          </NavLink>

          {/* <nav aria-label="breadcrumb" className="-intro-x h-[45px] mr-auto">
            <ol className="breadcrumb breadcrumb-light">
              <li className="breadcrumb-item">
                <a href="#">Application</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Dashboard
              </li>
            </ol>
          </nav> */}

          {/* <div className="intro-x relative mr-3 sm:mr-6">
            <div className="search hidden sm:block">
              <input
                type="text"
                className="search__input form-control border-transparent"
                placeholder="Search..."
              />
              <i
                data-lucide="search"
                className="search__icon dark:text-slate-500"
              ></i>
            </div>
            <a className="notification notification--light sm:hidden" href="">
              <i
                data-lucide="search"
                className="notification__icon dark:text-slate-500"
              ></i>
            </a>
            <div className="search-result">
              <div className="search-result__content">
                <div className="search-result__content__title">Pages</div>
                <div className="mb-5">
                  <a href="" className="flex items-center">
                    <div className="w-8 h-8 bg-success/20 dark:bg-success/10 text-success flex items-center justify-center rounded-full">
                      <i className="w-4 h-4" data-lucide="inbox"></i>
                    </div>
                    <div className="ml-3">Mail Settings</div>
                  </a>
                  <a href="" className="flex items-center mt-2">
                    <div className="w-8 h-8 bg-pending/10 text-pending flex items-center justify-center rounded-full">
                      <i className="w-4 h-4" data-lucide="users"></i>
                    </div>
                    <div className="ml-3">Users & Permissions</div>
                  </a>
                  <a href="" className="flex items-center mt-2">
                    <div className="w-8 h-8 bg-primary/10 dark:bg-primary/20 text-primary/80 flex items-center justify-center rounded-full">
                      <i className="w-4 h-4" data-lucide="credit-card"></i>
                    </div>
                    <div className="ml-3">Transactions Report</div>
                  </a>
                </div>
                <div className="search-result__content__title">Users</div>
                <div className="mb-5">
                  <a href="" className="flex items-center mt-2">
                    <div className="w-8 h-8 image-fit">
                      <img
                        alt="Midone - HTML Admin Template"
                        className="rounded-full"
                        src="../dist/images/profile-15.jpg"
                      />
                    </div>
                    <div className="ml-3">Christian Bale</div>
                    <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">
                      christianbale@left4code.com
                    </div>
                  </a>
                  <a href="" className="flex items-center mt-2">
                    <div className="w-8 h-8 image-fit">
                      <img
                        alt="Midone - HTML Admin Template"
                        className="rounded-full"
                        src="../dist/images/profile-7.jpg"
                      />
                    </div>
                    <div className="ml-3">Johnny Depp</div>
                    <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">
                      johnnydepp@left4code.com
                    </div>
                  </a>
                  <a href="" className="flex items-center mt-2">
                    <div className="w-8 h-8 image-fit">
                      <img
                        alt="Midone - HTML Admin Template"
                        className="rounded-full"
                        src="../dist/images/profile-12.jpg"
                      />
                    </div>
                    <div className="ml-3">Robert De Niro</div>
                    <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">
                      robertdeniro@left4code.com
                    </div>
                  </a>
                  <a href="" className="flex items-center mt-2">
                    <div className="w-8 h-8 image-fit">
                      <img
                        alt="Midone - HTML Admin Template"
                        className="rounded-full"
                        src="../dist/images/profile-1.jpg"
                      />
                    </div>
                    <div className="ml-3">Morgan Freeman</div>
                    <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">
                      morganfreeman@left4code.com
                    </div>
                  </a>
                </div>
                <div className="search-result__content__title">Products</div>
                <a href="" className="flex items-center mt-2">
                  <div className="w-8 h-8 image-fit">
                    <img
                      alt="Midone - HTML Admin Template"
                      className="rounded-full"
                      src="../dist/images/preview-1.jpg"
                    />
                  </div>
                  <div className="ml-3">Samsung Q90 QLED TV</div>
                  <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">
                    Electronic
                  </div>
                </a>
                <a href="" className="flex items-center mt-2">
                  <div className="w-8 h-8 image-fit">
                    <img
                      alt="Midone - HTML Admin Template"
                      className="rounded-full"
                      src="../dist/images/preview-14.jpg"
                    />
                  </div>
                  <div className="ml-3">Sony A7 III</div>
                  <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">
                    Photography
                  </div>
                </a>
                <a href="" className="flex items-center mt-2">
                  <div className="w-8 h-8 image-fit">
                    <img
                      alt="Midone - HTML Admin Template"
                      className="rounded-full"
                      src="../dist/images/preview-3.jpg"
                    />
                  </div>
                  <div className="ml-3">Dell XPS 13</div>
                  <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">
                    PC &amp; Laptop
                  </div>
                </a>
                <a href="" className="flex items-center mt-2">
                  <div className="w-8 h-8 image-fit">
                    <img
                      alt="Midone - HTML Admin Template"
                      className="rounded-full"
                      src="../dist/images/preview-11.jpg"
                    />
                  </div>
                  <div className="ml-3">Nike Tanjun</div>
                  <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">
                    Sport &amp; Outdoor
                  </div>
                </a>
              </div>
            </div>
          </div> */}

          <div className="intro-x dropdown mr-4 w-8 h-8">
            <div
              className="dropdown-toggle w-8 h-8 rounded-full overflow-hidden shadow-lg image-fit zoom-in scale-110"
              role="button"
              aria-expanded="false"
              data-tw-toggle="dropdown"
            >
              <img
                alt="Midone - HTML Admin Template"
                src={user.profilePhotoUrl}
              />
            </div>
            <div className="dropdown-menu w-56">
              <ul className="dropdown-content bg-primary/80 before:block before:absolute before:bg-black before:inset-0 before:rounded-md before:z-[-1] text-white">
                <li className="p-2">
                  <div className="font-medium">{user.name}</div>
                  <div className="text-xs text-white/60 mt-0.5 dark:text-slate-500">
                    {user.email}
                  </div>
                </li>
                <li>
                  <hr className="dropdown-divider border-white/[0.08]" />
                </li>
                <li>
                  <a href="" className="dropdown-item hover:bg-white/5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                      style={{ marginRight: "8px" }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                      />
                    </svg>
                    Profile
                  </a>
                </li>
                <li>
                  <a href="/sign-up" className="dropdown-item hover:bg-white/5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                      style={{ marginRight: "8px" }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                      />
                    </svg>
                    Add Account
                  </a>
                </li>
                <li>
                  <a href="" className="dropdown-item hover:bg-white/5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                      style={{ marginRight: "8px" }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                      />
                    </svg>
                    Reset Password
                  </a>
                </li>
                <li>
                  <a href="" className="dropdown-item hover:bg-white/5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                      style={{ marginRight: "8px" }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                      />
                    </svg>
                    Help
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider border-white/[0.08]" />
                </li>
                <li>
                  <a href="/sign-in" className="dropdown-item hover:bg-white/5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                      style={{ marginRight: "8px" }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                      />
                    </svg>
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="intro-x dropdown sm:mr-6">
            <div
              className="dropdown-toggle notification notification--bullet cursor-pointer"
              role="button"
              aria-expanded="false"
              data-tw-toggle="dropdown"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                />
              </svg>
            </div>
            <div className="notification-content pt-2 dropdown-menu">
              <div className="notification-content__box dropdown-content">
                <div className="notification-content__title">Notifications</div>
                <div className="cursor-pointer relative flex items-center ">
                  <div className="w-12 h-12 flex-none image-fit mr-1">
                    <img
                      alt="Midone - HTML Admin Template"
                      className="rounded-full"
                      src="../dist/images/profile-15.jpg"
                    />
                    <div className="w-3 h-3 bg-success absolute right-0 bottom-0 rounded-full border-2 border-white"></div>
                  </div>
                  <div className="ml-2 overflow-hidden">
                    <div className="flex items-center">
                      <a href="#" className="font-medium truncate mr-5">
                        Christian Bale
                      </a>
                      <div className="text-xs text-slate-400 ml-auto whitespace-nowrap">
                        06:05 AM
                      </div>
                    </div>
                    <div className="w-full truncate text-slate-500 mt-0.5">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem
                    </div>
                  </div>
                </div>
                <div className="cursor-pointer relative flex items-center mt-5">
                  <div className="w-12 h-12 flex-none image-fit mr-1">
                    <img
                      alt="Midone - HTML Admin Template"
                      className="rounded-full"
                      src="../dist/images/profile-7.jpg"
                    />
                    <div className="w-3 h-3 bg-success absolute right-0 bottom-0 rounded-full border-2 border-white"></div>
                  </div>
                  <div className="ml-2 overflow-hidden">
                    <div className="flex items-center">
                      <a href="#" className="font-medium truncate mr-5">
                        Johnny Depp
                      </a>
                      <div className="text-xs text-slate-400 ml-auto whitespace-nowrap">
                        06:05 AM
                      </div>
                    </div>
                    <div className="w-full truncate text-slate-500 mt-0.5">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the
                      industry&#039;s standard dummy text ever since the 1500
                    </div>
                  </div>
                </div>
                <div className="cursor-pointer relative flex items-center mt-5">
                  <div className="w-12 h-12 flex-none image-fit mr-1">
                    <img
                      alt="Midone - HTML Admin Template"
                      className="rounded-full"
                      src="../dist/images/profile-12.jpg"
                    />
                    <div className="w-3 h-3 bg-success absolute right-0 bottom-0 rounded-full border-2 border-white"></div>
                  </div>
                  <div className="ml-2 overflow-hidden">
                    <div className="flex items-center">
                      <a href="#" className="font-medium truncate mr-5">
                        Robert De Niro
                      </a>
                      <div className="text-xs text-slate-400 ml-auto whitespace-nowrap">
                        05:09 AM
                      </div>
                    </div>
                    <div className="w-full truncate text-slate-500 mt-0.5">
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 20
                    </div>
                  </div>
                </div>
                <div className="cursor-pointer relative flex items-center mt-5">
                  <div className="w-12 h-12 flex-none image-fit mr-1">
                    <img
                      alt="Midone - HTML Admin Template"
                      className="rounded-full"
                      src="../dist/images/profile-1.jpg"
                    />
                    <div className="w-3 h-3 bg-success absolute right-0 bottom-0 rounded-full border-2 border-white"></div>
                  </div>
                  <div className="ml-2 overflow-hidden">
                    <div className="flex items-center">
                      <a href="#" className="font-medium truncate mr-5">
                        Morgan Freeman
                      </a>
                      <div className="text-xs text-slate-400 ml-auto whitespace-nowrap">
                        01:10 PM
                      </div>
                    </div>
                    <div className="w-full truncate text-slate-500 mt-0.5">
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 20
                    </div>
                  </div>
                </div>
                <div className="cursor-pointer relative flex items-center mt-5">
                  <div className="w-12 h-12 flex-none image-fit mr-1">
                    <img
                      alt="Midone - HTML Admin Template"
                      className="rounded-full"
                      src="../dist/images/profile-11.jpg"
                    />
                    <div className="w-3 h-3 bg-success absolute right-0 bottom-0 rounded-full border-2 border-white"></div>
                  </div>
                  <div className="ml-2 overflow-hidden">
                    <div className="flex items-center">
                      <a href="#" className="font-medium truncate mr-5">
                        Russell Crowe
                      </a>
                      <div className="text-xs text-slate-400 ml-auto whitespace-nowrap">
                        06:05 AM
                      </div>
                    </div>
                    <div className="w-full truncate text-slate-500 mt-0.5">
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 20
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
