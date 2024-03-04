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
              Traditional Indian food is renowned worldwide for its wonderful
              use of herbs and spices, and its diverse range of deep-fried
              snacks, pastries, curries, gravies, sauces, rice dishes,
              tandoor-cooked meats, vegetable dishes, chutneys, breads and
              sweets. This unique approach to using ingredients makes our food
              incredibly appealing! Our food is a combination of all six tastes
              like sweet, sour, salty, bitter, spicy and astringent.
            </p>
          </div>
          {/* <div class="col">Column</div>
          <div class="col">Column</div> */}
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
