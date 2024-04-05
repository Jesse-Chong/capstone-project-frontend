import {useState, useEffect} from "react";
import AFav from "./AFav.jsx";

const API = import.meta.env.VITE_BASE_URL;

function AllFavs() {
    const [favorite, setFavorite] = useState([]);

    useEffect(()=>{
        const getAllFavs = async()=>{
            try {
                fetch(`${API}/favorite`)
                .then(res=>res.json())
                .then(res=>{
                    setFavorite(res)
                })
            } catch (error) {
                return error
            }
        }
        getAllFavs()
    }, []);

    return (
        <div>
            <h1>
                {favorite.map((fav)=>{
                    return <AFav key={fav.favorite_id} fav={fav}/> 
                })}
            </h1>
        </div>
    )
};

export default AllFavs;