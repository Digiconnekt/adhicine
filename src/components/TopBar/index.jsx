import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Lucide from "../../base-components/Lucide";
import logoUrl from "../../assets/images/logo.svg";
import Breadcrumb from "../../base-components/Breadcrumb";
import { Menu, Popover } from "../../base-components/Headless";
import _ from "lodash";
import clsx from "clsx";
import { useSelector } from "react-redux";
import useLogout from "../../apis/logout";
import LoadingIcon from "../../base-components/LoadingIcon";

function Main(props) {
  const location = useLocation();
  const navigate = useNavigate();
  const { isLoading, logoutReq } = useLogout();
  const user = useSelector((state) => state.auth.user);

  const [breadcrumbs, setBreadcrumbs] = useState([]);

  useEffect(() => {
    const pathname = location.pathname;
    const pathParts = pathname.split("/").filter((part) => part !== "");

    const homeBreadcrumb = {
      title: "Dashboard",
      path: "/",
      active: pathname === "/",
    };
    const breadcrumbs = [
      homeBreadcrumb,
      ...pathParts.map((part, index) => ({
        title: part,
        path: `/${pathParts.slice(0, index + 1).join("/")}`,
        active: `/${pathParts.slice(0, index + 1).join("/")}` === pathname,
      })),
    ];

    setBreadcrumbs(breadcrumbs);
  }, [location]);

  return (
    <>
      <div
        className={clsx([
          "h-[70px] md:h-[65px] z-[51] border-b border-white/[0.08] mt-12 md:mt-0 -mx-3 sm:-mx-8 md:-mx-0 px-3 md:border-b-0 relative md:fixed md:inset-x-0 md:top-0 sm:px-8 md:px-10 md:pt-10 md:bg-gradient-to-b md:from-slate-100 md:to-transparent dark:md:from-darkmode-700",
          props.layout == "top-menu" && "dark:md:from-darkmode-800",
          "before:content-[''] before:absolute before:h-[65px] before:inset-0 before:top-0 before:mx-7 before:bg-primary/30 before:mt-3 before:rounded-xl before:hidden before:md:block before:dark:bg-darkmode-600/30",
          "after:content-[''] after:absolute after:inset-0 after:h-[65px] after:mx-3 after:bg-primary after:mt-5 after:rounded-xl after:shadow-md after:hidden after:md:block after:dark:bg-darkmode-600",
        ])}
      >
        <div className="flex items-center h-full">
          {/* BEGIN: Logo */}
          <Link
            to="/"
            className={clsx([
              "-intro-x hidden md:flex",
              props.layout == "side-menu" && "xl:w-[180px]",
              props.layout == "simple-menu" && "xl:w-auto",
              props.layout == "top-menu" && "w-auto",
            ])}
          >
            <img alt="Adhicine" className="w-6" src={logoUrl} />
            <span
              className={clsx([
                "ml-3 text-lg text-white",
                props.layout == "side-menu" && "hidden xl:block",
                props.layout == "simple-menu" && "hidden",
              ])}
            >
              Adhicine
            </span>
          </Link>
          {/* END: Logo */}

          {/* BEGIN: Breadcrumb */}
          <Breadcrumb
            light
            className={clsx([
              "h-[45px] md:ml-10 md:border-l border-white/[0.08] dark:border-white/[0.08] mr-auto -intro-x",
              props.layout != "top-menu" && "md:pl-6",
              props.layout == "top-menu" && "md:pl-10",
            ])}
          >
            {breadcrumbs?.map((breadcrumb, i) => (
              <Breadcrumb.Link
                to={breadcrumb?.path}
                key={i}
                className={`${
                  breadcrumb?.active
                    ? "text-white hover:text-gray-200"
                    : "text-gray-200 hover:text-gray-200"
                }`}
              >
                {i === 0 && (
                  <Lucide
                    icon="Home"
                    className="w-4 h-4 me-1 inline-block mb-1"
                  />
                )}
                {breadcrumb?.title}
              </Breadcrumb.Link>
            ))}
          </Breadcrumb>
          {/* END: Breadcrumb */}

          {/* BEGIN: Notifications */}
          {/* <Popover className="mr-4 intro-x sm:mr-6">
            <Popover.Button
              className="
              relative text-white/70 outline-none block
              before:content-[''] before:w-[8px] before:h-[8px] before:rounded-full before:absolute before:top-[-2px] before:right-0 before:bg-danger
            "
            >
              <Lucide icon="Bell" className="w-5 h-5 dark:text-slate-500" />
            </Popover.Button>
            <Popover.Panel className="w-[280px] sm:w-[350px] p-5 mt-2">
              <div className="mb-5 font-medium">Notifications</div>
              {_.take(fakerData, 5).map((faker, fakerKey) => (
                <div
                  key={fakerKey}
                  className={clsx([
                    "cursor-pointer relative flex items-center",
                    { "mt-5": fakerKey },
                  ])}
                >
                  <div className="relative flex-none w-12 h-12 mr-1 image-fit">
                    <img
                      alt="Midone Tailwind HTML Admin Template"
                      className="rounded-full"
                      src={faker.photos[0]}
                    />
                    <div className="absolute bottom-0 right-0 w-3 h-3 border-2 border-white rounded-full bg-success dark:border-darkmode-600"></div>
                  </div>
                  <div className="ml-2 overflow-hidden">
                    <div className="flex items-center">
                      <a href="" className="mr-5 font-medium truncate">
                        {faker.users[0].name}
                      </a>
                      <div className="ml-auto text-xs text-slate-400 whitespace-nowrap">
                        {faker.times[0]}
                      </div>
                    </div>
                    <div className="w-full truncate text-slate-500 mt-0.5">
                      {faker.news[0].shortContent}
                    </div>
                  </div>
                </div>
              ))}
            </Popover.Panel>
          </Popover> */}
          {/* END: Notifications */}

          {/* BEGIN: Account Menu */}
          <Menu>
            <Menu.Button className="block w-8 h-8 overflow-hidden rounded-full shadow-lg image-fit zoom-in intro-x">
              <img
                alt="Midone Tailwind HTML Admin Template"
                src={user?.profileImg}
              />
            </Menu.Button>
            <Menu.Items className="w-56 mt-px relative bg-primary/80 before:block before:absolute before:bg-black before:inset-0 before:rounded-md before:z-[-1] text-white">
              <Menu.Header className="font-normal">
                <div className="font-medium">{user?.name}</div>
                <div className="text-xs text-white/70 mt-0.5 dark:text-slate-500">
                  {user?.role}
                </div>
              </Menu.Header>
              <Menu.Divider className="bg-white/[0.08]" />
              <Menu.Item
                className="hover:bg-white/5"
                onClick={() => navigate("/settings")}
              >
                <Lucide icon="Settings" className="w-4 h-4 mr-2" /> Settings
              </Menu.Item>
              <Menu.Item className="hover:bg-white/5" onClick={logoutReq}>
                {isLoading ? (
                  <LoadingIcon
                    icon="oval"
                    color="white"
                    className="w-4 h-4 mr-2"
                  />
                ) : (
                  <Lucide icon="ToggleRight" className="w-4 h-4 mr-2" />
                )}
                Logout
              </Menu.Item>
            </Menu.Items>
          </Menu>
          {/* END: Account Menu */}
        </div>
      </div>
    </>
  );
}

export default Main;
