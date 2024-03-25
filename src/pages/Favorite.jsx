import React from 'react';
import FavNavBar from './FavNavBar';


const Favorite = () => {

    return (
        <div>
            <h2>My Saved Documents</h2> <br />
            <div className="container">
            <div className="row">
                    <div className="col-6">
                    <h3>Name</h3>  
                    </div>
                    <div className="col">
                       
                    </div>
                    <div className="col">
                      
                    </div>
                </div> <br/>
                <div className="row">
                    <div className="col-6">
                    <span>⭐️</span>Driver's License form 
                    </div>
                    <div className="col">
                        <button>
                            PDF
                        </button>
                    </div>
                    <div className="col">
                        <button>
                            Delete
                        </button>
                    </div>
                    <div className="col">
                        <button>
                            Print
                        </button>
                    </div>
                </div> <br/>
                <div className="row">
                    <div className="col-6">
                    <span>⭐️</span>Food Stamp Application 
                    </div>
                    <div className="col">
                        <button>
                            PDF
                        </button>
                    </div>
                    <div className="col">
                        <button>
                            Delete
                        </button>
                    </div>
                    <div className="col">
                        <button>
                            Print
                        </button>
                    </div>
                </div> <br/>
                <div className="row">
                    <div className="col-6">
                        Section 8 Housing Form 
                    </div>
                    <div className="col">
                        <button>
                            PDF
                        </button>
                    </div>
                    <div className="col">
                        <button>
                            Delete
                        </button>
                    </div>
                    <div className="col">
                        <button>
                            Print
                        </button>
                    </div>
                </div> <br/>
                <div className="row">
                    <div className="col-6">
                    <span>⭐️</span>   My Resume
                    </div>
                    <div className="col">
                        <button>
                            PDF
                        </button>
                    </div>
                    <div className="col">
                        <button>
                            Delete
                        </button>
                    </div>
                    <div className="col">
                        <button>
                            Print
                        </button>
                    </div>
                </div> <br/>
                <div className="row">
                    <div className="col-6">
                        Job Application 
                    </div>
                    <div className="col">
                        <button>
                            PDF
                        </button>
                    </div>
                    <div className="col">
                        <button>
                            Delete
                        </button>
                    </div>
                    <div className="col">
                        <button>
                            Print
                        </button>
                    </div>
                </div>
            </div>
            

        </div>
    );
};

export default Favorite;