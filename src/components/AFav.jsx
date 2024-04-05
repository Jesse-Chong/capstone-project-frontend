import { Link } from "react-router-dom";

function AFav({fav}) {
    return (
        <div>
           <div>
            <h4>
                <Link to={`/favorite/${fav.favorite_id}`}>✨ {fav.name} ✨</Link>
               
            </h4>
           </div>
        </div>
    )
};

export default AFav;