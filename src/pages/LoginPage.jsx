import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import NavBar from "../components/NavBar";
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
           <div>
            <h1 style={{textAlign: "center"}}>Login</h1>
            <form>
  <div className="mb-3" style={{marginLeft:"200px", marginRight:"200px", marginBottom:"50px"}}>
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Ex: name@email.com"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <br/>
  <div className="mb-3" style={{marginLeft:"200px", marginRight:"200px", marginBottom:"50px"}}>
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password" placeholder="Ex: password123"/>
  </div>
  <br/> 
  <button 
  className="m-5">
    <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
       Login
        </Link>
      </button>
</form>
<br/><br/>
        </div>
         <p style={{textAlign: "center"}}>Don't have an account? Sign up!!</p>
         <button className="m-5">
         <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
        {t('button.back')}
        </Link>
      </button>
        <br/><br/>
        <Footer />
        </div>
    );
};

export default LoginPage;