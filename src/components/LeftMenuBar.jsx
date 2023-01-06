import React from "react";

const LeftMenuBar = () => {
  return (
    <>
      <nav className="side-nav">
        <ul>
          <li>
            <a href="#" className="side-menu side-menu--active">
              <div className="side-menu__icon">
                <i data-lucide="home"></i>
              </div>
              <div className="side-menu__title">
                Dashboard
                <div className="side-menu__sub-icon transform rotate-180">
                  <i data-lucide="chevron-down"></i>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a href="#" className="side-menu">
              <div className="side-menu__icon">
                <i data-lucide="box"></i>
              </div>
              <div className="side-menu__title">
                Hospitals
                <div className="side-menu__sub-icon ">
                  <i data-lucide="chevron-down"></i>
                </div>
              </div>
            </a>
            <ul className="">
              <li>
                <a
                  href="side-menu-light-dashboard-overview-1.html"
                  className="side-menu"
                >
                  <div className="side-menu__icon">
                    <i data-lucide="activity"></i>
                  </div>
                  <div className="side-menu__title"> Side Menu </div>
                </a>
              </li>
              <li>
                <a
                  href="simple-menu-light-dashboard-overview-1.html"
                  className="side-menu"
                >
                  <div className="side-menu__icon">
                    <i data-lucide="activity"></i>
                  </div>
                  <div className="side-menu__title"> Simple Menu </div>
                </a>
              </li>
              <li>
                <a
                  href="top-menu-light-dashboard-overview-1.html"
                  className="side-menu"
                >
                  <div className="side-menu__icon">
                    <i data-lucide="activity"></i>
                  </div>
                  <div className="side-menu__title"> Top Menu </div>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#" className="side-menu">
              <div className="side-menu__icon">
                <i data-lucide="shopping-bag"></i>
              </div>
              <div className="side-menu__title">
                Paramount Hospital
                <div className="side-menu__sub-icon ">
                  <i data-lucide="chevron-down"></i>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a href="side-menu-light-inbox.html" className="side-menu">
              <div className="side-menu__icon">
                <i data-lucide="inbox"></i>
              </div>
              <div className="side-menu__title">Medical</div>
            </a>
          </li>
          <li>
            <a href="side-menu-light-file-manager.html" className="side-menu">
              <div className="side-menu__icon">
                <i data-lucide="hard-drive"></i>
              </div>
              <div className="side-menu__title">Hill Point Clinic</div>
            </a>
          </li>
          <li>
            <a href="side-menu-light-point-of-sale.html" className="side-menu">
              <div className="side-menu__icon">
                <i data-lucide="credit-card"></i>
              </div>
              <div className="side-menu__title">Cure Hospital</div>
            </a>
          </li>

          <li class="side-nav__devider my-6"></li>
          <li class="side-nav__devider my-6"></li>
          <li class="side-nav__devider my-6"></li>
          <li class="side-nav__devider my-6"></li>
          <li class="side-nav__devider my-6"></li>
          <li class="side-nav__devider my-6"></li>

          <li>
            <a href="side-menu-light-chat.html" className="side-menu">
              <div className="side-menu__icon">
                <i data-lucide="message-square"></i>
              </div>
              <div className="side-menu__title">Settings</div>
            </a>
          </li>
          <li>
            <a href="side-menu-light-post.html" className="side-menu">
              <div className="side-menu__icon">
                <i data-lucide="file-text"></i>
              </div>
              <div className="side-menu__title">Log Out</div>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default LeftMenuBar;
