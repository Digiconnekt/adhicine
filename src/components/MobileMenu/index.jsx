import { Transition } from "react-transition-group";
import { useState, useEffect, createRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toRaw } from "../../utils/helper";
import { selectSideMenu } from "../../stores/sideMenuSlice";
import { useAppSelector } from "../../stores/hooks";
import { nestedMenu } from "../../layouts/SideMenu/side-menu";
import { linkTo, enter, leave } from "./mobile-menu";
import Lucide from "../../base-components/Lucide";
import logoUrl from "../../assets/images/logo.svg";
import clsx from "clsx";
import SimpleBar from "simplebar";
import { useSelector } from "react-redux";
import { Popover, Menu } from "../../base-components/Headless";
import useLogout from "../../apis/logout";

function Main() {
  const location = useLocation();
  const user = useSelector((state) => state?.authUser?.user);
  const [formattedMenu, setFormattedMenu] = useState([]);
  const sideMenuStore = useAppSelector(selectSideMenu);
  const mobileMenu = () => nestedMenu(toRaw(sideMenuStore), location);
  const [activeMobileMenu, setActiveMobileMenu] = useState(false);
  const scrollableRef = createRef();
  const { isLoading, logoutReq } = useLogout();

  useEffect(() => {
    if (scrollableRef.current) {
      new SimpleBar(scrollableRef.current);
    }
    setFormattedMenu(mobileMenu());
  }, [sideMenuStore, location.pathname]);

  return (
    <>
      {/* BEGIN: Mobile Menu */}
      <div
        className={clsx([
          "w-full fixed bg-primary/90 z-[60] border-b border-white/[0.08] -mt-5 -mx-3 sm:-mx-8 mb-6 dark:bg-darkmode-800/90 md:hidden",
          "before:content-[''] before:w-full before:h-screen before:z-10 before:fixed before:inset-x-0 before:bg-black/90 before:transition-opacity before:duration-200 before:ease-in-out",
          !activeMobileMenu && "before:invisible before:opacity-0",
          activeMobileMenu && "before:visible before:opacity-100",
        ])}
      >
        <div className="h-[70px] px-3 sm:px-8 flex items-center">
          <Link to="/" className="flex mr-auto">
            <img
              alt="Adhicine"
              src={"../../../images/logo.png"}
              className="w-10"
            />
          </Link>
          <div className="flex items-center gap-5">
            {/* BEGIN: Notifications */}
            <Popover className="ml-auto intro-x">
              <Popover.Button
                className="
              relative text-white outline-none block
              before:content-[''] before:w-[8px] before:h-[8px] before:rounded-full before:absolute before:top-[-2px] before:right-0 before:bg-danger
            "
              >
                <Lucide icon="Bell" className="w-6 h-6 dark:text-slate-500" />
              </Popover.Button>
              {/* <Popover.Panel className="w-[280px] sm:w-[350px] p-5 mt-2">
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
            </Popover.Panel> */}
            </Popover>
            {/* END: Notifications */}

            {/* BEGIN: Account Menu */}
            <Menu>
              <Menu.Button className="block w-10 h-10 overflow-hidden rounded-full shadow-lg image-fit zoom-in intro-x">
                <img alt="User Image" src={user?.profileImg} />
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

            <a href="#" onClick={(e) => e.preventDefault()}>
              <Lucide
                icon="BarChart2"
                className="w-8 h-8 text-white transform -rotate-90"
                onClick={() => {
                  setActiveMobileMenu(!activeMobileMenu);
                }}
              />
            </a>
          </div>
        </div>
        <div
          ref={scrollableRef}
          className={clsx([
            "h-screen z-20 top-0 left-0 w-[270px] -ml-[100%] bg-primary transition-all duration-300 ease-in-out dark:bg-darkmode-800",
            "[&[data-simplebar]]:fixed [&_.simplebar-scrollbar]:before:bg-black/50",
            activeMobileMenu && "ml-0",
          ])}
        >
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className={clsx([
              "fixed top-0 right-0 mt-4 mr-4 transition-opacity duration-200 ease-in-out",
              !activeMobileMenu && "invisible opacity-0",
              activeMobileMenu && "visible opacity-100",
            ])}
          >
            <Lucide
              icon="XCircle"
              className="w-8 h-8 text-white transform -rotate-90"
              onClick={() => {
                setActiveMobileMenu(!activeMobileMenu);
              }}
            />
          </a>
          <ul className="py-2">
            {/* BEGIN: First Child */}
            {formattedMenu
              .filter((menu) => menu.show[user.role])
              .map((menu, menuKey) =>
                menu == "divider" ? (
                  <Divider as="li" className="my-6" key={menuKey}></Divider>
                ) : (
                  <li key={menuKey}>
                    <MenuComp
                      menu={menu}
                      formattedMenuState={[formattedMenu, setFormattedMenu]}
                      level="first"
                      setActiveMobileMenu={setActiveMobileMenu}
                    ></MenuComp>
                    {/* BEGIN: Second Child */}
                    {menu.subMenu && (
                      <Transition
                        in={menu.activeDropdown}
                        onEnter={enter}
                        onExit={leave}
                        timeout={300}
                      >
                        <ul
                          className={clsx([
                            "bg-black/10 rounded-lg mx-4 my-1 dark:bg-darkmode-700",
                            !menu.activeDropdown && "hidden",
                            menu.activeDropdown && "block",
                          ])}
                        >
                          {menu.subMenu.map((subMenu, subMenuKey) => (
                            <li
                              className="max-w-[1280px] w-full mx-auto"
                              key={subMenuKey}
                            >
                              <Menu
                                menu={subMenu}
                                formattedMenuState={[
                                  formattedMenu,
                                  setFormattedMenu,
                                ]}
                                level="second"
                                setActiveMobileMenu={setActiveMobileMenu}
                              ></Menu>
                              {/* BEGIN: Third Child */}
                              {subMenu.subMenu && (
                                <Transition
                                  in={subMenu.activeDropdown}
                                  onEnter={enter}
                                  onExit={leave}
                                  timeout={300}
                                >
                                  <ul
                                    className={clsx([
                                      "bg-black/10 rounded-lg my-1 dark:bg-darkmode-600",
                                      !subMenu.activeDropdown && "hidden",
                                      subMenu.activeDropdown && "block",
                                    ])}
                                  >
                                    {subMenu.subMenu.map(
                                      (lastSubMenu, lastSubMenuKey) => (
                                        <li
                                          className="max-w-[1280px] w-full mx-auto"
                                          key={lastSubMenuKey}
                                        >
                                          <Menu
                                            menu={lastSubMenu}
                                            formattedMenuState={[
                                              formattedMenu,
                                              setFormattedMenu,
                                            ]}
                                            level="third"
                                            setActiveMobileMenu={
                                              setActiveMobileMenu
                                            }
                                          ></Menu>
                                        </li>
                                      )
                                    )}
                                  </ul>
                                </Transition>
                              )}
                              {/* END: Third Child */}
                            </li>
                          ))}
                        </ul>
                      </Transition>
                    )}
                    {/* END: Second Child */}
                  </li>
                )
              )}
            {/* END: First Child */}
          </ul>
        </div>
      </div>
      {/* END: Mobile Menu */}
    </>
  );
}

