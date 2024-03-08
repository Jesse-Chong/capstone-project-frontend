import React from 'react'

export default function AppDescription() {
  return (
    <div>
    <div className="dropdown d-flex justify-content-center">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ padding: "15px", width: "65%", fontSize: "50px" }}
            >
              Choose Your Language
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1"
              style={{ width: "65%"}}
            >
              <li>
                <a className="dropdown-item fs-3 text-center"
                  href="#">
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

              <div className="dropdown d-flex justify-content-center">
              <button
                className="btn btn-secondary dropdown-toggle fs-1"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ padding: "15px", width: "45%" }}
              >
                Choose Your Location
              </button>
              <ul className="dropdown-menu"  aria-labelledby="dropdownMenuButton1"
              style={{ width: "45%" }}
                >
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
            <br />
            <br />
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
          </div>
         
     )
}

