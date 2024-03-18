import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Footer from "./Footer";
import LoginNavBar from "./LoginNavBar";

const LoginPage = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div>
      <LoginNavBar />
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
                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                    <p className="text-black-50 mb-5">
                      Please enter your login and password!
                    </p>

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

                    <div className="form-check mb-4">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="form1Example3"
                      />
                      <label className="form-check-label" for="form1Example3">
                        Remember password
                      </label>
                    </div>

                    <p className="small mb-5 pb-lg-2">
                      <a className="text-black-50" href="#!">
                        Forgot password?
                      </a>
                    </p>

                    <button
                      className="btn-lg px-5"
                      type="submit"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Login
                    </button>
                  </div>

                  <div>
                    <p className="mb-0">
                      Don't have an account?{" "}
                      <a href="/signup" className="text-black-50 fw-bold">
                        Signup
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

export default LoginPage;