function MenuComp(props) {
  const navigate = useNavigate();
  const [formattedMenu, setFormattedMenu] = props.formattedMenuState;

  return (
    <a
      href={props.menu.subMenu ? "#" : props.menu.pathname}
      className={clsx([
        "h-[50px] flex items-center text-white",
        props.level == "first" && "px-6",
        props.level != "first" && "px-4",
      ])}
      onClick={(event) => {
        event.preventDefault();
        linkTo(props.menu, navigate, props.setActiveMobileMenu);
        setFormattedMenu(toRaw(formattedMenu));
      }}
    >
      <div>
        <Lucide icon={props.menu.icon} />
      </div>
      <div className="flex items-center w-full ml-3">
        {props.menu.title}
        {props.menu.subMenu && (
          <div
            className={clsx([
              "transition ease-in duration-100 ml-auto",
              props.menu.activeDropdown && "transform rotate-180",
            ])}
          >
            <Lucide icon="ChevronDown" className="w-5 h-5" />
          </div>
        )}
      </div>
    </a>
  );
}

function Divider(props) {
  const { className, ...computedProps } = props;
  const Component = props.as || "div";

  return (
    <Component
      {...computedProps}
      className={clsx([
        props.className,
        "w-full h-px bg-white/[0.08] relative",
      ])}
    ></Component>
  );
}

export default Main;
