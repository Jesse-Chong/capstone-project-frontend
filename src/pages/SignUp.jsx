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
           <br/>
           <div>
            <h1 style={{textAlign: "center"}}>Signup</h1>
    <form>
    <div className="mb-3" style={{marginLeft:"200px", marginRight:"200px", paddingBottom:"20px"}}>
    <label htmlFor="firstname" className="form-label">First Name</label>
    <input type="text" className="form-control" id="firstname" placeholder="Ex: John"/>
</div>
<div className="mb-3" style={{marginLeft:"200px", marginRight:"200px", paddingBottom:"20px"}}>
  <label htmlFor="lastname" className="form-label">Last Name</label>
  <input type="text" className="form-control" id="lastname" placeholder="Ex. Doe"/>
</div>
<div className="mb-3" style={{marginLeft:"200px", marginRight:"200px", paddingBottom:"20px"}}>
    <label htmlFor="email" className="form-label">Email</label>
    <input type="text" className="form-control" id="email" placeholder="Ex. name@email.com"/>
</div>
<div className="mb-3" style={{marginLeft:"200px", marginRight:"200px", paddingBottom:"20px"}}>
  <label htmlFor="password" className="form-label">Password</label>
  <input type="text" className="form-control" id="password" placeholder="password123"/>
</div>
<button className="m-5">
        <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
         SignUp
        </Link>
      </button>
</form>
<br/>
<p style={{textAlign: "center"}}>Have an account? Login!!</p>
   </div>
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

export default SignUpPage;