import { useAppContext } from "@/context/Context";
import { useRouter } from "next/router"; // ✅ Import useRouter
import React from "react";

const HeaderTop = () => {
  const { toggleTop, setToggle } = useAppContext();
  const router = useRouter(); 

  return (
    <>
      <div
        className={`header-top-news bg-image1 ${toggleTop ? "" : "deactive"}`}
      >
        <div className="wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="inner">
                  <div className="content">
                    <span className="rainbow-badge">Limited Time Offer</span>
                    <span className="news-text">
                      Intro price. Get AiWave for Big Sale -95% off.
                    </span>
                  </div>
                  <div className="right-button">
                    <li
                      className="btn-read-more"
                      onClick={() => router.push("/pricing")} 
                      style={{listStyle:"none", cursor:"pointer"}}
                    >
                      <span>
                        Purchase Now{" "}
                        <i className="fa-sharp fa-regular fa-arrow-right"></i>
                      </span>
                    </li>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="icon-close">
          <button
            className="close-button bgsection-activation"
            onClick={() => setToggle(!toggleTop)}
          >
            <i className="fa-sharp fa-regular fa-x"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default HeaderTop;
