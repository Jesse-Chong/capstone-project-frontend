import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Footer from "./Footer";
import NavBarSignUp from "../pages/NavBarSignUp";

const SignUpPage = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div>
      <NavBarSignUp />
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                //   className="card bg-dark text-white"
                className="card bg-white text-black"
                style={{ borderRadius: "1rem" }}
              >
                <div className="card-body p-5 text-center">
                  <div className="mb-md-5 mt-md-4 pb-5">
                    <h2 className="fw-bold mb-4 text-uppercase">Signup</h2>

                    <div className="form-outline form-white mb-4">
                      <input
                        type="text"
                        id="text"
                        className="form-control form-control-lg"
                        placeholder="First Name"
                        required
                      />
                    </div>

                    <div className="form-outline form-white mb-4">
                      <input
                        type="text"
                        id="text"
                        className="form-control form-control-lg"
                        placeholder="Last Name"
                        required
                      />
                    </div>

                    <div className="form-outline form-white mb-4">
                      <input
                        type="email"
                        id="typeEmailX"
                        className="form-control form-control-lg"
                        placeholder="Email"
                        required
                      />
                    </div>

                    <div className="form-outline form-white mb-4">
                      <input
                        type="password"
                        id="typePasswordX"
                        className="form-control form-control-lg"
                        placeholder="Password"
                        required
                      />
                    </div>

                    <button
                      className="btn-lg px-5 mt-4"
                      type="submit"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Signup
                    </button>
                  </div>

                  <div>
                    <p className="mb-0">
                      Have an account?{" "}
                      <a href="/login" className="text-black-50 fw-bold">
                        Login
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <button className="m-5">
        <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
          {t("button.back")}
        </Link>
      </button>
      <Footer />
    </div>
  );
};

export default SignUpPage;
