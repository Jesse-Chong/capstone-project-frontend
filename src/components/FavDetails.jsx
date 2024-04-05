import {useParams, useNavigate, Link} from "react-router-dom";
import {useState, useEffect} from "react";
import { BiSolidPrinter } from "react-icons/bi";
import { RiFileDownloadFill } from "react-icons/ri";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { LiaStarSolid } from "react-icons/lia";

const API = import.meta.env.VITE_BASE_URL;

function FavDetails() {
    const [favorite, setFavorite] = useState({
   
       is_favorite: false,
       category: "", 
       name: "",
       image: ""
    });

    let {id}=useParams();
    let navigate = useNavigate();

    useEffect(()=>{
        const getOneFav = async()=>{
            try {
                fetch(`${API}/favorite/${id}`)
                .then(res=>res.json())
                .then(res=>{
                    console.log(res)
                    setFavorite(res)
                    console.log(res)
                })
            } catch (error) {
                return error
            }
        }
        getOneFav()
    }, []);

    const HandleDeleteFav = ()=>{ 
        const confirmDeleteBox = window.confirm(`🚨 WAIT!!!!! Are you sure you want to 💥 delete 💥 ${favorite.name}? 🚨`)
        if(!confirmDeleteBox){
            return
        }
        try {
            fetch(`${API}/favorite/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(favorite)
            }) 
            .then(res=>res.json())
            .then(()=>navigate("/favorite"))
        } catch (error) {
            return error
        }
    };

    return (
        <div>
            <div>
                <h3>
                    Name:<br/>{favorite.name}
                    <br/>
                    <br/>
                    Category:<br/>{favorite.category}
                    <br/>
                    <br/>
                    
                    
                    {/* Image:<br/>
                    <a>href={favorite.image}
                        target="_blank"
                      rel="noreferrer"
                    </a> */}
                        <button>
                    <a
                      href={favorite.image}
                      target="_blank"
                      rel="noreferrer"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      {/* <BiSolidPrinter style={{ color: "#38b6ff" }} />{" "} */}
                      {/* {t("favorite.print_/_download")}{" "} */}
                      <RiFileDownloadFill style={{ color: "#38b6ff" }} />
                      Download File:
                    </a>
                  </button>
                    <br/>
                    <br/>
                    Is A Favorite?<br/>{favorite.is_favorite ? <span>❤️ YES ❤️</span> : <span>💔 NO 💔</span>} 
                </h3>
                <div>
                    <button>
                        <Link to={'/favorite'}>🔙 Return to My List 🔙</Link>
                    </button>
                </div>
                <br/>
                <br/>
                <div>
                    <button onClick={HandleDeleteFav}>💥 Delete {favorite.name} 💥</button>
                </div>
            </div>
        </div>
    )
};

export default FavDetails;