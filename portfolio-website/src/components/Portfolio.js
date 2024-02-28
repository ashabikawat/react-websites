import React from "react";
import Omnifood from "../assets/omnifood.png";

function Portfolio() {
  return (
    <>
      <div className="background-color-tertiary py-5">
        <section className="container py-4 px-5">
          <h2 className="text-white text-capitalize sub-headings fw-bold text-secondary-fs">
            Portfolio.
          </h2>
          <div className="py-5">
            <div className="row gap-5 display-flex">
              <div className="col">
                <div>
                  <img
                    src={Omnifood}
                    alt="Project omnifood"
                    className=" img-fluid rounded"
                  />
                </div>
              </div>
              <div className="col d-flex flex-column justify-content-center align-items-start">
                <p className="text-white line-height text-tertiary-fs">
                  Omnifood, a website crafted using HTML and CSS. This project
                  demonstrates my proficiency in front-end web development, as I
                  meticulously designed each element and implemented custom
                  styling. Omnifood serves as a testament to my skills in web
                  design and development.
                </p>
                <button className="cta-btn px-3 py-2 mt-4 submit fw-bold">
                  Live Link
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Portfolio;
