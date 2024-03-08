import React from "react";

function LandingPage() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="m-3" style={{ height: "100px" }}>
            <img
              src="Logo.png"
              className="rounded"
              alt="..."
              style={{ height: "300px", width: "300px" }}
            />
          </div>
        </div>
        <div className="col">
          <div className="dropdown d-flex justify-content-center">
            <button
              className="btn btn-secondary dropdown-toggle fs-3"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ padding: "15px" }}
            >
              Choose Your Language
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a className="dropdown-item fs-3 text-center" href="#">
                  English
                </a>
              </li>
              <li>
                <a className="dropdown-item fs-3 text-center" href="#">
                  Spanish
                </a>
              </li>
              <li>
                <a className="dropdown-item fs-3 text-center" href="#">
                  Chinese
                </a>
              </li>
              <li>
                <a className="dropdown-item fs-3 text-center" href="#">
                  Hindi
                </a>
              </li>
              <li>
                <a className="dropdown-item fs-3 text-center" href="#">
                  Arabic
                </a>
              </li>
              <li>
                <a className="dropdown-item fs-3 text-center" href="#">
                  French
                </a>
              </li>
            </ul>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="col">
          <div className="dropdown d-flex justify-content-center">
            <button
              className="btn btn-secondary dropdown-toggle fs-3"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ padding: "15px" }}
            >
              Choose Your Location
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a className="dropdown-item fs-3 text-center" href="#">
                  Manhattan
                </a>
              </li>
              <li>
                <a className="dropdown-item fs-3 text-center" href="#">
                  Queens
                </a>
              </li>
              <li>
                <a className="dropdown-item fs-3 text-center" href="#">
                  Brooklyn
                </a>
              </li>
              <li>
                <a className="dropdown-item fs-3 text-center" href="#">
                  Bronx
                </a>
              </li>
              <li>
                <a className="dropdown-item fs-3 text-center" href="#">
                  Staten Island
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p className="fs-2 mt-5 px-5 ">
              To create a seamless transition for immigrants so they can access
              the information they need. When immigrants arrive they are not
              aware of the resources they may need. To provide legal and
              accurate information for immigrants who are immigrating to the
              U.S. The information is accessible in one app and also enables
              users to choose their language.
            </p>
          </div>
          {/* <div class="col">Column</div>
          <div class="col">Column</div> */}
        </div>
      </div>
      <footer
        className="text-center text-white"
        style={{ backgroundColor: "#45637d" }}
      >
        <div className="container p-4">
          <section className="">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-6">
                <div className="ratio ratio-16x9">
                  <iframe
                    className="shadow-1-strong rounded"
                    // src="https://www.youtube.com/embed/vlDzYIIOYmM"
                    src="https://www.youtube.com/embed/RGJr6NCLMbc?si=Wrh2DF-1_0EY8Sat"
                    title="YouTube video"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2024 Copyright:
          <a className="text-white" href="https://FreshStart.com/">
            FreshStart.com
          </a>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
