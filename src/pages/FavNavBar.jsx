import React from 'react';

const FavNavBar = ({ user, setUser, setToken }) => {

    const handleLogout = () => {
        setUser(null)
        setToken(null)
    }

    return (
        <div>
            {!user ?
                null
                :
                <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
                    <div className="container-fluid" style={{ backgroundColor: "#38B6FF" }}>
                        <a className="navbar-brand fw-bold fs-1 py-3" href="/">
                            <img
                                src="Logo.png"
                                alt="FreshStart Logo"
                                style={{ width: "75px", height: "75px" }}
                            />
                        </a>
                        <h2>Welcome {user.first_name} {user.last_name}</h2>

                        <div className="d-flex justify-content-center" id="navbarNavAltMarkup">
                            <button className="m-3" onClick={handleLogout}>
                                Log Out
                            </button>
                        </div>
                    </div>
                </nav>
            }
        </div>


    );
};

export default FavNavBar;