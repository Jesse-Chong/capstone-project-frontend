import NavBar from "../components/NavBar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Home() {
    return (
    <div>
        {/* <nav className="navbar sticky-top navbar navbar-dark bg-primary"> */}
            <NavBar/>
        {/* </nav> <br/> */}
        <h1>Choose a Category</h1><br/><br/>
        <div className="container">
  <div className="row row-cols-3">
    <div className="col"><h2>Education</h2>  
        <img src="" alt="Picture for Education Card" width="200" height="200"/> <br/>
    </div><br/><br/><br/><br/><br/><br/>
    <div className="col"><h2>Jobs</h2>   
    <buton> <img src="" alt="Picture for Jobs Card" width="200" height="200"/> </buton>  <br/>
    </div><br/><br/><br/><br/><br/><br/>
    <div className="col"><h2>Healthcare</h2>   
        <img src="" alt="Picture for Healthcare Card" width="200" height="200"/> <br/>
    </div><br/><br/><br/><br/><br/><br/>
    <div className="col"><h2>Housing</h2>   
        <img src="" alt="Picture for Housing Card" width="200" height="200"/> <br/>
    </div><br/><br/><br/><br/><br/><br/>
    <div className="col"><h2>Food Banks</h2>    
        <img src="" alt="Picture for Food Banks Card" width="200" height="200"/> <br/>
    </div><br/><br/><br/><br/><br/><br/>
    <div className="col"><h2>Government Services</h2>
        <img src="" alt="Picture for Government Services Card" width="200" height="200"/> <br/>
    </div><br/><br/><br/><br/><br/><br/>
    <div className="col"><h2>Banking Services</h2>  
        <img src="" alt="Picture for Banking Services Card" width="200" height="200"/> <br/>
    </div><br/><br/><br/><br/><br/><br/>
    <div className="col"><h2>DMV Services</h2>   
        <img src="" alt="Picture for DMV Services Card" width="200" height="200"/> <br/>
    </div><br/><br/><br/><br/><br/><br/>
    <div className="col"><h2>Faith Based Services</h2>  
        <img src="" alt="Picture for Faith Based Services Card" width="200" height="200"/> <br/>
    </div><br/><br/><br/><br/><br/><br/>
  </div>
</div>
        <button>Back</button> 
        <br/><br/>
        <footer>
            <Footer/>
        </footer>
    </div>
    )
};

export default Home;