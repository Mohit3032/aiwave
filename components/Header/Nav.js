import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import MenuData from "../../data/header.json";
import NavProps from "./NavProps";
import menuImg from "../../public/images/menu-img/menu-img-2.png";

const Nav = () => {
  const router = useRouter();
  const [sectionStates, setSectionStates] = useState({
    Tools: true,
    Pages: true,
  });

  const toggleSection = (subTitle) => {
    setSectionStates((prevState) => ({
      ...prevState,
      [subTitle]: !prevState[subTitle],
    }));
  };

  const handleNavigation = (path, isDisabled) => {
    if (!isDisabled && path !== "javascript:void(0);") {
      router.push(path);
    }
  };

  const isActive = (href) => router.pathname === href;

  return (
    <>
      <ul className="mainmenu">
        {MenuData &&
          MenuData.nav.map((data, index) => (
            <li
              className={`${
                data.dropdown
                  ? "has-dropdown has-menu-child-item position-relative"
                  : ""
              } ${data.megamenu ? "with-megamenu has-menu-child-item" : ""}`}
              key={index}
            >
              <label
                className={`nav-item ${isActive(data.link) ? "active" : ""} ${
                  !sectionStates[data.text] ? "open" : ""
                }`}
                onClick={() => handleNavigation(data.link, false)}
              >
                {data.text}
                {data.isIcon && <i className="fa-regular fa-chevron-down"></i>}
              </label>

              {/* DROPDOWN MENU HANDLING */}
              {data.isMenu && !data.inner && !data.dashboard && !data.upcoming ? (
                <ul className={`submenu ${!sectionStates[data.text] ? "d-block" : ""}`}>
                  {data.subItem &&
                    data.subItem.map((innerData, innerIndex) => (
                      <li key={innerIndex}>
                        <label
                          className={`${
                            isActive(innerData.link) ? "active" : ""
                          } ${innerData.isDisable ? "disabled" : ""}`}
                          onClick={() => handleNavigation(innerData.link, innerData.isDisable)}
                        >
                          {innerData.title}
                          {innerData.badge && (
                            <div className="rainbow-badge-card badge-sm ml--5">
                              {innerData.badge}
                            </div>
                          )}
                        </label>
                      </li>
                    ))}
                </ul>
              ) : data.isMenu ? (
                <div className={`rainbow-megamenu ${!sectionStates[data.text] ? "d-block active" : ""}`}>
                  <div className="wrapper">
                    <div className="row row--0">
                      <NavProps list={data.inner} />
                      <NavProps list={data.dashboard} />
                      <NavProps list={data.upcoming} />
                      <div className="col-lg-3 single-mega-item">
                        <div className="header-menu-img">
                          <Image src={menuImg} width={326} height={458} alt="Menu Split Image" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
            </li>
          ))}
      </ul>
    </>
  );
};

export default Nav;
