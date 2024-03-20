import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Footer from "./Footer";
import LoginNavBar from "./LoginNavBar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import SignUpPage from "./SignUp";
import Scroll from "../components/Scroll";

const LoginPage = ({ setUser, setToken }) => {
  const API = import.meta.env.VITE_API_KEY;
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const [loginForm, setLoginForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password_hash: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLoginForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = (event) => {
    event.preventDefault();

    fetch(`${API}/login`, {
      method: "POST",
      body: JSON.stringify(loginForm),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log(res)
        if (res.user.user_id) {
          setUser(res.user);
          setToken(res.token);
          setLoginForm((prev) => ({
            email: "",
            password_hash: "",
          }));

          navigate("/users");
        } else {
          console.log(res);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <LoginNavBar />
      <form onSubmit={handleLogin}>
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
                      <h2 className="fw-bold mb-2 text-uppercase">
                        {t("navbar.login")}
                      </h2>
                      <p className="text-black-50 mb-5">
                        {t("loginpage.enter_login_password")}
                      </p>

                      <div className="form-outline form-white mb-4">
                        <input
                          type="email"
                          id="typeEmailX"
                          className="form-control form-control-lg"
                          placeholder={t("loginpage.email")}
                          name="email"
                          value={loginForm.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>

                      <div className="form-outline form-white mb-4">
                        <input
                          type="password"
                          id="typePasswordX"
                          className="form-control form-control-lg"
                          placeholder={t("loginpage.password")}
                          name="password_hash"
                          value={loginForm.password_hash}
                          onChange={handleInputChange}
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
                          {t("loginpage.remember_password")}
                        </label>
                      </div>

                      <p className="small mb-5 pb-lg-2">
                        <a className="text-black-50" href="#!">
                          {t("loginpage.forgot_password")}
                        </a>
                      </p>

                      <button
                        className="btn-lg px-5"
                        type="submit"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        {t("navbar.login")}
                      </button>
                    </div>

                    <div>
                      <p className="mb-0">
                        {t("loginpage.account")}{" "}
                        <a href="/signup" className="text-black-50 fw-bold">
                          {t("navbar.signup")}
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
      </form>
      <Scroll />
      <Footer />
    </div>
  );
};

export default LoginPage;
