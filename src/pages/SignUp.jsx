import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Footer from "./Footer";
import NavBarSignUp from "../pages/NavBarSignUp";
import { useNavigate } from "react-router-dom";
import Scroll from "../components/Scroll";

const SignUpPage = ({ setUser, setToken }) => {
  const navigate = useNavigate();
  const API = import.meta.env.VITE_BASE_URL;
  const { t, i18n } = useTranslation();
  const [signUp, setSignUp] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password_hash: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSignUp((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`${API}/users`, {
      method: "POST",
      body: JSON.stringify(signUp),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(res => res.json())
      .then(res => {
        if (res.user.user_id) {
          setUser(res.user);
          setToken(res.token);
          setSignUp((prev) => ({
            first_name: '',
            last_name: '',
            email: '',
            password_hash: '',
          }));
          navigate("/favorite");
        } else {
          console.log(res);
        }
      })
      .catch((err) => console.log(err));
  };
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <NavBarSignUp />
      <form onSubmit={handleSubmit}>
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
                      <h2 className="fw-bold mb-4 text-uppercase">
                        {t("navbar.signup")}
                      </h2>

                      <div className="form-outline form-white mb-4">
                        <input
                          type="text"
                          id="first_name"
                          className="form-control form-control-lg"
                          placeholder={t("signup.first_name")}
                          name="first_name"
                          value={signUp.first_name}
                          onChange={handleInputChange}
                          required
                        />
                      </div>

                      <div className="form-outline form-white mb-4">
                        <input
                          type="text"
                          id="last_name"
                          className="form-control form-control-lg"
                          placeholder={t("signup.last_name")}
                          name="last_name"
                          value={signUp.last_name}
                          onChange={handleInputChange}
                          required
                        />
                      </div>

                      <div className="form-outline form-white mb-4">
                        <input
                          type="email"
                          id="email"
                          className="form-control form-control-lg"
                          placeholder={t("loginpage.email")}
                          name="email"
                          value={signUp.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>

                      <div className="form-outline form-white mb-4">
                        <input
                          type="password"
                          id="password"
                          className="form-control form-control-lg"
                          placeholder={t("loginpage.password")}
                          name="password_hash"
                          value={signUp.password_hash}
                          onChange={handleInputChange}
                          required
                        />
                      </div>

                      <button
                        className="btn-lg px-5 mt-4"
                        type="submit"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        {t("navbar.signup")}
                      </button>
                    </div>

                    <div>
                      <p className="mb-0">
                        {t("signup.account")}{" "}
                        <a href="/login" className="text-black-50 fw-bold">
                          {t("navbar.login")}
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

export default SignUpPage;
