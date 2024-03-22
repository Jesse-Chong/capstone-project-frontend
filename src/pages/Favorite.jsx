import React from 'react';


const Favorite = ({user, token, setUser, setToken}) => {
    const handleLogout = () => {
        setUser(null)
        setToken(null)
    }

    return (
        <div>
           <button onSubmit={handleLogout}>
            Log Out
           </button>
            {!user ?
            <h2> Favorite Page</h2>
            :
            <h2>{user.first_name} {user.last_name}'s Account</h2>
            }
        </div>
    );
};

export default Favorite;