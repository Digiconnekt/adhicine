import React from "react";

const MobileMenu = () => {
  return (
    <>
      <div className="mobile-menu md:hidden">
        <div className="mobile-menu-bar">
          <a href="" className="flex mr-auto">
            <img
              alt="Midone - HTML Admin Template"
              className="w-6"
              src="dist/images/logo.svg"
            />
          </a>
          <a href="#" className="mobile-menu-toggler">
            {" "}
            <i
              data-lucide="bar-chart-2"
              className="w-8 h-8 text-white transform -rotate-90"
            ></i>{" "}
          </a>
        </div>
        <div className="scrollable">
          <a href="#" className="mobile-menu-toggler">
            {" "}
            <i
              data-lucide="x-circle"
              className="w-8 h-8 text-white transform -rotate-90"
            ></i>{" "}
          </a>
          <ul className="scrollable__content py-2">
            <li>
              <a href="#.html" className="menu menu--active">
                <div className="menu__icon">
                  {" "}
                  <i data-lucide="home"></i>{" "}
                </div>
                <div className="menu__title">
                  {" "}
                  Dashboard{" "}
                  <i
                    data-lucide="chevron-down"
                    className="menu__sub-icon transform rotate-180"
                  ></i>{" "}
                </div>
              </a>
              <ul className="menu__sub-open">
                <li>
                  <a
                    href="side-menu-light-dashboard-overview-1.html"
                    className="menu"
                  >
                    <div className="menu__icon">
                      {" "}
                      <i data-lucide="activity"></i>{" "}
                    </div>
                    <div className="menu__title"> Overview 1 </div>
                  </a>
                </li>
                <li>
                  <a
                    href="side-menu-light-dashboard-overview-2.html"
                    className="menu"
                  >
                    <div className="menu__icon">
                      {" "}
                      <i data-lucide="activity"></i>{" "}
                    </div>
                    <div className="menu__title"> Overview 2 </div>
                  </a>
                </li>
                <li>
                  <a
                    href="side-menu-light-dashboard-overview-3.html"
                    className="menu"
                  >
                    <div className="menu__icon">
                      {" "}
                      <i data-lucide="activity"></i>{" "}
                    </div>
                    <div className="menu__title"> Overview 3 </div>
                  </a>
                </li>
                <li>
                  <a href="index.html" className="menu menu--active">
                    <div className="menu__icon">
                      {" "}
                      <i data-lucide="activity"></i>{" "}
                    </div>
                    <div className="menu__title"> Overview 4 </div>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" className="menu">
                <div className="menu__icon">
                  {" "}
                  <i data-lucide="box"></i>{" "}
                </div>
                <div className="menu__title">
                  {" "}
                  Menu Layout{" "}
                  <i
                    data-lucide="chevron-down"
                    className="menu__sub-icon "
                  ></i>{" "}
                </div>
              </a>
              <ul className="">
                <li>
                  <a
                    href="side-menu-light-dashboard-overview-1.html"
                    className="menu"
                  >
                    <div className="menu__icon">
                      {" "}
                      <i data-lucide="activity"></i>{" "}
                    </div>
                    <div className="menu__title"> Side Menu </div>
                  </a>
                </li>
                <li>
                  <a
                    href="simple-menu-light-dashboard-overview-1.html"
                    className="menu"
                  >
                    <div className="menu__icon">
                      {" "}
                      <i data-lucide="activity"></i>{" "}
                    </div>
                    <div className="menu__title"> Simple Menu </div>
                  </a>
                </li>
                <li>
                  <a
                    href="top-menu-light-dashboard-overview-1.html"
                    className="menu"
                  >
                    <div className="menu__icon">
                      {" "}
                      <i data-lucide="activity"></i>{" "}
                    </div>
                    <div className="menu__title"> Top Menu </div>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" className="menu">
                <div className="menu__icon">
                  {" "}
                  <i data-lucide="shopping-bag"></i>{" "}
                </div>
                <div className="menu__title">
                  {" "}
                  E-Commerce{" "}
                  <i
                    data-lucide="chevron-down"
                    className="menu__sub-icon "
                  ></i>{" "}
                </div>
              </a>
              <ul className="">
                <li>
                  <a href="side-menu-light-categories.html" className="menu">
                    <div className="menu__icon">
                      {" "}
                      <i data-lucide="activity"></i>{" "}
                    </div>
                    <div className="menu__title"> Categories </div>
                  </a>
                </li>
                <li>
                  <a href="side-menu-light-add-product.html" className="menu">
                    <div className="menu__icon">
                      {" "}
                      <i data-lucide="activity"></i>{" "}
                    </div>
                    <div className="menu__title"> Add Product </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="menu">
                    <div className="menu__icon">
                      {" "}
                      <i data-lucide="activity"></i>{" "}
                    </div>
                    <div className="menu__title">
                      {" "}
                      Products{" "}
                      <i
                        data-lucide="chevron-down"
                        className="menu__sub-icon "
                      ></i>{" "}
                    </div>
                  </a>
                  <ul className="">
                    <li>
                      <a
                        href="side-menu-light-product-list.html"
                        className="menu"
                      >
                        <div className="menu__icon">
                          {" "}
                          <i data-lucide="zap"></i>{" "}
                        </div>
                        <div className="menu__title">Product List</div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="side-menu-light-product-grid.html"
                        className="menu"
                      >
                        <div className="menu__icon">
                          {" "}
                          <i data-lucide="zap"></i>{" "}
                        </div>
                        <div className="menu__title">Product Grid</div>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#" className="menu">
                    <div className="menu__icon">
                      {" "}
                      <i data-lucide="activity"></i>{" "}
                    </div>
                    <div className="menu__title">
                      {" "}
                      Transactions{" "}
                      <i
                        data-lucide="chevron-down"
                        className="menu__sub-icon "
                      ></i>{" "}
                    </div>
                  </a>
                  <ul className="">
                    <li>
                      <a
                        href="side-menu-light-transaction-list.html"
                        className="menu"
                      >
                        <div className="menu__icon">
                          {" "}
                          <i data-lucide="zap"></i>{" "}
                        </div>
                        <div className="menu__title">Transaction List</div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="side-menu-light-transaction-detail.html"
                        className="menu"
                      >
                        <div className="menu__icon">
                          {" "}
                          <i data-lucide="zap"></i>{" "}
                        </div>
                        <div className="menu__title">Transaction Detail</div>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#" className="menu">
                    <div className="menu__icon">
                      {" "}
                      <i data-lucide="activity"></i>{" "}
                    </div>
                    <div className="menu__title">
                      {" "}
                      Sellers{" "}
                      <i
                        data-lucide="chevron-down"
                        className="menu__sub-icon "
                      ></i>{" "}
                    </div>
                  </a>
                  <ul className="">
                    <li>
                      <a
                        href="side-menu-light-seller-list.html"
                        className="menu"
                      >
                        <div className="menu__icon">
                          {" "}
                          <i data-lucide="zap"></i>{" "}
                        </div>
                        <div className="menu__title">Seller List</div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="side-menu-light-seller-detail.html"
                        className="menu"
                      >
                        <div className="menu__icon">
                          {" "}
                          <i data-lucide="zap"></i>{" "}
                        </div>
                        <div className="menu__title">Seller Detail</div>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="side-menu-light-reviews.html" className="menu">
                    <div className="menu__icon">
                      {" "}
                      <i data-lucide="activity"></i>{" "}
                    </div>
                    <div className="menu__title"> Reviews </div>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="side-menu-light-inbox.html" className="menu">
                <div className="menu__icon">
                  {" "}
                  <i data-lucide="inbox"></i>{" "}
                </div>
                <div className="menu__title"> Inbox </div>
              </a>
            </li>
            <li>
              <a href="side-menu-light-file-manager.html" className="menu">
                <div className="menu__icon">
                  {" "}
                  <i data-lucide="hard-drive"></i>{" "}
                </div>
                <div className="menu__title"> File Manager </div>
              </a>
            </li>
            <li>
              <a href="side-menu-light-point-of-sale.html" className="menu">
                <div className="menu__icon">
                  {" "}
                  <i data-lucide="credit-card"></i>{" "}
                </div>
                <div className="menu__title"> Point of Sale </div>
              </a>
            </li>
            <li>
              <a href="side-menu-light-chat.html" className="menu">
                <div className="menu__icon">
                  {" "}
                  <i data-lucide="message-square"></i>{" "}
                </div>
                <div className="menu__title"> Chat </div>
              </a>
            </li>
            <li>
              <a href="side-menu-light-post.html" className="menu">
                <div className="menu__icon">
                  {" "}
                  <i data-lucide="file-text"></i>{" "}
                </div>
                <div className="menu__title"> Post </div>
              </a>
            </li>
            <li>
              <a href="side-menu-light-calendar.html" className="menu">
                <div className="menu__icon">
                  {" "}
                  <i data-lucide="calendar"></i>{" "}
                </div>
                <div className="menu__title"> Calendar </div>
              </a>
            </li>
            <li className="menu__devider my-6"></li>
            <li>
              <a href="#" className="menu">
                <div className="menu__icon">
                  {" "}
                  <i data-lucide="edit"></i>{" "}
                </div>
                <div className="menu__title">
                  {" "}
                  Crud{" "}
                  <i
                    data-lucide="chevron-down"
                    className="menu__sub-icon "
                  ></i>{" "}
                </div>
              </a>
              <ul className="">
                <li>
                  <a
                    href="side-menu-light-crud-data-list.html"
                    className="menu"
                  >
                    <div className="menu__icon">
                      {" "}
                      <i data-lucide="activity"></i>{" "}
                    </div>
                    <div className="menu__title"> Data List </div>
                  </a>
                </li>
                <li>
                  <a href="side-menu-light-crud-form.html" className="menu">
                    <div className="menu__icon">
                      {" "}
                      <i data-lucide="activity"></i>{" "}
                    </div>
                    <div className="menu__title"> Form </div>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" className="menu">
                <div className="menu__icon">
                  {" "}
                  <i data-lucide="users"></i>{" "}
                </div>
                <div className="menu__title">
                  {" "}
                  Users{" "}
                  <i
                    data-lucide="chevron-down"
                    className="menu__sub-icon "
                  ></i>{" "}
                </div>
              </a>
              <ul className="">
                <li>
                  <a
                    href="side-menu-light-users-layout-1.html"
                    className="menu"
                  >
                    <div className="menu__icon">
                      {" "}
                      <i data-lucide="activity"></i>{" "}
                    </div>
                    <div className="menu__title"> Layout 1 </div>
                  </a>
                </li>
                <li>
                  <a
                    href="side-menu-light-users-layout-2.html"
                    className="menu"
                  >
                    <div className="menu__icon">
                      {" "}
                      <i data-lucide="activity"></i>{" "}
                    </div>
                    <div className="menu__title"> Layout 2 </div>
                  </a>
                </li>
                <li>
                  <a
                    href="side-menu-light-users-layout-3.html"
                    className="menu"
                  >
                    <div className="menu__icon">
                      {" "}
                      <i data-lucide="activity"></i>{" "}
                    </div>
                    <div className="menu__title"> Layout 3 </div>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" className="menu">
                <div className="menu__icon">
                  {" "}
                  <i data-lucide="trello"></i>{" "}
                </div>
                <div className="menu__title">
                  {" "}
                  Profile{" "}
                  <i
                    data-lucide="chevron-down"
                    className="menu__sub-icon "
                  ></i>{" "}
                </div>
              </a>
              <ul className="">
                <li>
                  <a
                    href="side-menu-light-profile-overview-1.html"
                    className="menu"
                  >
                    <div className="menu__icon">
                      {" "}
                      <i data-lucide="activity"></i>{" "}
                    </div>
                    <div className="menu__title"> Overview 1 </div>
                  </a>
                </li>
                <li>
                  <a
                    href="side-menu-light-profile-overview-2.html"
                    className="menu"
                  >
                    <div className="menu__icon">
                      {" "}
                      <i data-lucide="activity"></i>{" "}
                    </div>
                    <div className="menu__title"> Overview 2 </div>
                  </a>
                </li>
                <li>
                  <a
                    href="side-menu-light-profile-overview-3.html"
                    className="menu"
                  >
                    <div className="menu__icon">
                      {" "}
                      <i data-lucide="activity"></i>{" "}
                    </div>
                    <div className="menu__title"> Overview 3 </div>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" className="menu">
                <div className="menu__icon">
                  {" "}
                  <i data-lucide="layout"></i>{" "}
                </div>
                <div className="menu__title">
                  {" "}
                  Pages{" "}
                  <i
                    data-lucide="chevron-down"
                    className="menu__sub-icon "
                  ></i>{" "}
                </div>
              </a>
              <ul className="">
                <li>
                  <a href="#" className="menu">
                    <div className="menu__icon">
                      {" "}
                      <i data-lucide="activity"></i>{" "}
                    </div>
                    <div className="menu__title">
                      {" "}
                      Wizards{" "}
                      <i
                        data-lucide="chevron-down"
                        className="menu__sub-icon "
                      ></i>{" "}
                    </div>
                  </a>
                  <ul className="">
                    <li>
                      <a
                        href="side-menu-light-wizard-layout-1.html"
                        className="menu"
                      >
                        <div className="menu__icon">
                          {" "}
                          <i data-lucide="zap"></i>{" "}
                        </div>
                        <div className="menu__title">Layout 1</div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="side-menu-light-wizard-layout-2.html"
                        className="menu"
                      >
                        <div className="menu__icon">
                          {" "}
                          <i data-lucide="zap"></i>{" "}
                        </div>
                        <div className="menu__title">Layout 2</div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="side-menu-light-wizard-layout-3.html"
                        className="menu"
                      >
                        <div className="menu__icon">
                          {" "}
                          <i data-lucide="zap"></i>{" "}
                        </div>
                        <div className="menu__title">Layout 3</div>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#" className="menu">
                    <div className="menu__icon">
                      {" "}
                      <i data-lucide="activity"></i>{" "}
                    </div>
                    <div className="menu__title">
                      {" "}
                      Blog{" "}
                      <i
                        data-lucide="chevron-down"
                        className="menu__sub-icon "
                      ></i>{" "}
                    </div>
                  </a>
                  <ul className="">
                    <li>
                      <a
                        href="side-menu-light-blog-layout-1.html"
                        className="menu"
                      >
                        <div className="menu__icon">
                          {" "}
                          <i data-lucide="zap"></i>{" "}
                        </div>
                        <div className="menu__title">Layout 1</div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="side-menu-light-blog-layout-2.html"
                        className="menu"
                      >
                        <div className="menu__icon">
                          {" "}
                          <i data-lucide="zap"></i>{" "}
                        </div>
                        <div className="menu__title">Layout 2</div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="side-menu-light-blog-layout-3.html"
                        className="menu"
                      >
                        <div className="menu__icon">
                          {" "}
                          <i data-lucide="zap"></i>{" "}
                        </div>
                        <div className="menu__title">Layout 3</div>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#" className="menu">
                    <div className="menu__icon">
                      {" "}
                      <i data-lucide="activity"></i>{" "}
                    </div>
                    <div className="menu__title">
                      {" "}
                      Pricing{" "}
                      <i
                        data-lucide="chevron-down"
                        className="menu__sub-icon "
                      ></i>{" "}
                    </div>
                  </a>
                  <ul className="">
                    <li>
                      <a
                        href="side-menu-light-pricing-layout-1.html"
                        className="menu"
                      >
                        <div className="menu__icon">
                          {" "}
                          <i data-lucide="zap"></i>{" "}
                        </div>
                        <div className="menu__title">Layout 1</div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="side-menu-light-pricing-layout-2.html"
                        className="menu"
                      >
                        <div className="menu__icon">
                          {" "}
                          <i data-lucide="zap"></i>{" "}
                        </div>
                        <div className="menu__title">Layout 2</div>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#" className="menu">
                    <div className="menu__icon">
                      {" "}
                      <i data-lucide="activity"></i>{" "}
                    </div>
                    <div className="menu__title">
                      {" "}
                      Invoice{" "}
                      <i
                        data-lucide="chevron-down"
                        className="menu__sub-icon "
                      ></i>{" "}
                    </div>
                  </a>
                  <ul className="">
                    <li>
                      <a
                        href="side-menu-light-invoice-layout-1.html"
                        className="menu"
                      >
                        <div className="menu__icon">
                          {" "}
                          <i data-lucide="zap"></i>{" "}
                        </div>
                        <div className="menu__title">Layout 1</div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="side-menu-light-invoice-layout-2.html"
                        className="menu"
                      >
                        <div className="menu__icon">
                          {" "}
                          <i data-lucide="zap"></i>{" "}
                        </div>
                        <div className="menu__title">Layout 2</div>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#" className="menu">
                    <div className="menu__icon">
                      {" "}
                      <i data-lucide="activity"></i>{" "}
                    </div>
                    <div className="menu__title">
                      {" "}
                      FAQ{" "}
                      <i
                        data-lucide="chevron-down"
                        className="menu__sub-icon "
                      ></i>{" "}
                    </div>
                  </a>
                  <ul className="">
                    <li>
                      <a
                        href="side-menu-light-faq-layout-1.html"
                        className="menu"
                      >
                        <div className="menu__icon">
                          {" "}
                          <i data-lucide="zap"></i>{" "}
                        </div>
                        <div className="menu__title">Layout 1</div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="side-menu-light-faq-layout-2.html"
                        className="menu"
                      >
                        <div className="menu__icon">
                          {" "}
                          <i data-lucide="zap"></i>{" "}
                        </div>
                        <div className="menu__title">Layout 2</div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="side-menu-light-faq-layout-3.html"
                        className="menu"
                      >
                        <div className="menu__icon">
                          {" "}
                          <i data-lucide="zap"></i>{" "}
                        </div>
                        <div className="menu__title">Layout 3</div>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="login-light-login.html" className="menu">
                    <div className="menu__icon">
                      {" "}
                      <i data-lucide="activity"></i>{" "}
                    </div>
                    <div className="menu__title"> Login </div>
                  </a>
                </li>
                <li>
                  <a href="login-light-register.html" className="menu">
                    <div className="menu__icon">
                      {" "}
                      <i data-lucide="activity"></i>{" "}
                    </div>
                    <div className="menu__title"> Register </div>
                  </a>
                </li>
                <li>
                  <a href="main-light-error-page.html" className="menu">
                    <div className="menu__icon">
                      {" "}
                      <i data-lucide="activity"></i>{" "}
                    </div>
                    <div className="menu__title"> Error Page </div>
                  </a>
                </li>
                <li>
                  <a
                    href="side-menu-light-update-profile.html"
                    className="menu"
                  >
                    <div className="menu__icon">
                      {" "}
                      <i data-lucide="activity"></i>{" "}
                    </div>
                    <div className="menu__title"> Update profile </div>
                  </a>
                </li>
                <li>
                  <a
                    href="side-menu-light-change-password.html"
                    className="menu"
                  >
                    <div className="menu__icon">
                      {" "}
                      <i data-lucide="activity"></i>{" "}
                    </div>
                    <div className="menu__title"> Change Password </div>
                  </a>
                </li>
              </ul>
            </li>
            <li className="menu__devider my-6"></li>
            <li>
              <a href="#" className="menu">
                <div className="menu__icon">
                  {" "}
                  <i data-lucide="inbox"></i>{" "}
                </div>
                <div className="menu__title">
                  {" "}
                  Components{" "}
                  <i
                    data-lucide="chevron-down"
                    className="menu__sub-icon "
                  ></i>{" "}
                </div>
              </a>
              <ul className="">
                <li>
                  <a href="#" className="menu">
                    <div className="menu__icon">
                      {" "}
                      <i data-lucide="activity"></i>{" "}
                    </div>
                    <div className="menu__title">
                      {" "}
                      Table{" "}
                      <i
                        data-lucide="chevron-down"
                        className="menu__sub-icon "
                      ></i>{" "}
                    </div>
                  </a>
                  <ul className="">
                    <li>
                      <a
                        href="side-menu-light-regular-table.html"
                        className="menu"
                      >
                        <div className="menu__icon">
                          {" "}
                          <i data-lucide="zap"></i>{" "}
                        </div>
                        <div className="menu__title">Regular Table</div>
                      </a>
                    </li>
                    <li>
                      <a href="side-menu-light-tabulator.html" className="menu">
                        <div className="menu__icon">
                          {" "}
                          <i data-lucide="zap"></i>{" "}
                        </div>
                        <div className="menu__title">Tabulator</div>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#" className="menu">
                    <div className="menu__icon">
                      {" "}
                      <i data-lucide="activity"></i>{" "}
                    </div>
                    <div className="menu__title">
                      {" "}
                      Overlay{" "}
                      <i
                        data-lucide="chevron-down"
                        className="menu__sub-icon "
                      ></i>{" "}
                    </div>
                  </a>
                  <ul className="">
                    <li>
                      <a href="side-menu-light-modal.html" className="menu">
                        <div className="menu__icon">
                          {" "}
                          <i data-lucide="zap"></i>{" "}
                        </div>
                        <div className="menu__title">Modal</div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="side-menu-light-slide-over.html"
                        className="menu"
                      >
                        <div className="menu__icon">
                          {" "}
                          <i data-lucide="zap"></i>{" "}
                        </div>
                        <div className="menu__title">Slide Over</div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="side-menu-light-notification.html"
                        className="menu"
                      >
                        <div className="menu__icon">
                          {" "}
                          <i data-lucide="zap"></i>{" "}
                        </div>
                        <div className="menu__title">Notification</div>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="side-menu-light-Tab.html" className="menu">
                    <div className="menu__icon">
                      {" "}
                      <i data-lucide="activity"></i>{" "}
                    </div>
                    <div className="menu__title"> Tab </div>
                  </a>
                </li>
                <li>
                  <a href="side-menu-light-accordion.html" className="menu">
                    <div className="menu__icon">
                      {" "}
                      <i data-lucide="activity"></i>{" "}
                    </div>
                    <div className="menu__title"> Accordion </div>
                  </a>
                </li>
                <li>
                  <a href="side-menu-light-button.html" className="menu">
                    <div className="menu__icon">
                      {" "}
                      <i data-lucide="activity"></i>{" "}
                    </div>
                    <div className="menu__title"> Button </div>
                  </a>
                </li>
                <li>
                  <a href="side-menu-light-alert.html" className="menu">
                    <div className="menu__icon">
                      {" "}
                      <i data-lucide="activity"></i>{" "}
                    </div>
                    <div className="menu__title"> Alert </div>
                  </a>
                </li>
                <li>
                  <a href="side-menu-light-progress-bar.html" className="menu">
                    <div className="menu__icon">
                      {" "}
                      <i data-lucide="activity"></i>{" "}
                    </div>
                    <div className="menu__title"> Progress Bar </div>
                  </a>
                </li>
                <li>
                  <a href="side-menu-light-tooltip.html" className="menu">
                    <div className="menu__icon">
                      {" "}
                      <i data-lucide="activity"></i>{" "}
                    </div>
                    <div className="menu__title"> Tooltip </div>
                  </a>
                </li>
                <li>
                  <a href="side-menu-light-dropdown.html" className="menu">
                    <div className="menu__icon">
                      {" "}
                      <i data-lucide="activity"></i>{" "}
                    </div>
                    <div className="menu__title"> Dropdown </div>
                  </a>
                </li>
                <li>
                  <a href="side-menu-light-typography.html" className="menu">
                    <div className="menu__icon">
                      {" "}
                      <i data-lucide="activity"></i>{" "}
                    </div>
                    <div className="menu__title"> Typography </div>
                  </a>
                </li>
                <li>
                  <a href="side-menu-light-icon.html" className="menu">
                    <div className="menu__icon">
                      {" "}
                      <i data-lucide="activity"></i>{" "}
                    </div>
                    <div className="menu__title"> Icon </div>
                  </a>
                </li>
                <li>
                  <a href="side-menu-light-loading-icon.html" className="menu">
                    <div className="menu__icon">
                      {" "}
                      <i data-lucide="activity"></i>{" "}
                    </div>
                    <div className="menu__title"> Loading Icon </div>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" className="menu">
                <div className="menu__icon">
                  {" "}
                  <i data-lucide="sidebar"></i>{" "}
                </div>
                <div className="menu__title">
                  {" "}
                  Forms{" "}
                  <i
                    data-lucide="chevron-down"
                    className="menu__sub-icon "
                  ></i>{" "}
                </div>
              </a>
              <ul className="">
                <li>
                  <a href="side-menu-light-regular-form.html" className="menu">
                    <div className="menu__icon">
                      {" "}
                      <i data-lucide="activity"></i>{" "}
                    </div>
                    <div className="menu__title"> Regular Form </div>
                  </a>
                </li>
                <li>
                  <a href="side-menu-light-datepicker.html" className="menu">
                    <div className="menu__icon">
                      {" "}
                      <i data-lucide="activity"></i>{" "}
                    </div>
                    <div className="menu__title"> Datepicker </div>
                  </a>
                </li>
                <li>
                  <a href="side-menu-light-tom-select.html" className="menu">
                    <div className="menu__icon">
                      {" "}
                      <i data-lucide="activity"></i>{" "}
                    </div>
                    <div className="menu__title"> Tom Select </div>
                  </a>
                </li>
                <li>
                  <a href="side-menu-light-file-upload.html" className="menu">
                    <div className="menu__icon">
                      {" "}
                      <i data-lucide="activity"></i>{" "}
                    </div>
                    <div className="menu__title"> File Upload </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="menu">
                    <div className="menu__icon">
                      {" "}
                      <i data-lucide="activity"></i>{" "}
                    </div>
                    <div className="menu__title">
                      {" "}
                      Wysiwyg Editor{" "}
                      <i
                        data-lucide="chevron-down"
                        className="menu__sub-icon "
                      ></i>{" "}
                    </div>
                  </a>
                  <ul className="">
                    <li>
                      <a
                        href="side-menu-light-wysiwyg-editor-classic.html"
                        className="menu"
                      >
                        <div className="menu__icon">
                          {" "}
                          <i data-lucide="zap"></i>{" "}
                        </div>
                        <div className="menu__title">Classic</div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="side-menu-light-wysiwyg-editor-inline.html"
                        className="menu"
                      >
                        <div className="menu__icon">
                          {" "}
                          <i data-lucide="zap"></i>{" "}
                        </div>
                        <div className="menu__title">Inline</div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="side-menu-light-wysiwyg-editor-balloon.html"
                        className="menu"
                      >
                        <div className="menu__icon">
                          {" "}
                          <i data-lucide="zap"></i>{" "}
                        </div>
                        <div className="menu__title">Balloon</div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="side-menu-light-wysiwyg-editor-balloon-block.html"
                        className="menu"
                      >
                        <div className="menu__icon">
                          {" "}
                          <i data-lucide="zap"></i>{" "}
                        </div>
                        <div className="menu__title">Balloon Block</div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="side-menu-light-wysiwyg-editor-document.html"
                        className="menu"
                      >
                        <div className="menu__icon">
                          {" "}
                          <i data-lucide="zap"></i>{" "}
                        </div>
                        <div className="menu__title">Document</div>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="side-menu-light-validation.html" className="menu">
                    <div className="menu__icon">
                      {" "}
                      <i data-lucide="activity"></i>{" "}
                    </div>
                    <div className="menu__title"> Validation </div>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" className="menu">
                <div className="menu__icon">
                  {" "}
                  <i data-lucide="hard-drive"></i>{" "}
                </div>
                <div className="menu__title">
                  {" "}
                  Widgets{" "}
                  <i
                    data-lucide="chevron-down"
                    className="menu__sub-icon "
                  ></i>{" "}
                </div>
              </a>
              <ul className="">
                <li>
                  <a href="side-menu-light-chart.html" className="menu">
                    <div className="menu__icon">
                      {" "}
                      <i data-lucide="activity"></i>{" "}
                    </div>
                    <div className="menu__title"> Chart </div>
                  </a>
                </li>
                <li>
                  <a href="side-menu-light-slider.html" className="menu">
                    <div className="menu__icon">
                      {" "}
                      <i data-lucide="activity"></i>{" "}
                    </div>
                    <div className="menu__title"> Slider </div>
                  </a>
                </li>
                <li>
                  <a href="side-menu-light-image-zoom.html" className="menu">
                    <div className="menu__icon">
                      {" "}
                      <i data-lucide="activity"></i>{" "}
                    </div>
                    <div className="menu__title"> Image Zoom </div>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
